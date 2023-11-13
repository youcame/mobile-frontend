<template>
  <user-card-list :user-list="userList"/>
  <van-empty v-if="!userList || userList.length < 1" description="什么都没有哦~"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";
import {showToast} from "vant";
import UserCardList from "../../components/UserCardList.vue";
import {getCurrentUser} from "../../services/user";
import {useRoute} from "vue-router";

const userList = ref([])
const route = useRoute();
const teamId = ref(0);
const getTeamMemberInfo = async () => {
  teamId.value = Number(route.query.teamId);
  const userListData = await myAxios.get('/team/getByTeamId',{
    params: {
      teamId: teamId.value,
    },
  }).then(function (response) {
    // return response?.data?.records;
    return response?.data
  }).catch(function (error){
    showToast('失败')
  })
  if(userListData){
    userListData.forEach(user =>{
      user.tags = JSON.parse(user.tags);
    })
    userList.value = userListData;
  }
}


onMounted(async () => {
  await getTeamMemberInfo()
})
</script>

<style scoped >

</style>