<script setup lang="ts">
import { NoticeBar } from 'vant';
const router = useRouter();
import {getFocus} from "@api/notice";
import {useXhr} from "@hooks/useXhr";
import {useRouter} from "vue-router";
const adapter = async ()=>(await getFocus()).data
const [request, response,loading] = useXhr(adapter,{},true)
</script>
<template>
  <NoticeBar class="hot" mode="link" left-icon="volume-o" @click="router.push('/noticeDetail/'+response.id)">
    {{response.title}}
  </NoticeBar>
</template>


<style scoped lang="less">
.hot {
  //background:#ecf9ff;
  //color: #1989fa;
  margin: 0 auto;
  width: 80%;
  border-radius: 5px;
}
</style>
