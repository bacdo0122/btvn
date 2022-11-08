import { fetcher } from "helpers/fetcher"
import { getAccessToken } from "helpers/localStorage";
import { useEffect } from "react";
import { useAppSelector } from "stores/hook";
import { setCategory, setAllCategory } from "reducers/category";
import useSWR from "swr"

export const useCategory = (location:any ,dispatch:any,type:(string | null) = null, search:(string | null) = null) =>{
    const reset = useAppSelector((state:any)=>state.films.reset)
    const {
        data: category,
        error: categoryError,
        mutate: reloadCategory
    } = useSWR(
       ((location.pathname === "/categories" ) && getAccessToken()) ? [search === null ? '/categories?page=1&limit=100' :`/categories?page=1&limit=100&${type}=${search}`, getAccessToken()] : null ,fetcher)
       useEffect(()=>{
        const a = async ()=>{
            const newCategory = await reloadCategory();
         if(category){  
            if(!search){
                dispatch(setAllCategory(newCategory.data))
            }
             dispatch(setCategory(newCategory.data))
         }
       
    
        }
        a();
     },[search, category, reset])
}