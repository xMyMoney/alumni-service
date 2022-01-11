<script setup lang="ts">
import {Badge,Icon,Image,Button,Toast} from "vant";
import { inject, ref } from "vue";

</script>
<template>
    <div class="main">
      <div class="left">
        <Badge>
          <Image
              class="avatar"
              round
              width="5rem"
              height="5rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <template #content>
            <Icon name="cross" class="badge-icon"/>
          </template>
        </Badge>

      </div>

      <div class="right">
        <span class="name">朱伟熹</span>
        <span class="info">软件工程 广西贺州</span>
        <div class="info">
          <span class="">2018-2022 本科</span>
          <br/>
          <span class="">桂航有限公司 董事长</span>
          <br/>

        </div>
        <div class="active">
          <span>10小时前 活跃</span>
          <Button class="btn" type="success" round size="small" @click="Toast.success('已发送交换请求')">交换名片</Button>
        </div>

      </div>


    </div>


</template>


<style scoped lang="less">
.main {
  //border: 1px solid red;
  margin: 0 auto;
  width: 80%;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 12px #ebedf0;
  display:flex;
  flex-direction:row;
  .left {
    width: 20%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;//得了把11
    .avatar{

    }
  }

  .right {
    //border: 1px solid yellow;
    width: 80%;
    margin-left: 1rem;

    .name {
      font-size: medium;
      margin-right: 0.5rem;
    }
    .info,.active{
      font-size: x-small;
      color: gray;
    }
    .info {
      margin-top: 0.2rem;
    }
    .active {
      margin-top: 0.3rem;
      //border: 1px solid red;
      .btn {

        float: right;
        margin-right: 1rem;

      }
    }
  }
}
:deep(.van-badge) {
  // 自己微调
  transform: translate(-0.1px);
}
</style>
