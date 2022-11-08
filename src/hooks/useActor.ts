import { fetcher } from "helpers/fetcher"
import { getAccessToken } from "helpers/localStorage";
import { useEffect } from "react";
import { useAppSelector } from "stores/hook";
import useSWR from "swr"
import { setActors, setAllActor } from "reducers/actor";


export const useActor = (location:any ,dispatch:any,type:(string | null) = null, search:(string | null) = null) =>{
    const reset = useAppSelector((state:any)=>state.films.reset)
    const {
        data: actors,
        error: actorError,
        mutate: reloadActor
    } = useSWR(
       ((location.pathname === "/films" || location.pathname === "/actors") && getAccessToken()) ? [search === null ? '/actors?page=1&limit=100' :`/actors?page=1&limit=100&${type}=${search}`, getAccessToken()] : null ,fetcher)
       useEffect(()=>{
        const a = async ()=>{
            const newActor = await reloadActor();
         if(actors){  
            if(!search){
                dispatch(setAllActor(newActor.data))
            }
             dispatch(setActors(newActor.data))
         }
       
    
        }
        a();
     },[search, actors, reset])
}