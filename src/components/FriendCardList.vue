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
      <van-button size="small" @click="toDetail(user.id)" type="primary" plain>查看详情</van-button>
      <van-button size="small" @click="delete(user.id)" type="danger" plain>删除好友</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import UserType from "../models/user";
import {useRouter} from "vue-router";
const router = useRouter();

interface UserListCardProps{
  userList: UserType[],
}
const toDetail = (id: number)=>{
  console.log(id);
  router.push({
    path: "/user/detail",
    query: {
      id: id.toString(),
    }
  })
}

const props = defineProps<UserListCardProps>()
</script>

<style scoped>

</style>