<script setup lang="ts">
import {Search,Tab, Tabs} from "vant";
import {provide, ref} from 'vue';
import MyActivityItem from "@components/MyActivity/MyActivityItem.vue";
import {useRouter} from "vue-router";
const router = useRouter();
const value = ref('');
const active = ref(0);
provide("myActivity",0)
const createActive = () => {
  router.push('createActivity')
}
</script>
<template>
  <Search class="search"
          show-action
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词">
    <template #action>
      <div @click="createActive">发起</div>
    </template>
  </Search>

  <Tabs v-model:active="active" animated swipeable duration="0.3">
    <Tab title="所有活动">
      <MyActivityItem/>
      <MyActivityItem/>
      <MyActivityItem/>
      <MyActivityItem/>
      <MyActivityItem/>
      <MyActivityItem/>
    </Tab>
    <Tab title="最热活动">
      <MyActivityItem/>
      <MyActivityItem/>
      <MyActivityItem/>
    </Tab>
    <Tab title="周年校庆">
      <MyActivityItem/>
      <MyActivityItem/>
    </Tab>
    <Tab title="同学聚会">
      <MyActivityItem/>
      <MyActivityItem/>
      <MyActivityItem/>
      <MyActivityItem/>
    </Tab>
  </Tabs>

</template>

<style scoped lang="less">

</style>
