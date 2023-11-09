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
</template>

<script setup lang="ts">
import UserType from "../models/user";

interface UserListCardProps{
  userList: UserType[],
}

const props = defineProps<UserListCardProps>()
</script>

<style scoped>

</style>