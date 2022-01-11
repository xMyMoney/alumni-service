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
  <MyDonationLogItem/>
  <MyDonationLogItem/>
  <MyDonationLogItem/>

</div>
</template>

<script setup lang="ts">

import {NavBar,Search} from "vant";
import {provide, ref} from 'vue';
import MyDonationLogItem from "@components/MyDonation/MyDonationLogItem.vue";
const value = ref('');
const comeback = () => {
  history.back()
}


</script>

<style scoped>

</style>
