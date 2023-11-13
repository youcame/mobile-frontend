<template>
  <van-collapse v-model="activeNames">
    <van-collapse-item title="好友请求" name="2" icon="friends-o">
      <div v-if="userRequestList.length === 0">
        目前没有任何请求哦~
      </div>
      <friend-request-card-list v-else :user-list="userRequestList" />
    </van-collapse-item>
  </van-collapse>
  <van-divider>我的好友</van-divider>
  <friend-card-list :user-list="userList"/>
  <van-empty v-if="!userList || userList.length < 1" description="什么都没有哦~"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";
import {showToast} from "vant";
import UserCardList from "../../components/UserCardList.vue";
import {getCurrentUser} from "../../services/user";
import FriendCardList from "../../components/FriendCardList.vue";

const userRequestList = ref([]);
const userList = ref([])
const activeNames = ref(['1']);

const getFriendListInfo = async () => {
  const userListData = await myAxios.get('/friend/list').then(function (response) {
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

const getRequestListInfo = async () => {
  const userListData = await myAxios.get('/friend/unresolved').then(function (response) {
    return response?.data
  }).catch(function (error){
    showToast('失败')
  })
  if(userListData){
    userListData.forEach(user =>{
      user.tags = JSON.parse(user.tags);
    })
    userRequestList.value = userListData;
  }
}


onMounted(async () => {
  await getCurrentUser();
  await getRequestListInfo();
  await getFriendListInfo()
})
</script>

<style scoped >

</style>