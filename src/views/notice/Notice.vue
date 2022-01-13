<script setup lang="ts">
import { NavBar, Search } from 'vant';
import MyNoticeItemPlus from "@components/MyNotices/MyNoticeItemPlus.vue";
import {provide, ref} from 'vue';
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
provide('navTitle','通知公告')
const value = ref('');
</script>

<template>
<div class="main">
  <MyNavBar/>
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
