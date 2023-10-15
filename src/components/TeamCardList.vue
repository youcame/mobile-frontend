<template>
  <div align="center">
    我的队伍
  </div>
  <van-card
      v-for="team in teamList"
      :desc="team.description"
      :title="team.name"
      :thumb="team?.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" style="margin-right: 4px;margin-top: 4px">
        {{teamStatusEnum[team.status] }}
      </van-tag>
    </template>
    <template #bottom>
      <div>
        {{'最大人数:'+team?.maxNum }}
      </div>
      <div v-if="team.createTime">
        {{'创建时间:'+team.createTime}}
      </div>
    </template>
    <template #footer>
      <van-button size="small" type="primary" plain @click="doJoinTeam(team.id,team.password)">加入队伍</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import TeamType from "../models/team";
import {teamStatusEnum} from "../constants/team.ts";
import myAxios from "../plugins/myAxios.js";
import {showFailToast, showSuccessToast, showToast} from "vant";
interface TeamCardListProps{
  teamList: TeamType
}

const props = defineProps<TeamCardListProps>()

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

</script>

<style scoped>

</style>