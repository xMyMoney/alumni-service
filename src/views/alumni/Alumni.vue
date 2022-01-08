<script setup lang="ts">
import {NavBar,Search,Tab, Tabs,DropdownMenu, DropdownItem} from "vant";
const comeback = () => {
  history.back()
}
import {provide, ref} from 'vue';
import {useRouter} from "vue-router";
import MyAlumniItem from "@components/MyAlumni/MyAlumniItem.vue";
const router = useRouter();
const value = ref('');
const active = ref(0);
const value1 = ref(0);
const value2 = ref('a');
const option1 = [
  { text: '全部校友', value: 0 },
  { text: '同级校友', value: 1 },
  { text: '同行校友', value: 2 },
  {text: '同城校友', value: 3},
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '星级排序', value: 'b' },
  { text: '入学排序', value: 'c' },
];
</script>
<template>
  <NavBar
      class="nav"
      title="寻找校友"
      left-text="返回"
      left-arrow
      @click-left="comeback"
  />
  <Search class="search"
          show-action
          v-model="value"
          shape="round"
          placeholder="请输入搜索关键词">
<!--    <template #action>-->
<!--      <div @click="router.push('createHelp')">发布</div>-->
<!--    </template>-->
  </Search>
  <DropdownMenu>
    <DropdownItem v-model="value1" :options="option1" />
    <DropdownItem v-model="value2" :options="option2" />
  </DropdownMenu>
  <MyAlumniItem/>
  <MyAlumniItem/>
  <MyAlumniItem/>
  <MyAlumniItem/>
  <MyAlumniItem/>


<!--  <Tabs v-model:active="active" animated swipeable duration="0.3">-->
<!--    <Tab title="所有校友">-->
<!--      <MyAlumniItem/>-->
<!--      <MyAlumniItem/>-->
<!--      <MyAlumniItem/>-->
<!--    </Tab>-->
<!--    <Tab title="最热互助">-->
<!--      <MyAlumniItem/>-->
<!--      <MyAlumniItem/>-->
<!--      <MyAlumniItem/>-->
<!--      <MyAlumniItem/>-->
<!--      <MyAlumniItem/>-->
<!--      <MyAlumniItem/>-->
<!--    </Tab>-->
<!--    <tab title="资源合作">-->
<!--      <MyAlumniItem/>-->
<!--      <MyAlumniItem/>-->
<!--    </tab>-->
<!--    <tab title="创业合作">-->
<!--      <MyAlumniItem/>-->
<!--      <MyAlumniItem/>-->
<!--    </tab>-->
<!--    <tab title="求职招聘">-->
<!--      <MyAlumniItem/>-->
<!--      <MyAlumniItem/>-->
<!--    </tab>-->
<!--  </Tabs>-->

</template>

<style scoped>

</style>
