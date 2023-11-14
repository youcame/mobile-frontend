<template>
  <van-divider content-position="left">我的标签</van-divider>
  <van-row gutter="8" style="{padding: 16px}">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="small" type="primary" @close="doClose(tag)" plain >{{ tag }}</van-tag>
    </van-col>
  </van-row>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tags"
  />
  <div style="padding: 20px">
    <van-button plain type="primary" loading-text="保存中" @click="saveResult" block>保存</van-button>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useRouter} from "vue-router";
import {originTags} from "../../constants/user.ts";
import {getCurrentUser} from "../../services/user.ts";
import myAxios from "../../plugins/myAxios.js";
import {showFailToast, showSuccessToast} from "vant";
const router = useRouter();
//搜索结果
const saveResult = async () =>{
  try {
    let res = await getCurrentUser();
    res.tags = String(activeIds.value);
    const result = await myAxios.post('/user/update', res);
    if(result?.code===0){
      showSuccessToast("保存成功");
      await router.replace("/user/all");
    }else {
      showFailToast("保存失败");
    }
  }catch (error){
    showFailToast(error.message);
  }
}
//搜索标签
const searchText = ref('');
//搜索函数
const onSearch = (val) => {
  tags.value = originTags.map(parentItem => {
    const temp = {...parentItem};
    temp.children = temp.children.filter(item => item.text.includes(searchText.value));
    return temp
  })
};
//取消
const onCancel = () => {
  searchText.value = '';
  tags.value = originTags;
};
//分类选择
const activeIds = ref([1]);
const activeIndex = ref(0);
//关闭
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag
  })
}
onMounted(async ()=>{
  const res = await getCurrentUser();
  const tags = res?.tags;
  activeIds.value = JSON.parse(tags);
})


let tags = ref(originTags);


</script>

<style scoped>

</style>