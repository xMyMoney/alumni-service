<script setup lang="ts">
import { Grid, GridItem } from 'vant';
</script>
<template>
  <div class="main">
    <div class="base">
      <span>基本功能</span>
      <Grid :border="false" :gutter="15" column-num="3" icon-size="30px">
        <GridItem icon="photo-o" text="返校预约" />
        <GridItem icon="photo-o" text="毕业证明" />
        <GridItem icon="photo-o" text="学位证明" />
        <GridItem icon="photo-o" text="校友卡申领"/>
        <GridItem icon="refund-o" text="回馈母校" />
      </Grid>
    </div>
    <div class="more">
      <span>更多功能</span>
      <Grid :border="false" :gutter="15" column-num="3" icon-size="30px">
        <GridItem icon="photo-o" text="返校预约" />
        <GridItem icon="photo-o" text="毕业证明" />
        <GridItem icon="photo-o" text="学位证明" />
        <GridItem icon="photo-o" text="校友卡申领"/>
        <GridItem icon="refund-o" text="回馈母校" />
      </Grid>
    </div>
  </div>

</template>
<style scoped lang="less">
.main {
  margin-top: 3rem;
  .base,.more{
    //box-shadow: 1px 1px 5px #888888;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 90%;
    margin: 0 auto;
    margin-top: 1rem;
    padding-top: 0.5rem;
    span {
      margin-left: 0.5rem;
      color: #1989fa;
    }
  }
}
</style>
