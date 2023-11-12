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
          :rules="[{required: true,message: '请填写最大用户人数'},{pattern,message: '人数在1-10人之间'}]"
      />
      <van-field
          v-model="formValue.expireTime"
          is-link
          readonly
          name="datePicker"
          label="过期时间"
          placeholder="点击选择时间"
          @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" :min-date="minDate"/>
      </van-popup>
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
import myAxios from "../../plugins/myAxios.js";
import {showToast} from "vant";
import {useRouter} from "vue-router";

  const check = ref('1');
  const initValue = {
    "description": "",
    "expireTime": "",
    "maxNum": null,
    "name": "",
    "password": "",
    "status": 0
  }
  const router = useRouter();
  let formValue = ref({...initValue})
  const onSubmit= async (value) => {
    const postData = {
      ...formValue.value,
      "status": parseInt(formValue.value.status),
    }
    const res = await myAxios.post('/team/add', postData)
    if(res.code===0){
      showToast("添加队伍成功")
      await router.push({
        path: '/team',
        replace: true
      })
    }
    else{
      showToast(`添加队伍失败,${res?.description}`)
    }
  }

  //时间选择器
  const minDate = new Date();
  minDate.setDate(minDate.getDate()+1)
  const showPicker = ref(false);
  const onConfirm = ({ selectedValues }) => {
    formValue.value.expireTime = selectedValues.join('-');
    showPicker.value = false;
  };
  //校验最大人数
  const pattern = /^(1[0-9]|20|[1-9])$/
</script>

<style scoped>

</style>