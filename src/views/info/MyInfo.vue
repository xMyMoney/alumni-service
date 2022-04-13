<script setup lang="ts">
import { Search} from 'vant';
import {provide, ref} from "vue";
import {useRouter} from "vue-router";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import MyApplyInfoItem from "@components/MyInfo/MyApplyInfoItem.vue";
import {applyInfoList} from "@api/alumni-apply";
import {useXhr} from "@hooks/useXhr";
const value = ref('');
provide("myActivity",1)
provide('navTitle','我的消息')
const router = useRouter();
const adapter = async ()=>(await applyInfoList(1)).data
const [request, response,loading] = useXhr(adapter,[],true);

</script>
<template>
  <MyNavBar/>
  <Search class="search"
          show-action
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词">
  </Search>
  <MyApplyInfoItem
      v-for="item in response"
      :key="item.id"
      :applyInfo="item"/>


</template>

<style scoped>

</style>
