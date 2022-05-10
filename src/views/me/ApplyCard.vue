<template>
  <MyNavBar/>
  <Search class="search"
          show-action
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词">
  </Search>
  <div>
    <MyFriendApplyInfoItem
        class="item"
        v-for="item in response"
        :key="item.id"
        :applyInfo="item"/>
  </div>
</template>

<script setup lang="ts">
import { Search} from 'vant';
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import MyFriendApplyInfoItem from "@components/MyInfo/MyFriendApplyInfoItem.vue";
import {provide, ref} from "vue";
import {applyInfoList} from "@api/friend-apply";
import {useXhr} from "@hooks/useXhr";
import {getUserId} from "@utils/auth";
provide('navTitle','名片申请')
const value = ref<string>()
const adapter = async ()=>(await applyInfoList(getUserId() as unknown as number)).data
const [request, response,loading] = useXhr(adapter,[],true);
</script>

<style scoped>
.item {
  margin-top: 1rem;
}
</style>
