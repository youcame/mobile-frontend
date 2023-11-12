<template>
  <van-card
      v-for="team in teamList"
      :key="team.id"
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
        {{"人数"}}<van-icon name="friends-o" />{{`${team?.teamNowNumber}/${team?.maxNum}`}}
      </div>
      <div v-if="team.createTime">
        {{
          '创建时间:' + formatDate(team.createTime)
        }}
      </div>
    </template>
    <template #footer>
      <div v-if="isMyCreate===true">
        <van-button v-if="team.creatorId===currentUser?.id" size="small" type="primary" plain @click="doUpdateTeam(team.id)">更新队伍</van-button>
        <van-button v-if="team.creatorId===currentUser?.id" size="small" type="danger" plain @click="doDeleteTeam(team.id)">解散队伍</van-button>
      </div>
      <div v-if="isShowTotalPage===true">
        <van-button v-if="!team.isInTeam" size="small" type="primary" plain @click="doClickAdd(team)">加入队伍</van-button>
      </div>
      <div v-if="isMyJoin===true">
        <van-button v-if="team.creatorId!==currentUser?.id  && team?.isInTeam" size="small" type="danger" plain @click="doQuitTeam(team.id)">退出队伍</van-button>
      </div>
    </template>
  </van-card>
  <van-dialog v-model:show="showPasswordDialog" title="队伍密码" @confirm="doJoinTeam()" @cancel="cancelAddTeam()" show-cancel-button>
    <van-field v-model="inputPassword" placeholder="请输入队伍密码" required/>
  </van-dialog>
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
import {formatDate} from "../../src/Utils/TimeUtil";
interface TeamCardListProps{
  teamList: TeamType,
  isMyCreate?: boolean,
  isMyJoin?: boolean,
  isShowTotalPage?: boolean,
}
const joinTeamId = ref(0);
const showPasswordDialog = ref(false);
const inputPassword = ref('');
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
const doJoinTeam = async ()=>{
  const res = await myAxios.post('/team/join',{
    "teamId": joinTeamId.value,
    "password": inputPassword.value
  })
  if(res?.code===0){
    showSuccessToast("加入队伍成功")
  }
  else{
    showFailToast(`加入队伍失败! ${res?.description}`)
  }
}
const cancelAddTeam = ()=>{
  showPasswordDialog.value=false;
}
const doClickAdd = (team: TeamType)=>{
  joinTeamId.value = team.id;
  if(team.status===1){
    showPasswordDialog.value=true;
  }else {
    doJoinTeam();
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