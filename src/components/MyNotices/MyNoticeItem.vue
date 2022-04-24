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
    <div><span class="time">{{formatActiveTime(info.createTime)}}</span></div>
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
