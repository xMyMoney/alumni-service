<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter()

import {Icon} from "vant";
import MyNoticeItem from "@components/MyNotices/MyNoticeItem.vue";

const toAllNotice = () => {
  router.push('/notice')
  // router.push('/me')
}
</script>
<template>
<div class="main">
    <span class="left">通知公告</span>
    <span class="right" @click="toAllNotice">
    11
    <Icon
        name="arrow"
    />
  </span>
  <MyNoticeItem/>
  <MyNoticeItem/>
  <MyNoticeItem/>

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
