<template>
  <van-card
      v-for="team in teamList"
      :desc="team.description"
      :title="team.name"
      :thumb="team?.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" style="margin-right: 4px;margin-top: 4px">
        {{
          teamStatusEnum[team.status]
        }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">查看详情</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import TeamType from "../models/team";
import {teamStatusEnum} from "../constants/team.ts";
interface TeamCardListProps{
  teamList: TeamType
}

const props = defineProps<TeamCardListProps>()
</script>

<style scoped>

</style>