<template>
  <MyNavBar/>
  <Search class="search"
          show-action
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词">
  </Search>
  <div>
    <MyApplyInfoItem
        class="item"
        v-for="item in response"
        :key="item.id"
        :applyInfo="item"/>
  </div>
</template>

<script setup lang="ts">
import { Search} from 'vant';
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import MyApplyInfoItem from "@components/MyInfo/MyApplyInfoItem.vue";
import {provide, ref} from "vue";
import {applyInfoList} from "@api/alumni-apply";
import {useXhr} from "@hooks/useXhr";
provide('navTitle','名片申请')
const value = ref<string>()
const adapter = async ()=>(await applyInfoList(1)).data
const [request, response,loading] = useXhr(adapter,[],true);
</script>

<style scoped>
.item {
  margin-top: 1rem;
}
</style>
