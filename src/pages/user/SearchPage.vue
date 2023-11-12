<template>
  <form action="/public">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        fixed
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <van-row gutter="8" style="{padding: 16px}">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="small" type="success" @close="doClose(tag)">{{ tag }}</van-tag>
    </van-col>
  </van-row>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tags"
  />
  <div style="padding: 20px">
    <van-button plain type="primary" loading-text="搜索中" @click="getResult" block>搜索</van-button>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";
import {originTags} from "../../constants/user.ts";
const router = useRouter();
//搜索结果
const getResult = () =>{
  router.push({
    path: 'user/list',
    query: {
      tags: activeIds.value,
    }
  })
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
const activeIds = ref([]);
const activeIndex = ref(0);
//关闭
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag
  })
}


let tags = ref(originTags);


</script>

<style scoped>

</style>