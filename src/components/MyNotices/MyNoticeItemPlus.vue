<script setup lang="ts">
import {useRouter} from "vue-router";
import {Notice} from "@api/notice";
import {formatActiveTime} from "@utils/time";
const router = useRouter();
defineProps<{info:Notice}>()
</script>
<template>
  <div class="noticeItem" @click="router.push('/noticeDetail/'+info.id)">
    <span class="title">{{info.title}}</span>
    <div>
      <span class="time">{{formatActiveTime(info.createTime)}}</span>
      <span class="read">{{info.count}}人阅读</span>
    </div>
  </div>
</template>

<style scoped lang="less">
.noticeItem {
  //border-bottom: 0.1px solid #dcdcdc;
  //border: 1px solid #dcdcdc;
  //border-radius: 10px;
  //margin: 1rem;
  //padding-top: 0.5rem;
  //padding-bottom: 0.5rem;

  margin: 0 auto;
  margin-bottom: 12px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 12px #ebedf0;
  width: 80%;

  .title {
    margin-left: 1rem;
  }
  .time {
    font-size: small;
    color: gray;
    margin-left: 1rem;
  }
  .read {
    font-size: small;
    color: gray;
    margin-left: 1rem;
  }

}
</style>
