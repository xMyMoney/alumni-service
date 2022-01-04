<script setup lang="ts">
import { NavBar, Search } from 'vant';
import MyNoticeItemPlus from "@components/MyNotices/MyNoticeItemPlus.vue";
const comeback = () => {
  history.back()
}
import { ref } from 'vue';

const value = ref('');
</script>

<template>
<div class="main">
  <NavBar
      class="nav"
      title="通知公告"
      left-text="返回"
      left-arrow
      @click-left="comeback"
  />
  <Search class="search" v-model="value" shape="round" placeholder="请输入搜索关键词"/>

  <MyNoticeItemPlus/>
  <MyNoticeItemPlus/>
  <MyNoticeItemPlus/>
</div>
</template>
<style scoped lang="less">
.main {
  .search {
    margin: 1rem;
  }
}
</style>
