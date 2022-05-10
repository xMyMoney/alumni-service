<script setup lang="ts">
import {Image,Circle,Tab,Tabs,ActionBar, ActionBarIcon, ActionBarButton} from "vant";
import {computed, provide, ref} from "vue";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {useRoute} from "vue-router";
import {getOne, Notice} from "@api/notice";
import {formatActiveTime} from "@utils/time";
provide('navTitle','详情')
const route = useRoute()
const id = route.params.id as unknown as number
const info = ref<Notice>({})
const fetchNotice = async ()=> {
  const {data} = await getOne(id)
  info.value = data
}
fetchNotice()
</script>
<template>
  <MyNavBar/>
  <div class="main">
    <div class="top">
      <h3>{{info.title}}</h3>
      <span class="time">{{formatActiveTime(info.createTime)}}</span>
      <span class="origin">来源: 桂林航天工业学院</span>
    </div>
    <div>{{info.content}}</div>
    <div class="bottom">
      <div></div>
    </div>
  </div>

</template>

<style scoped lang="less">
.main {
  margin: 0.5rem;
  .top {
    //border: 1px solid red;
    h3 {
      margin: 0.3rem 0;
    }
    span {
      color: gray;
    }
    .origin {
      margin-left: 1rem;
    }
  }
}
</style>
