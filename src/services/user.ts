import myAxios from "../plungins/myAxios.js";
import {showToast} from "vant";
import {useRouter} from "vue-router";

export const getCurrentUser = async () =>{
    const router = useRouter();
    const res = await myAxios.get('/user/current')
    if(res.code === 0 ){
        showToast("成功")
        return res.data
    }else{
        showToast("未登录")
        await router.replace('/user/login')
    }
}