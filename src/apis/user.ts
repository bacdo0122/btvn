import { axiosInstance } from 'apis';

export const CreateNewuser = async(name:string, email:string, password:string)=>{
   return  await axiosInstance.post("/user", {
        name,email,password
    })
 
}

export const EditExisUser = async(id:string, name:string, email:string, password:string)=>{
    return await axiosInstance.post("/user/edit", {
        id,  name,email,password
    })

}