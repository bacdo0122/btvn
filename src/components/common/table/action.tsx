import { axiosInstance } from 'apis';
import React, { useEffect } from 'react';
import { setReset } from 'reducers/Film';
export const deleteUser =  async (id:number )=>{

    await axiosInstance.post("/films/delete",{
        id
    });
   
}
export const deleteActor =  async (id:number )=>{

    await axiosInstance.post("/actors/delete",{
        id
    });
   
}
export const deleteCategory =  async (id:number )=>{

    await axiosInstance.post("/categories/delete",{
        id
    });
   
}
export const deleteUserAdmin =  async (id:number )=>{

    await axiosInstance.post("/user/delete",{
        id
    });
   
}