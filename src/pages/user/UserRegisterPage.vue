<template>
  <div>
    <!-- 主标题和图片在同一行 -->
    <div style="display: flex; align-items: center; margin-top: 75px;margin-left: 33%">
      <!-- 图片在主标题左边 -->
      <img
          style="max-width: 60px; max-height: 60px; margin-right: 16px;"
          src="https://avatars.githubusercontent.com/u/103118339?v=4"
          alt="Avatar"
      />

      <!-- 主标题 -->
      <h1 style="font-size: 24px;">找小组</h1>
    </div>
    <h2 style="text-align: center; font-size: 18px; margin-top: 8px; color: #666;">在这里注册你的账户哦~</h2>
  </div>

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
          v-model="checkPassword"
          type="password"
          name="checkPassword"
          label="确认密码"
          placeholder="请输入确认密码"
          :rules="[{ required: true, message: '请填写确认密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <div style="margin: 10px 10px 0 10px">
        <van-button block type="primary" plain native-type="submit">注册</van-button>
      </div>
      <div style="margin: 10px 10px 0 10px">
        <van-button block type="primary" plain @click="router.back()">返回</van-button>
      </div>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../../plugins/myAxios.js";
import {showToast} from "vant";
const userAccount = ref("");
const password = ref("");
const checkPassword = ref("");
const router = useRouter();
const onSubmit = async (values) => {
  const res = await myAxios.post('/user/register', {
    userAccount: userAccount.value,
    password: password.value,
    checkPassword: checkPassword.value,
  });
  if(res?.code === 0){
    showToast("成功");
    await router.replace('/user/login');
  }else{
    showToast(`注册失败,${res?.description}`);
  }
};
</script>

<style scoped>

</style>