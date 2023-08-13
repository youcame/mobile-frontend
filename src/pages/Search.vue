<template>
  <form action="/">
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
  <van-row gutter="16">
    <van-col
    <van-tag v-for="tag in activeIds" closeable size="small" type="success" @close="doClose(tag)">{{ tag }}</van-tag>
  </van-row>
  <div></div>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tags"
  />
</template>

<script setup>
import {ref} from 'vue';
import {showToast} from 'vant';
//搜索
const searchText = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => {
  searchText.value = '';
};
//分类选择
const activeIds = ref([]);
const activeIndex = ref(0);
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag
  })
}
const tags = [
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ],
  },
  {
    text: '爱好',
    children: [
      {text: '东方', id: '东方'},
      {text: '术力口', id: '术力口'},
      {text: '洛天依', id: '洛天依'},
    ],
  },
];


</script>

<style scoped>

</style>