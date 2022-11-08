import { axiosInstance } from 'apis';

export const CreateNewFilm = async(name:string, filmId:number, domainType:number,actors: string[],categories:string[] )=>{
    const { data } = await axiosInstance.post("/films", {
        name,filmId,domainType,actors,categories
    })
    return data;
}

export const EditFilm = async(id:string, name:string, filmId:number, domainType:number,actors: string[],categories:string[] )=>{
    const { data } = await axiosInstance.post("/films/edit", {
       id, name,filmId,domainType,actors,categories
    })
    return data;
}