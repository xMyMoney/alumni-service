<script setup lang="ts">
import {Badge,Icon,Image,Button,Toast} from "vant";
import {useRouter} from "vue-router";
const router = useRouter()

</script>
<template>
  <div class="main" @click="router.push('/donation/detail')">
    <div class="left">

        <Image
            class="avatar"
            fit="contain"
            round
            radius="10px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
        />

    </div>

    <div class="right">
      <span class="name">天八翻新</span>

      <div class="info">
        <span class="">
          2018年投入使用，已经过去四年需要翻新捞钱
          懂了吗
        </span>
      </div>
      <div class="count">
        <span style="color: #ed6a0c">1000</span>
        <span style="margin-left: 0.2rem">人已捐</span>
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
  //flex-direction:row;
  .left {
    width: 30%;

    display: flex;
    //align-items: center;
    //justify-content: center;
    //border: 1px solid yellow;
    //padding: 0.2rem;
    .avatar{

    }
  }

  .right {
    //border: 1px solid yellow;
    width: 70%;
    margin-left: 1rem;

    .name {
      font-size: medium;
      margin-right: 1rem;
    }
    .info,.count{
      font-size: x-small;
      color: gray;
    }
    .info {
      margin-top: 0.2rem;
    }
    .count {
      margin-top: 0.3rem;
      //border: 1px solid red;
    }
  }
}
:deep(.van-badge) {
  // 自己微调
  transform: translate(-0.1px);
}
</style>
