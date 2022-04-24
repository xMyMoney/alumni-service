<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter()

import {Icon} from "vant";
import MyNoticeItem from "@components/MyNotices/MyNoticeItem.vue";
import {getList} from "@api/notice";
import {useXhr} from "@hooks/useXhr";

const toAllNotice = () => {
  router.push('/notice')
  // router.push('/me')
}
const adapter = async ()=>(await getList()).data
const [request, response,loading] = useXhr(adapter,[],true)
</script>
<template>
<div class="main">
    <span class="left">通知公告</span>
    <span class="right" @click="toAllNotice">
    {{response.length}}
    <Icon
        name="arrow"
    />
  </span>
  <MyNoticeItem
  v-for="item in response.slice(0,3)"
  :info="item"/>
</div>
</template>

<style scoped lang="less">
.main {
  //border: 1px solid #ccc;

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
