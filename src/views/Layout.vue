<script setup lang="ts">
import MyTabbarVue from "@components/MyTabbar/MyTabbar.vue";
</script>

<template>
  <div class="container">
    <router-view />
  </div>
  <MyTabbarVue />
</template>
<style scoped lang="less">
.container {
  // 统一把内容区撑起来,这个72px对标你的nav高度
  margin-bottom: 72px;
  overflow: hidden;
}
</style>
