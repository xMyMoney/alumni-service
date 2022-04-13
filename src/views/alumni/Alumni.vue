<script setup lang="ts">
import {NavBar,Search,Tab, Tabs,DropdownMenu, DropdownItem} from "vant";
const comeback = () => {
  history.back()
}
import {provide, ref, watch} from 'vue';
import {useRouter} from "vue-router";
import MyAlumniItem from "@components/MyAlumni/MyAlumniItem.vue";
import {Alumni, AlumniList, AlumniParam, getAlumniCardList} from "@api/alumni";
import {useXhr} from "@hooks/useXhr";
const router = useRouter();
const active = ref(0);
const option1 = [
  { text: '全部校友', value: 0 },
  { text: '同级校友', value: 1 },
  { text: '同院校友', value: 2 },
  {text: '同专业校友', value: 3},
];
const option2 = [
  { text: '默认排序', value: 0 },
  { text: '星级排序', value: 1 },
  { text: '入学排序', value: 2 },
];
const alumniParam = ref<AlumniParam>({alumniId:1,searchKey:'',searchType:0,sortType:0});
alumniParam.value.alumniId = 1
alumniParam.value.current = 1;
alumniParam.value.pageSize = 10;


const adapter = async ()=> (await getAlumniCardList(alumniParam.value)).data;
const [request, response,loading] = useXhr(adapter,{} as AlumniList,true);
watch(alumniParam.value,request);
// const finished = ref(false);
// const list :Alumni[] = []
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  // list.value.push(response.value.list)
  // console.log(list)
  // console.log('9878787')
  // 加载状态结束
  // loading.value = false;

  // 数据全部加载完成
  // if (list.value.length >= 1000) {
  //   finished.value = true;
  // }
}
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
          v-model="alumniParam.searchKey"
          shape="round"
          placeholder="请输入搜索关键词">
<!--    <template #action>-->
<!--      <div @click="router.push('createHelp')">发布</div>-->
<!--    </template>-->
  </Search>
  <DropdownMenu>
    <DropdownItem v-model="alumniParam.searchType" :options="option1" />
    <DropdownItem v-model="alumniParam.sortType" :options="option2" />
  </DropdownMenu>
  <VanList
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
  >
    <MyAlumniItem
        v-for="item in response.list"
        :key="item.id"
        :alumni="item"
        :all="1"
    />
  </VanList>


</template>

<style scoped>

</style>
