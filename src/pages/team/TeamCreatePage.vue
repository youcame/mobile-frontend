<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="formValue.name"
          name="队伍名称"
          label="队伍名称"
          placeholder="请输入队伍名称"
          required
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="formValue.maxNum"
          type="digit"
          label="最大人数"
          required
          placeholder="请输入队伍最大人数"
          :rules="[{required: true,message: '请填写最大用户人数'},{max: 10,message: '最多不超过十人'},{min: 1,message: '最少不低于1人'}]"
      />
      <van-field
          v-model="formValue.description"
          required
          rows="4"
          autosize
          label="队伍描述"
          type="textarea"
          maxlength="50"
          placeholder="请输入队伍描述"
          show-word-limit
      />
      <van-field name="radio" label="单选框" required>
        <template #input>
          <van-radio-group v-model="formValue.status" direction="horizontal">
            <van-radio name=0>公开</van-radio>
            <van-radio name=1>加密</van-radio>
            <van-radio name=2>私人</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div v-if="formValue.status==='1'">
        <van-field
            v-model="formValue.password"
            required
            name="密码"
            label="密码"
            placeholder="请输入队伍密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
      </div>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import {ref, watch} from "vue";
import myAxios from "../../plungins/myAxios.js";
import {showToast} from "vant";
  const check = ref('1');
  const initValue = {
    "description": "",
    "expireTime": "",
    "maxNum": 0,
    "name": "",
    "password": "",
    "status": 0
  }
  let formValue = ref({...initValue})
  const onSubmit= async (value) => {
    const res = await myAxios.post('/team/add', {
      "description": formValue.value.description,
      "expireTime": formValue.value.expireTime,
      "maxNum": formValue.value.expireTime,
      "name": formValue.value.name,
      "password": formValue.value.name,
      "status": parseInt(formValue.value.status)
    })
    if(res.code===0)showToast("添加队伍成功")
    else{
      showToast("添加队伍失败",res?.message)
    }
  }
</script>

<style scoped>

</style>