import { axiosInstance } from 'apis';

export const CreateNewActor = async(name:string, bod:string, description:string)=>{
   return  await axiosInstance.post("/actors", {
        name,bod,descriptions:description
    })
 
}

export const EditExisActor = async(id:string, name:string, bod:string, description:string)=>{
    return await axiosInstance.post("/actors/edit", {
        id, name,bod,descriptions:description
    })

}