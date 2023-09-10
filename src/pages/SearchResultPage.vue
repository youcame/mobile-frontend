<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="user.username"
      :thumb="user?.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tag in user.tags" style="margin-right: 4px;margin-top: 4px">{{tag}}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">查看详情</van-button>
    </template>
  </van-card>

  <van-empty v-if="!userList || userList.length < 1" description="什么也没搜到哟~"/>
</template>

<script setup >
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plungins/myAxios.js";
import {showToast} from "vant";
import qs from 'qs';

const route = useRoute();
const {tags} = route.query;

const mockUser = {
  id: 12345,
  username: 'huang',
  profile: '这是个简介',
  userAccount: 'admin',
  gender: 1,
  phone: 12345,
  tags: ['东方','洛天依'],
  userStatus: 0,
  userRole: 1,
  avatarUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
};
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
    console.log("请求tags成功",response);
    showToast('成功')
    console.log("response为：", response);
    return response.data?.data;
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