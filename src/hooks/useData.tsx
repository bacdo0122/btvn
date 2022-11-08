import { fetcher } from "helpers/fetcher"
import { getAccessToken } from "helpers/localStorage";
import { useEffect } from "react";
import { useAppSelector } from "stores/hook";
import useSWR from "swr"
import { setFilmMostView } from "../reducers/Film";
const useFetchMostViewFilm = (location:any ,dispatch:any,type:(string | null) = null, search:(string | null) = null) =>{
    const reset = useAppSelector((state:any)=>state.films.reset)
    const {
        data: films,
        error: filmError,
        mutate: reloadFilm
    } = useSWR(
       ((location.pathname === "/" || location.pathname === "/films")  && getAccessToken() ) ? [search === null ? '/films?page=1&limit=100' :`/films?page=1&limit=100&${type}=${search}`, getAccessToken()] : null ,fetcher)
   
    useEffect(()=>{
       
       const a = async ()=>{
           const newFilm = await reloadFilm();
        if(films){  

            dispatch(setFilmMostView(newFilm.data))
        }
      
   
       }
       a();
    },[search, films, reset])
 
}

export default useFetchMostViewFilm;