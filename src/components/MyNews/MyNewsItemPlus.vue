<script setup lang="ts">
import {useRouter} from "vue-router";
import {News} from "@api/news";
import {formatActiveTime} from "@utils/time";
const router = useRouter();
defineProps<{info:News}>()
</script>
<template>
  <div class="newsItem" @click="router.push('/newsDetail/'+info.id)">
    <span class="title">{{info.title}}</span>
    <div>
      <span class="time">{{formatActiveTime(info.createTime)}}</span>
      <span class="read">{{info.count}}人阅读</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.newsItem {
  border-bottom: 0.1px solid #dcdcdc;
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 12px #ebedf0;
  width: 80%;
  .title {

  }
  .time {
    font-size: small;
    color: gray;
  }

}
</style>
