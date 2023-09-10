import myAxios from "../plungins/myAxios.js";

export const getCurrentUser = async () =>{
    return await myAxios.get('/user/current')
}