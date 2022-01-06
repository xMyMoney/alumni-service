<script setup lang="ts">
import {NavBar,Image,Swipe, SwipeItem } from 'vant';
const images = [
  'https://pig-blog.oss-cn-guangzhou.aliyuncs.com/blog-file/img/1638857103861.jpg',
  'https://pig-blog.oss-cn-guangzhou.aliyuncs.com/blog-file/img/1638857103861.jpg'
]
</script>
<template>
  <div class="main">
<!--    <NavBar class="title" title="标题"/>-->
    <div class="title">
      <Image
          round
          width="2rem"
          height="2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <span>标题置于图片上 桂航校友之家 不管先</span>
    </div>
    <Swipe class="swipe" autoplay="5000" duration="1500" indicator-color="white">
      <SwipeItem v-for="image in images" :key="image">
        <img :src="image" style="height: 12rem;width: 100%"/>
      </SwipeItem>
    </Swipe>
  </div>
</template>


<style scoped lang="less">
.main {

  .title {

  }
  .swipe {

  }
}
</style>
