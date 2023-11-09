<template>
  <div v-if="user">
    <van-cell title="昵称" :value="user.username" />
    <van-cell title="详细信息" to="/user" is-link/>
    <van-cell title="我的队伍" is-link @click="viewMyTeam" />
    <van-cell title="加入的队伍" is-link @click="viewJoinTeam"/>
    <div style="margin: 10px 15px 0 15px">
      <van-button type="warning" text="切换账号" block @click="logout">退出账号</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../../services/user";
import myAxios from "../../plugins/myAxios.js";

const router = useRouter();
const user = ref('')
onMounted(async ()=>{
  const res = await getCurrentUser();
  user.value = res;
})
const viewMyTeam=()=>{
  router.push({
    path: "/user/team/create"
  })
}
const viewJoinTeam=()=>{
  router.push({
    path: "/user/team/join"
  })
}
const logout=async ()=>{
  const res = await myAxios.post('/user/logout');
  console.log(res)
}
</script>

<style scoped>

</style>