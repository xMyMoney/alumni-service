<template>
  <MyNavBar/>
{{response}}
</template>

<script setup lang="ts">
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {provide} from "vue";
import {getStaticPage} from "@api/static-page";
import {useXhr} from "@hooks/useXhr";
provide('navTitle','关于母校')
const adapter = async ()=>(await getStaticPage(2)).data
const [request, response,loading] = useXhr(adapter,{},true)
</script>

<style scoped>

</style>
