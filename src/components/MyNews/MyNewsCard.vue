<script setup lang="ts">
import {Icon} from "vant";

import {useRouter} from "vue-router";
import MyNewsItem from "@components/MyNews/MyNewsItem.vue";
const router = useRouter()
const toAllNews = () => {
  router.push('/news')
}

</script>
<template>
  <div class="main">
    <span class="left">母校新闻</span>
    <span class="right" @click="toAllNews">
    11
    <Icon
        name="arrow"
    />
  </span>
    <MyNewsItem/>
    <MyNewsItem/>
    <MyNewsItem/>
    <MyNewsItem/>

  </div>
</template>

<style scoped lang="less">
.main {
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 90%;
  margin: 0 auto;
  margin-top: 1rem;
  padding-top: 0.5rem;
  .left{
    margin-left: 0.5rem;
    color: #1989fa;
  }
  .right{
    float: right;
    margin-right: 0.3rem;
    color: gray;
  }
}
</style>
