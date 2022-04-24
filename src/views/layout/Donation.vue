<template>
  <NavBar
      class="nav"
      title="校友捐赠"
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
    <Tab title="所有捐赠">
      <MyDonationItem
          v-for="item in allList"
          :key="item.id"
          :info="item"/>
    </Tab>
    <Tab title="最热捐赠">
      <MyDonationItem
          v-for="item in hotList"
          :key="item.id"
          :info="item"/>
    </Tab>
    <Tab title="最新捐赠">
      <MyDonationItem
          v-for="item in latestList"
          :key="item.id"
          :info="item"/>
    </Tab>
  </Tabs>

</template>

<script setup lang="ts">
import {NavBar,Search,Tabs,Tab} from "vant";
import MyDonationItem from "@components/MyDonation/MyDonationItem.vue";
import {getDonationList,Donation} from "@api/donation";
import {useXhr} from "@hooks/useXhr";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
const router = useRouter();
const searchKey = ref('');
const active = ref(0);
const comeback = () => {
  history.back()
}

const allList = ref<Donation[]>()
const hotList = ref<Donation[]>()
const latestList = ref<Donation[]>()
const fetchAll = async (searchKey:string)=> {
  const {data} = await getDonationList(searchKey,0)
  allList.value = data;
}
const fetchHot = async (searchKey:string)=> {
  const {data} = await getDonationList(searchKey,1)
  hotList.value = data;
}
const fetchLatest = async (searchKey:string)=> {
  const {data} = await getDonationList(searchKey,2)
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

<style scoped>

</style>
