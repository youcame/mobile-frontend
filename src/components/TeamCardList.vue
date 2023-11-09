<template>
<!--  <div align="center">-->
<!--    我的队伍-->
<!--  </div>-->

  <van-card
      v-for="team in teamList"
      :desc="team.description"
      :title="team.name"
      :thumb=teamLogo
  >
    <template #tags>
      <van-tag plain type="primary" style="margin-right: 4px;margin-top: 4px">
        {{teamStatusEnum[team.status] }}
      </van-tag>
    </template>
    <template #bottom>
      <div>
        {{ '最大人数:'+team?.maxNum }}
      </div>
      <div v-if="team.createTime">
        {{'创建时间:'+team.createTime}}
      </div>
    </template>
    <template #footer>
      <van-button v-if="team.creatorId===currentUser?.id" size="small" type="primary" plain @click="doUpdateTeam(team.id)">更新队伍</van-button>
      <van-button v-if="!team.isInTeam" size="small" type="primary" plain @click="doJoinTeam(team.id,team.password)">加入队伍</van-button>
      <van-button v-if="team.creatorId!==currentUser?.id  && team?.isInTeam" size="small" type="danger" plain @click="doQuitTeam(team.id)">退出队伍</van-button>
      <van-button v-if="team.creatorId===currentUser?.id" size="small" type="danger" plain @click="doDeleteTeam(team.id)">解散队伍</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import TeamType from "../models/team";
import {teamStatusEnum} from "../constants/team.ts";
import myAxios from "../plugins/myAxios.js";
import {showFailToast, showSuccessToast} from "vant";
import teamLogo from "../assets/logo.jpg"
import {getCurrentUser} from "../services/user";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
interface TeamCardListProps{
  teamList: TeamType
}

const router =useRouter();
const props = defineProps<TeamCardListProps>()
const currentUser = ref('');
onMounted(async ()=>{
  currentUser.value=await getCurrentUser();
})
const doUpdateTeam= async (id)=>{
  await router.push({
    path: "/team/update",
    query: {
      id: id,
    },
    replace: false
  })
}
const doJoinTeam = async (id,password)=>{
  const res = await myAxios.post('/team/join',{
    "teamId": id,
    "password": password
  })
  if(res?.code===0){
    showSuccessToast("加入队伍成功")
  }
  else{
    showFailToast(`加入队伍失败! ${res?.description}`)
  }
}

const doQuitTeam = async (id)=>{
  const res = await myAxios.post('/team/quit',{
    "id": id,
  })
  if(res?.code===0){
    showSuccessToast("退出队伍成功")
  }
  else{
    showFailToast(`退出队伍失败! ${res?.description}`)
  }
}

const doDeleteTeam = async (id)=>{
  const res = await myAxios.post('/team/delete', {
    id
  })
  if(res?.code===0){
    showSuccessToast("解散队伍成功")
  }
  else{
    showFailToast(`解散队伍失败! ${res?.description}`)
  }
}

</script>

<style scoped>

</style>