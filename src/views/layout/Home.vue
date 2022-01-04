<!--<script setup lang="ts">-->
<!--// import { fetchBlog } from "@api/home";-->
<!--// import { useXhr } from "@hooks/useXhr";-->
<!--// import { watch } from "vue";-->
<!--//-->
<!--// const adapter = async () => (await fetchBlog()).data.data;-->
<!--//-->
<!--// const [request, response] = useXhr(adapter, [], true);-->
<!--//-->
<!--// // 异步返回数据用响应式保存-->
<!--// // 直接在这里面 console.log(response) 看不到-->
<!--// watch(response, (v) => {-->
<!--//   console.log(v);-->
<!--// });-->
<!--</script>-->

<script setup lang="ts">
import { Grid, GridItem, Image,Swipe, SwipeItem } from 'vant';
import MyHotInfo from "@components/MyNews/MyHotInfo.vue";
import MyNoticeCard from "@components/MyNotices/MyNoticeCard.vue";
import MyNewsCard from "@components/MyNews/MyNewsCard.vue";

const images = [
  'https://pig-blog.oss-cn-guangzhou.aliyuncs.com/blog-file/img/1638857103861.jpg',
  'https://pig-blog.oss-cn-guangzhou.aliyuncs.com/blog-file/img/1638857103861.jpg'
]
</script>
<template>
  <div>
    <Swipe autoplay="5000" duration="1500" indicator-color="white">
      <SwipeItem v-for="image in images" :key="image">
        <img :src="image" style="height: 12rem;width: 100%"/>
      </SwipeItem>
    </Swipe>
  </div>
  <div class="service">
    <Grid :border="false" :gutter="20" column-num="4" icon-size="25px" class="grid">
      <GridItem icon="photo-o" text="找校友" />
      <GridItem icon="photo-o" text="找活动" />
      <GridItem icon="photo-o" text="找互助"/>
      <GridItem icon="photo-o" text="回馈母校" />
    </Grid>
  </div>
  <MyHotInfo/>
  <MyNoticeCard/>
 <MyNewsCard/>


</template>
<style scoped lang="less">
.my-swipe {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.service {

  .grid {

  }
}
</style>

