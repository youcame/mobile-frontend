<template>
  <user-card-list :user-list="userList"/>

  <van-empty v-if="!userList || userList.length < 1" description="什么都没有哦~"/>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import myAxios from "../../plungins/myAxios.js";
import {showToast} from "vant";
import UserCardList from "../../components/UserCardList.vue";
import {getCurrentUser} from "../../services/user";
import UserType from "../../models/user";

const userList = ref([])

onMounted(async () => {
  const currentUser: UserType = await getCurrentUser();
  const userListData = await myAxios.get('/user/recommend',{
    params: {
      pageSize: 8,
      pageNumber: 1
    },
  }).then(function (response) {
    showToast('成功')
    return response?.data?.records;
  }).catch(function (error){
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