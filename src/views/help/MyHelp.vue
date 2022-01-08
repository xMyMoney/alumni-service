<script setup lang="ts">
import {NavBar,Search} from "vant";
import {provide, ref} from 'vue';
import {useRouter} from "vue-router";
import MyHelpItem from "@components/MyHelp/MyHelpItem.vue";
const router = useRouter();
const value = ref('');
const active = ref(0);
const comeback = () => {
  history.back()
}
provide('myHelp',1)
</script>
<template>
  <NavBar
      class="nav"
      title="我的互助"
      left-text="返回"
      left-arrow
      @click-left="comeback"
  />
  <Search class="search"
          show-action
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词">
    <template #action>
      <div @click="router.push('/createHelp')">发布</div>
    </template>
  </Search>
  <MyHelpItem/>
  <MyHelpItem/>
  <MyHelpItem/>

</template>

<style scoped>

</style>
