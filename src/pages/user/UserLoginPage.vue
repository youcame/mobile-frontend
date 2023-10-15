<template>
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
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
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
const router = useRouter();
const onSubmit = async (values) => {
  const res = await myAxios.post('/user/login', {
    userAccount: userAccount.value,
    password: password.value,
  });
  if(res.code === 0){
    showToast("成功");
    await router.replace('/');
  }else{
    showToast("失败");
  }
  console.log('submit', values);
};
</script>

<style scoped>

</style>