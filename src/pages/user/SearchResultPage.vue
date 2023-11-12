<template>
  <user-card-list :user-list="userList"/>

  <van-empty v-if="!userList || userList.length < 1" description="什么也没搜到哟~"/>
</template>

<script setup >
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";
import {showToast} from "vant";
import qs from 'qs';

const route = useRoute();
const {tags} = route.query;
const userList = ref([])

onMounted(async () => {
  const userListData = await myAxios.get('/user/search/tags',{
    params: {
      tags: tags,
    },
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  }).then(function (response) {
    console.log("response为：", response);
    return response.data;
  }).catch(function (error){
    console.log("请求tags失败",error)
    showToast('失败')
  })
  if(userListData){
    userListData.forEach(user =>{
      user.tags = JSON.parse(user.tags);
    })
    userList.value = userListData;
  }
})
</script>

<style scoped >

</style>