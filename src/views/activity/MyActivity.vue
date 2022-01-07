<script setup lang="ts">
import { NavBar,Search } from 'vant';
import {provide, ref} from "vue";
import MyActivityItem from "@components/MyActivity/MyActivityItem.vue";
import {useRouter} from "vue-router";
const comeback = () => {
  history.back()
}
const value = ref('');
provide("myActivity",1)
const router = useRouter();
</script>
<template>
  <NavBar
      class="nav"
      title="我的活动"
      left-text="返回"
      left-arrow
      @click-left="comeback"
  />
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
