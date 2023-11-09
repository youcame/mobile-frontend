<template>
  <div>
    <van-nav-bar
        title="搜索"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="18"/>
      </template>
    </van-nav-bar>

    <div id="content">
      <router-view/>
    </div>
    <div style="text-align: center">
<!--      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" style="color: dodgerblue;position: absolute;height:80px;bottom: 0;right: 25%">浙ICP备2023023407号-2</a>-->
    </div>
    <van-tabbar @change="onChange" route>
      <van-tabbar-item icon="home-o" name="index" to="/">主页</van-tabbar-item>
      <van-tabbar-item icon="search" name="team" to="/team">队伍</van-tabbar-item>
      <van-tabbar-item icon="friends-o" name="user" to="/user/all">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
const onChange = (index) => {};
const onClickLeft = () => {
  router.back();
};
const onClickRight = () => {
  router.push("/search")
};
</script>


<style scoped>
#content {
  padding-bottom: 40px;
}
</style>