<template>
  <div id="teamButton">
    <team-card-list :team-list="teamList" />
    <van-button plain type="primary" @click="joinTeam">添加队伍</van-button>
  </div>
</template>

<script setup>
  import {useRouter} from "vue-router";
  import TeamCardList from "../../components/TeamCardList.vue";
  import {onMounted, ref} from "vue";
  import myAxios from "../../plugins/myAxios.js";
  import {showToast} from "vant";
  const router = useRouter();
  const joinTeam = () => {
    router.push({
      path: "team/create"
    })
  }
  const teamList = ref([])
  onMounted(async () =>{
    const res = await myAxios.get('/team/list',{});
    if(res.code===0){
      teamList.value=res.data
    }else{
      showToast(`获取队伍信息失败，${res?.description}`)
    }
  })
</script>

<style scoped>

</style>