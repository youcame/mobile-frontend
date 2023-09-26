<template>
  <div id="teamButton">
    <van-button plain type="primary" @click="joinTeam">加入队伍</van-button>
  </div>
</template>

<script setup>
  import {useRouter} from "vue-router";

  const router = useRouter();
  const joinTeam = () =>{
    router.push({
      path: "team/create"
    })
    alert(1);
  }
</script>

<style scoped>

</style>