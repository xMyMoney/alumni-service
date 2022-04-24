<script setup lang="ts">
import {Search,Tab, Tabs,NavBar} from "vant";
import {onMounted, provide, ref} from 'vue';
import MyActivityItem from "@components/MyActivity/MyActivityItem.vue";
import {useRouter} from "vue-router";
import {Activity, getList} from "@api/activity";
const router = useRouter();
const searchKey = ref('');
const active = ref(0);
provide("myActivity",0)
const createActive = () => {
  router.push('createActivity')
}
const allList = ref<Activity[]>()
const hotList = ref<Activity[]>()
const latestList = ref<Activity[]>()
const fetchAll = async (searchKey:string)=> {
  const {data} = await getList(searchKey,0)
  allList.value = data;
}
const fetchHot = async (searchKey:string)=> {
  const {data} = await getList(searchKey,1)
  hotList.value = data;
}
const fetchLatest = async (searchKey:string)=> {
  const {data} = await getList(searchKey,2)
  latestList.value = data;
}
onMounted(async ()=> {
  await fetchAll('')
  await fetchHot('')
  await fetchLatest('')
})
const fetchSearch = async ()=> {
  await fetchAll(searchKey.value)
  await fetchHot(searchKey.value)
  await fetchLatest(searchKey.value)
}
</script>
<template>
  <NavBar
      class="nav"
      title="校友活动"
  />
  <Search class="search"
          show-action
          v-model="searchKey"
          shape="round"
          placeholder="请输入搜索关键词">
    <template #action>
      <div @click="fetchSearch">搜索</div>
    </template>
  </Search>
  <Tabs v-model:active="active" animated swipeable duration="0.3">
    <Tab title="所有活动">
      <MyActivityItem
      v-for="item in allList"
      :info="item"/>
    </Tab>
    <Tab title="最热活动">
      <MyActivityItem
          v-for="item in hotList"
          :info="item"/>
    </Tab>
    <Tab title="最近活动">
      <MyActivityItem
          v-for="item in latestList"
          :info="item"/>
    </Tab>
  </Tabs>

</template>

<style scoped lang="less">

</style>
