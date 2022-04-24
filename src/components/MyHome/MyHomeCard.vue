<script setup lang="ts">
import { Grid, GridItem, Image, Swipe, SwipeItem } from "vant";
import {useRouter} from "vue-router";
import {getSlideshow} from "@api/static-page";
import {ref} from "vue";
const images = [
  "https://pig-blog.oss-cn-guangzhou.aliyuncs.com/blog-file/img/1638857103861.jpg",
  "https://pig-blog.oss-cn-guangzhou.aliyuncs.com/blog-file/img/1638857103861.jpg",
];
// const images = ref<string[]>()
// const router = useRouter();
// const fetchImg = async ()=>{
//   const {data} = await getSlideshow()
//   images.value = data
// }
// fetchImg()
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

        <GridItem icon="manager-o" text="毕业证明" @click="router.push('/graduationCertificate/')"/>
        <GridItem icon="todo-list-o" text="返校预约" @click="router.push('/backSchool')"/>
        <GridItem icon="balance-list-o" text="捐赠申请" @click="router.push('/donation/apply')"/>
        <GridItem icon="manager-o" text="学位证明" @click="router.push('/degreeCertificate/')"/>

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
