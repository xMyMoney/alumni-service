<script setup lang="ts">
import { NavBar, Search } from 'vant';
const comeback = () => {
  history.back()
}
import { ref } from 'vue';
import MyNewsItemPlus from "@components/MyNews/MyNewsItemPlus.vue";

const value = ref('');
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
    <MyNewsItemPlus/>
    <MyNewsItemPlus/>
    <MyNewsItemPlus/>
  </div>
</template>
<style scoped lang="less">
.nav {

}
</style>
