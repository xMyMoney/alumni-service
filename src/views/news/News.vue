<script setup lang="ts">
import { NavBar, Search } from 'vant';
const comeback = () => {
  history.back()
}
import { ref } from 'vue';
import MyNewsItemPlus from "@components/MyNews/MyNewsItemPlus.vue";
import {getList} from "@api/news";
import {useXhr} from "@hooks/useXhr";

const value = ref('');
const adapter = async ()=>(await getList()).data
const [request, response,loading] = useXhr(adapter,[],true)
</script>

<template>
  <div>
    <NavBar
        class="nav"
        title="母校新闻"
        left-text="返回"
        left-arrow
        @click-left="comeback"
    />
    <Search class="search" v-model="value" shape="round" placeholder="请输入搜索关键词"/>
    <MyNewsItemPlus
        v-for="item in response"
        :info="item"/>
  </div>
</template>
<style scoped lang="less">
.nav {

}
</style>
