<script setup lang="ts">
import { Search} from 'vant';
import {provide, ref} from "vue";
import {useRouter} from "vue-router";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {useXhr} from "@hooks/useXhr";
import MyBaseApplyInfoItem from "@components/MyInfo/MyBaseApplyInfoItem.vue";
import {applyRecordList} from "@api/alumni-apply";
const value = ref('');
provide("myActivity",1)
provide('navTitle','我的消息')
const router = useRouter();
const adapter = async ()=>(await applyRecordList()).data
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
  <MyBaseApplyInfoItem
  v-for="item in response.list"
  :applyInfo="item"/>
</template>

<style scoped>

</style>
