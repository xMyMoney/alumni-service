<script setup lang="ts">
import { Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
import guat from "../../assets/guat.jpg";
import active from "../../store/layout"
// const active = ref(2);
</script>

<template>
  <Tabbar class="tab-bar" v-model="active">
    <TabbarItem icon="friends-o" to="/help">互助</TabbarItem>
    <TabbarItem icon="flag-o" to="/activity">活动</TabbarItem>
    <TabbarItem to="/home">
      <div class="main">
        <img class="main-icon" :src="guat" />
        <div class="txt">主页大厅</div>
      </div>
    </TabbarItem>
    <TabbarItem icon="smile-o" to="/services">服务</TabbarItem>
    <TabbarItem icon="user-o" to="/me">我的</TabbarItem>
  </Tabbar>
</template>
<style scoped lang="less">
.tab-bar {
  border-top: 1px solid #ccc;
  padding: 0.5rem 0;

  .main {
    position: relative;
    .main-icon {
      // 样式
      height: 4.5rem;
      border-radius: 50%;
      padding: 5px;
      box-shadow: 0 -1px 10px rgba(#888888, 0.3);

      // 定位
      position: absolute;
      left: 50%;

      transform: translateX(-50%) translateY(-90%);

      // 层级样式，到时候有堆叠问题自己改改
      z-index: 2;
    }
    .txt {
      // 定位
      transform: translateY(13px);
    }
  }
}
</style>
