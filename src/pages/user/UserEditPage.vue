<template>
  <van-form @submit="onSubmit">
    <van-field
        v-model="editUser.currentValue"
        :name="editUser.editKey"
        :label="editUser.editName"
        :placeholder="`请输入${editUser.editName}`"
    />
    <div style="margin: 16px;">
      <div style="margin: 10px 10px 0 10px">
        <van-button block type="primary" plain native-type="submit">提交</van-button>
      </div>
    </div>
  </van-form>
</template>

<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";
import {onMounted, Ref, ref} from "vue";
import myAxios from "../../plugins/myAxios.js";
import {showToast, Toast} from "vant";
import {getCurrentUser} from "../../services/user";
import UserType from "../../models/user";
const user:Ref<UserType|null> = ref(null)
const route = useRoute();
const router = useRouter();
const editUser = ref({
  editName: route.query.editName,
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
})
console.log(route.query);
onMounted(async () =>{
  const res = await getCurrentUser()
  user.value = res
})
const onSubmit = async () =>{
  const res = await myAxios.post('/user/update',{
    'id': user.value?.id,
    [editUser.value.editKey]: editUser.value.currentValue,
  })
  if(res?.code === 0 && res.data === true){
    showToast("成功");
    router.back();
  }
  else{
    showToast("失败了")
  }
}
</script>

<style scoped>

</style>