export const getAccessToken =  ()=>{
    if(typeof window !== 'undefined'){
        return localStorage.getItem(String(process.env.PUBLIC_ACCESS_TOKEN_KEY))
    }
}
export const getRefreshToken =  ()=>{
    if(typeof window !== 'undefined'){
        return localStorage.getItem(String(process.env.PUBLIC_REFRESH_TOKEN_KEY))
    }
}
export const setAccessToken = (token:string)=>{
    if(typeof window !== 'undefined'){
        return localStorage.setItem(String(process.env.PUBLIC_ACCESS_TOKEN_KEY),token )
    }
}
export const setRefreshToken = (token:string)=>{
    if(typeof window !== 'undefined'){
        return localStorage.setItem(String(process.env.PUBLIC_REFRESH_TOKEN_KEY),token )
    }
}