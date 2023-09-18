<template>
  <div v-if="user">
    <van-cell title="昵称" to="/user/edit" :value="user.username" is-link @click="toEdit('username','昵称',user.username)"/>
    <van-cell title="账户" :value="user.userAccount" />
    <van-cell title="性别" to="/user/edit" :value="user.gender === 0 ? '男' : '女'" is-link @click="toEdit('gender','昵称',user.gender)"/>
    <van-cell title="头像" to="/user/edit" :value="user.avatarUrl" is-link @click="toEdit('avatarUrl','头像',user.avatarUrl)">
      <img style="height: 48px" src="https://avatars.githubusercontent.com/u/103118339?v=4"/>
    </van-cell>
    <van-cell title="电话" to="/user/edit" :value="user.phone" is-link @click="toEdit('phone','电话',user.phone)"/>
    <van-cell title="邮箱" to="/user/edit" :value="user.email" is-link @click="toEdit('email','邮箱',user.email)"/>
    <van-cell title="创建时间" :value="user.createTime"/>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user";

const router = useRouter();
const user = ref('')
onMounted(async ()=>{
  const res = await getCurrentUser();
  user.value = res;
})

const toEdit = (editKey: string, editName: string,currentValue: string) => {
  router.push({
    path: "/user/edit",
    query: {
      editName,
      editKey,
      currentValue,
    }
  })
}
</script>

<style scoped>

</style>