<script setup lang="ts">
import { Search } from 'vant';
import {onMounted, provide, ref} from "vue";
import MyActivityItem from "@components/MyActivity/MyActivityItem.vue";
import {useRouter} from "vue-router";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {useXhr} from "@hooks/useXhr";
import {getJoined} from "@api/activity";
const value = ref('');
provide("myActivity",1)
provide('navTitle','我的活动')
import {useStore} from "../../store/user-info";
const userStore = useStore()
const router = useRouter();
const adapter = async ()=>(await getJoined(userStore.id as number)).data
const [request, response,loading] = useXhr(adapter,[],true)
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
  <MyActivityItem
  v-for="item in response"
  :info="item"/>
</template>

<style scoped>

</style>
