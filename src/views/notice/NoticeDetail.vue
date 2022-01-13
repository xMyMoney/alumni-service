<script setup lang="ts">
import {Image,Circle,Tab,Tabs,ActionBar, ActionBarIcon, ActionBarButton} from "vant";
import {computed, provide, ref} from "vue";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
provide('navTitle','详情')

</script>
<template>
  <MyNavBar/>
  <div class="main">
    <div class="top">
      <h3>校友倡议书</h3>
      <span class="time">2022-01-01</span>
      <span class="origin">来源: 桂林航天工业学院</span>
    </div>
    <div>富文本显示内容</div>
    <div class="bottom">
      <div></div>
    </div>
  </div>

</template>

<style scoped lang="less">
.main {
  margin: 0.5rem;
  .top {
    border: 1px solid red;
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
