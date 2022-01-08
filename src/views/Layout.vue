<script setup lang="ts">
import MyTabbarVue from "@components/MyTabbar/MyTabbar.vue";
import {Sticky} from "vant";
</script>

<template>


  <div class="container">
    <router-view />
  </div>
  <div>
    <Sticky position="bottom">
      <MyTabbarVue />
    </Sticky>
  </div>


</template>
<style scoped lang="less">
.nav {
  border: 1px solid red;
}
.container {
  // 统一把内容区撑起来,这个72px对标你的nav高度
  margin-bottom: 72px;
  overflow: hidden;
}
</style>
