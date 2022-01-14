<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="noticeItem" @click="router.push('/noticeDetail')">
    <span class="title">标题标题标题标题标题</span>
    <div><span class="time">2022年01月01日</span></div>
  </div>
</template>

<style scoped lang="less">
.noticeItem {
  border-bottom: 0.1px solid #dcdcdc;
  margin: 1rem;
  .title {

  }
  .time {
    font-size: small;
    color: gray;
  }

}
</style>
