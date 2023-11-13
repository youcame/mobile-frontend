<template>
  <div v-if="user">
    <van-cell title="昵称" :value="user.username"/>
    <van-cell title="性别" :value="user.gender === 0 ? '男' : '女' "/>
    <van-cell title="简介" :value="user.profile"/>
    <van-cell title="头像" :value="user.avatarUrl">
      <img style="height: 48px" :src="user.avatarUrl"/>
    </van-cell>
    <van-cell title="电话" :value="user.phone"/>
    <van-cell title="邮箱" :value="user.email"/>
  </div>
  <div style="margin: 10px 15px 0 15px">
    <van-button plain type="primary" @click="addFriend(user.id)" block>添加好友</van-button>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {onMounted, Ref, ref} from "vue";
import UserType from "../../models/user";
import myAxios from "../../plugins/myAxios.js";
import {showFailToast, showSuccessToast} from "vant";

const router = useRouter();
const route = useRoute();
const user: Ref<UserType|null> = ref(null)
onMounted(async ()=>{
  const id = route.query.id;
  const res = await myAxios.get('/user/get',{
    params: {
      id: id,
    }
  })
  user.value = res?.data;
})
const addFriend = async (id: number)=>{
  const res = await myAxios.post('/friend/send/request',null,{
    params:{
      receiverId: id,
    }
  });
  if(res?.code===0) {
    showSuccessToast("好友请求发送成功");
  }else {
    showFailToast(`请求发送失败,${res?.description}`)
  }
}
</script>

<style scoped>

</style>