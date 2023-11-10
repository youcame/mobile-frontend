import myAxios from "../plugins/myAxios.js";
import {showToast} from "vant";
import {useRoute, useRouter} from "vue-router";

export const getCurrentUser = async () =>{
    const route = useRoute();
    const teamList= ['/'];
    const router = useRouter();
    const res = await myAxios.get('/user/current')
    if(res.code === 0 ){
        const path = router.currentRoute;
        console.log("123",path.value)
        return res.data
    }else{
        showToast("您还没有登录哦~")
        const path = router.currentRoute;
        //if(! whiteList.includes(path.value?.path)) 
        await router.replace('/user/login')
    }
}