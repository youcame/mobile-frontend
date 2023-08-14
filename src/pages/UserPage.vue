<template>
  <van-cell title="昵称" to="/user/edit" :value="user.username" is-link />
  <van-cell title="账户" :value="user.userAccount" />
  <van-cell title="性别" to="/user/edit" :value="user.gender === 0 ? '男' : '女'" is-link />
  <van-cell title="头像" to="/user/edit" :value="user.avatarUrl" is-link >
    <img style="height: 48px" src="https://avatars.githubusercontent.com/u/103118339?v=4"/>
  </van-cell>
  <van-cell title="电话" to="/user/edit" :value="user.phone" is-link />
  <van-cell title="邮箱" to="/user/edit" :value="user.email" is-link />
  <van-cell title="创建时间" :value="user.createTime.toISOString()"/>
</template>

<script setup>
const user = {
  id: 1,
  username: 'ice',
  userAccount: 'iceice',
  avatarUrl: "https://space.bilibili.com/234120375?spm_id_from=333.1007.0.0",
  gender: 0,
  phone: 10086,
  email: "10086@qq.com",
  // tags: string[],
  userRole: 1,
  createTime: new Date(),
};
</script>

<style scoped>

</style>