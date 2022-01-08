<script setup lang="ts">
import {Image,Tag,SwipeCell,Button} from "vant";
import { inject, ref } from "vue";
</script>
<template>
    <div class="main">
      <h3 class="title">创业公司求赞助</h3>
      <div class="info">
        <Image
            round
            width="1rem"
            height="1rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span>朱学长</span>
        <span>软件工程2018届</span>
      </div>
      <p class="content">
        校友聚会速来校友聚会速来校友聚会速来校友聚会速来
        校友聚会速来校友聚会速来校友聚会速来校友聚会速来
      </p>
      <div class="category">
        <Tag type="success">校友集资</Tag>
      </div>
    </div>


</template>


<style scoped lang="less">
.main {
  //border: 1px solid red;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  //border-radius: 20px;
  box-shadow: 0 8px 12px #ebedf0;
  //width: 80%;
  .title {
    //border: 1px solid red;
    //margin-top: 0.2rem;
    margin-bottom: 0.1rem;
  }
  .info {
    //border: 1px solid red;
    span {
      font-size: x-small;
    }

  }
  .content {
    //border: 1px solid red;
    margin-top: 0.4rem;
    margin-bottom: 0.1rem;
  }
  .category {

  }
}
.delete-bottom {
  height: 100%;
}
</style>
