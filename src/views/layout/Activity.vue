<script setup lang="ts">
import {Search,Tab, Tabs} from "vant";
import {provide, ref} from 'vue';
import MyActivityItem from "@components/MyActivity/MyActivityItem.vue";
import {useRouter} from "vue-router";
const router = useRouter();
const value = ref('');
const active = ref(0);
provide("activeFlag",active)
const createActive = () => {
  router.push('createActive')
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

  <Tabs v-model:active="active">
    <Tab title="所有活动">
      <MyActivityItem/>
      <MyActivityItem/>
      <MyActivityItem/>
      <MyActivityItem/>
      <MyActivityItem/>
      <MyActivityItem/>
    </Tab>
    <Tab title="我的活动">
      <MyActivityItem/>
      <MyActivityItem/>
    </Tab>
  </Tabs>

</template>

<style scoped>

</style>
