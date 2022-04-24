<template>
<div>
  <NavBar
      class="nav"
      title="捐赠记录"
      left-text="返回"
      left-arrow
      @click-left="comeback"
  />
  <Search class="search"
          show-action
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词">
  </Search>
  <MyDonationLogItem
  v-for="item in response"
  :info="item"/>

</div>
</template>

<script setup lang="ts">

import {NavBar,Search} from "vant";
import {provide, ref} from 'vue';
import MyDonationLogItem from "@components/MyDonation/MyDonationLogItem.vue";
import {getDonated} from "@api/donation";
import {useXhr} from "@hooks/useXhr";
const value = ref('');
const comeback = () => {
  history.back()
}
import {useStore} from "../../store/user-info";
const userStore = useStore()
const adapter = async ()=>(await getDonated(userStore.id as number)).data
const [request, response,loading] = useXhr(adapter,[],true)
</script>

<style scoped>

</style>
