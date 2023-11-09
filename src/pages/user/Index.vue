<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <p>刷新次数:</p>
  </van-pull-refresh>
  <user-card-list :user-list="userList"/>
  <van-empty v-if="!userList || userList.length < 1" description="什么都没有哦~"/>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";
import {showToast} from "vant";
import UserCardList from "../../components/UserCardList.vue";
import {getCurrentUser} from "../../services/user";
import UserType from "../../models/user";

const userList = ref([])
const isLoading = ref(false);

const getRecommendUserInfo = async () => {
  const currentUser: UserType = await getCurrentUser();
  // const userListData = await myAxios.get('/user/recommend',{
  const userListData = await myAxios.get('/user/match',{
    params: {
      pageSize: 8,
      pageNumber: 1
    },
  }).then(function (response) {
    showToast('成功')
    // return response?.data?.records;
    return response?.data
  }).catch(function (error){
    showToast('失败')
  })
  if(userListData){
    userListData.forEach(user =>{
      user.tags = JSON.parse(user.tags);
    })
    userList.value = userListData;
  }
}

const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功');
    loading.value = false;
    console.log(1);
    getRecommendUserInfo();
  }, 1000);
};

onMounted(async () => await getRecommendUserInfo())
</script>

<style scoped >

</style>