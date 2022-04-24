<script setup lang="ts">
import {Icon} from "vant";

import {useRouter} from "vue-router";
import MyNewsItem from "@components/MyNews/MyNewsItem.vue";
import {getList} from "@api/news";
import {useXhr} from "@hooks/useXhr";
const router = useRouter()
const toAllNews = () => {
  router.push('/news')
}
const adapter = async ()=>(await getList()).data
const [request, response,loading] = useXhr(adapter,[],true)
</script>
<template>
  <div class="main">
    <span class="left">母校新闻</span>
    <span class="right" @click="toAllNews">
    {{response.length}}
    <Icon
        name="arrow"
    />
  </span>
    <MyNewsItem
        v-for="item in response.slice(0,3)"
        :info="item"/>
  </div>
</template>

<style scoped lang="less">
.main {
  //border: 1px solid #ccc;
  //border-radius: 10px;
  //width: 90%;
  //margin: 0 auto;
  //margin-top: 1rem;
  //padding-top: 0.5rem;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 12px #ebedf0;
  width: 80%;
  .left{
    //margin-left: 0.5rem;
    color: #1989fa;
  }
  .right{
    float: right;
    //margin-right: 0.3rem;
    color: gray;
  }
}
</style>
