<script setup lang="ts">
import { Grid, GridItem } from 'vant';
</script>
<template>
  <div class="main">
    <div class="base">
      <h4>基本功能</h4>
      <Grid :border="false" :gutter="15" column-num="3" icon-size="30px">
        <GridItem icon="photo-o" text="返校预约" />
        <GridItem icon="photo-o" text="毕业证明" />
        <GridItem icon="photo-o" text="学位证明" />
        <GridItem icon="photo-o" text="校友卡申领"/>
        <GridItem icon="refund-o" text="回馈母校" />
      </Grid>
    </div>
    <div class="more">
      <h4>更多功能</h4>
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
  //margin-top: 3rem;
  background-color: #f7f8fa;
  .base,.more{
    //border: 1px solid #ccc;
    //border-radius: 10px;
    //width: 90%;
    //margin: 0 auto;
    //margin-top: 1rem;
    //padding-top: 0.5rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 8px 12px #ebedf0;
    width: 80%;
    h4 {
      //margin-left: 0.5rem;
      color: #1989fa;
    }
  }
}
</style>
