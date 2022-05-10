<script setup lang="ts">
import {Badge,Icon,Image,Button,Toast,Tag } from "vant";
import {useRouter} from "vue-router";
import {Donation} from "@api/donation";
const router = useRouter()
defineProps<{info:Donation}>()
</script>
<template>
  <div class="main" @click="router.push('/donation/detail/'+info.id)">
    <div class="left">
        <Image
            class="avatar"
            fit="contain"
            round
            radius="10px"
            :src="info.cover"
        />

    </div>

    <div class="right">
      <span class="name">{{info.title}}</span>

      <div class="info">
        <span class="">
          {{info.content.slice(0,5)}}...
        </span>
      </div>
      <div class="count">
        <span style="color: #ed6a0c">{{info.donatedCount}}</span>
        <span style="margin-left: 0.2rem">人已捐</span>
        <Tag class="tag" v-if="info.status === 0" type="primary">未开始</Tag>
        <Tag class="tag" v-else-if="info.status === 1" type="success">进行中</Tag>
        <Tag class="tag" v-else type="danger">已结束</Tag>

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
    .info,.count{
      font-size: x-small;
      color: gray;
    }
    .info {
      margin-top: 0.2rem;
    }
    .count {
      margin-top: 0.3rem;
      .tag {
        margin-left: 7rem;
      }
    }
  }
}
:deep(.van-badge) {
  // 自己微调
  transform: translate(-0.1px);
}
</style>
