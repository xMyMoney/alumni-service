<script setup lang="ts">
import { Grid, GridItem, Image, Swipe, SwipeItem } from "vant";
import {useRouter} from "vue-router";
const images = [
  "https://pig-blog.oss-cn-guangzhou.aliyuncs.com/blog-file/img/1638857103861.jpg",
  "https://pig-blog.oss-cn-guangzhou.aliyuncs.com/blog-file/img/1638857103861.jpg",
];
const router = useRouter();
</script>
<template>
  <div class="main">
    <Swipe
        class="swipe"
        autoplay="5000"
        duration="1500"
        indicator-color="white"
    >
      <SwipeItem v-for="image in images" :key="image">
        <img :src="image" style="height: 12rem; width: 100%" />
      </SwipeItem>
    </Swipe>
    <div class="title">
      <Image
          round
          width="2rem"
          height="2rem"
          src="/guat.jpg"
      />
      <span class="txt">桂航校友之家</span>
    </div>
    <div class="service">
      <Grid :border="false" :gutter="20" column-num="4" icon-size="25px" class="grid">
        <GridItem icon="photo-o" text="找校友" @click="router.push('/alumni')"/>
        <GridItem icon="photo-o" text="找活动" @click="router.push('/activity')"/>
        <GridItem icon="photo-o" text="找互助" @click="router.push('/help')"/>
        <GridItem icon="photo-o" text="回馈母校" />
      </Grid>
    </div>
  </div>
</template>

<style scoped lang="less">
.main {
  position: relative;
  .swipe {
  }
  .title {
    position: absolute;
    // 位置自己调
    left: 8px;
    top: 8px;
    // 有层叠样式问题再改这个
    z-index: 2;

    display: flex;
    align-items: center;
    .txt {
      // 左内边距自己调
      padding-left: 8px;
    }
  }
}
</style>
