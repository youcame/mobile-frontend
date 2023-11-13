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
      <van-button size="small" @click="acceptRequest(user.id)" type="primary" plain>接受申请</van-button>
      <van-button size="small" @click="deleteRequest(user.id)" type="danger" plain>拒绝申请</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import UserType from "../models/user";
import {useRouter} from "vue-router";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";
const router = useRouter();

interface UserListCardProps{
  userList: UserType[],
}
const deleteRequest = async (id: number)=>{
  const res = await myAxios.post('/friend/deny',null,{
    params:{
      id: id,
    }
  });
  if(res?.code===0) {
    showSuccessToast("拒绝成功");
  }else {
    showFailToast(`拒绝失败,${res?.message}`)
  }
}

const acceptRequest = async (id: number)=>{
  const res = await myAxios.post('/friend/accept',null,{
    params:{
      id: id,
    }
  });
  if(res?.code===0) {
    showSuccessToast("接受成功");
  }else {
    showFailToast(`接受失败,${res?.description}`)
  }
}

const props = defineProps<UserListCardProps>()
</script>

<style scoped>

</style>