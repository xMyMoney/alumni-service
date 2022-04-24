<script setup lang="ts">
import {Image,Circle,Tab,Tabs,ActionBar, ActionBarIcon, ActionBarButton} from "vant";
import {computed, provide, ref} from "vue";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {useXhr} from "@hooks/useXhr";
import {getStaticPage} from "@api/static-page";
import {formatActiveTime} from "@utils/time";

provide('navTitle','致校友的一封信')
const adapter = async ()=>(await getStaticPage(0)).data
const [request, response,loading] = useXhr(adapter,{},true)
</script>
<template>
  <MyNavBar/>
  <div class="main">
    <div class="top">
      <h3>致校友的一封信</h3>
      <span class="time">{{formatActiveTime(response.createTime)}}</span>
      <span class="origin">来源: 桂林航天工业学院</span>
    </div>
    <div>{{response.content}}</div>
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
