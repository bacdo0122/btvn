import { axiosInstance } from 'apis';

export const CreateNewCategory = async(name:string)=>{
   return  await axiosInstance.post("/categories", {
        name
    })
 
}

export const EditExisCategory = async(id:string, name:string)=>{
    return await axiosInstance.post("/categories/edit", {
        id, name
    })

}