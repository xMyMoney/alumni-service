<!--<script setup lang="ts">-->
<!--// import { fetchBlog } from "@api/home";-->
<!--// import { useXhr } from "@hooks/useXhr";-->
<!--// import { watch } from "vue";-->
<!--//-->
<!--// const adapter = async () => (await fetchBlog()).data.data;-->
<!--//-->
<!--// const [requestor, response] = useXhr(adapter, [], true);-->
<!--//-->
<!--// // 异步返回数据用响应式保存-->
<!--// // 直接在这里面 console.log(response) 看不到-->
<!--// watch(response, (v) => {-->
<!--//   console.log(v);-->
<!--// });-->
<!--</script>-->

<script setup lang="ts">
import MyHotInfo from "@components/MyNews/MyHotInfo.vue";
import MyNoticeCard from "@components/MyNotices/MyNoticeCard.vue";
import MyNewsCard from "@components/MyNews/MyNewsCard.vue";
import MyHomeCard from "@components/MyHome/MyHomeCard.vue";
</script>
<template>
  <MyHomeCard/>
  <MyHotInfo/>
  <MyNoticeCard/>
  <MyNewsCard/>
</template>
<style scoped lang="less">

</style>

