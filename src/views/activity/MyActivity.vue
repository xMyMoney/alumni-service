<script setup lang="ts">
import { Search } from 'vant';
import {provide, ref} from "vue";
import MyActivityItem from "@components/MyActivity/MyActivityItem.vue";
import {useRouter} from "vue-router";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
const value = ref('');
provide("myActivity",1)
provide('navTitle','我的活动')
const router = useRouter();
</script>
<template>
  <MyNavBar/>
  <Search class="search"
          show-action
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词">
    <template #action>
      <div @click="router.push('/createActivity')">发起</div>
    </template>
  </Search>
  <MyActivityItem/>
  <MyActivityItem/>
  <MyActivityItem/>
  <MyActivityItem/>
</template>

<style scoped>

</style>
