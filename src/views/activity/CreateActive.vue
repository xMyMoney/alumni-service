<script setup lang="ts">
import { NavBar } from 'vant';
const comeback = () => {
  history.back()
}
</script>
<template>
  <NavBar
      class="nav"
      title="发起活动"
      left-text="返回"
      left-arrow
      @click-left="comeback"
  />
<div>sada</div>
</template>

<style scoped>

</style>
