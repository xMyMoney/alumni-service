<template>
  <MyNavBar/>

</template>

<script setup lang="ts">
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {provide} from "vue";
provide('navTitle','关于母校')
</script>

<style scoped>

</style>
