<script setup lang="ts">
import {Search,Tab, Tabs} from "vant";
import { ref } from 'vue';
import MyActivityItem from "@components/MyActivity/MyActivityItem.vue";
import {useRouter} from "vue-router";
import MyHelpItem from "@components/MyHelp/MyHelpItem.vue";
const router = useRouter();
const value = ref('');
const active = ref(0);
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
      <div @click="createActive">发布</div>
    </template>
  </Search>

  <Tabs v-model:active="active" animated swipeable duration="0.3">
    <Tab title="所有互助">
      <MyHelpItem/>
      <MyHelpItem/>
      <MyHelpItem/>
      <MyHelpItem/>
    </Tab>
    <Tab title="最热互助">
      <MyHelpItem/>
      <MyHelpItem/>
      <MyHelpItem/>
    </Tab>
    <tab title="资源合作">
      <MyHelpItem/>
      <MyHelpItem/>
    </tab>
    <tab title="创业合作">
      <MyHelpItem/>
      <MyHelpItem/>
      <MyHelpItem/>
      <MyHelpItem/>
    </tab>
    <tab title="求职招聘">
      <MyHelpItem/>
      <MyHelpItem/>
    </tab>
  </Tabs>

</template>

<style scoped>

</style>
