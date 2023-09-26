<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="formValue.name"
          name="队伍名称"
          label="队伍名称"
          placeholder="请输入队伍名称"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="formValue.description"
          rows="4"
          autosize
          label="队伍描述"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
      />
      <van-field name="radio" label="单选框">
        <template #input>
          <van-radio-group v-model="formValue.status" direction="horizontal">
            <van-radio name="0">公开</van-radio>
            <van-radio name="1">加密</van-radio>
            <van-radio name="2">私人</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div v-if="formValue.status===1">
        <van-field
            v-model="formValue.name"
            name="队伍名称"
            label="队伍名称"
            placeholder="请输入队伍名称"
            :rules="[{ required: true, message: '请填写用户名' }]"
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
  import {ref} from "vue";
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
  const onSubmit= (value)=>{
    console.log(formValue.value.status)
  }
</script>

<style scoped>

</style>