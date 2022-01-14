<script setup lang="ts">
import {Image,Grid, GridItem,Icon,ActionBar, ActionBarButton} from "vant";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {provide} from "vue";
provide('navTitle','详情')
</script>
<template>
  <div class="main">
    <MyNavBar/>
    <Image
        radius="0.5rem"
        fit="contain"
        src="https://pig-blog.oss-cn-guangzhou.aliyuncs.com/blog-file/img/1638857103861.jpg"
    />
    <div class="info">
      <h3>一起回母校！！！</h3>
      <div class="comInfo">
        <Grid :column-num="3" :border="false">
          <GridItem>
            <span><Icon name="chat-o" />范围</span>
            <div>全体校友</div>
          </GridItem>
          <GridItem>
            <span><Icon name="chat-o" />名额</span>
            <div>11/12</div>
          </GridItem>
          <GridItem>
            <span><Icon name="chat-o" />费用</span>
            <div>免费</div>
          </GridItem>
        </Grid>
      </div>
      <div class="impInfo">
        <div>时间:2022-2021</div>
        <div>地点:广西贺州</div>
      </div>
      <div class="detail">
        <h3>活动内容</h3>
        <div>富文本显示</div>
      </div>
    </div>
    <ActionBar>
      <!--      <ActionBarIcon icon="chat-o" text="主页" @click="onClickIcon" />-->
      <!--      <ActionBarButton disabled type="primary" text="物品捐赠" @click="" />-->
      <ActionBarButton type="success" text="立即报名" @click="" />
    </ActionBar>

  </div>


</template>

<style scoped lang="less">
.main {
  .info {
    margin: 1rem;
    .comInfo {
      //display:flex;
      //flex-direction:row;
      div {
        //border: 1px solid red;
        //margin: 0 1rem;
      }
    }
  }
}
</style>
