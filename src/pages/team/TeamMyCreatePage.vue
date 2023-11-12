<template>
  <div align="center">
    创建的队伍
  </div>
  <div id="teamButton">
    <van-search v-model="searchText" placeholder="搜索队伍" @search="onSearch"/>
    <team-card-list :team-list="teamList" :is-my-create="true"/>
    <div style="margin: 10px 15px 0 15px">
      <van-button plain type="primary" @click="joinTeam" block>创建队伍</van-button>
    </div>
    <van-empty v-if="! teamList|| teamList.length < 1" description="什么都没有哦~"/>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import TeamCardList from "../../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";
import {showFailToast, showToast} from "vant";
const router = useRouter();
const teamList = ref([])
const searchText = ref('')
const joinTeam = () => {
  router.push({
    path: "/team/create"
  })
}
const searchList = async (val = '')=>{
  const res = await myAxios.get('/team/list/myTeams',{
    params:{
      searchText: val,
      pageNum: 1,
    }
  })
  if(res?.code===0){
    teamList.value=res?.data;
  }else{
    showToast(`获取队伍信息失败，${res?.description}`);
  }
}
const onSearch = async (val)=>{
  await searchList(val);
}
onMounted(async ()=>{await searchList()})
</script>

<style scoped>

</style>