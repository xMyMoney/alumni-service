<script setup lang="ts">
import {Badge,Icon,Image,Button,Toast} from "vant";
import { inject, ref } from "vue";
import {DonationRank} from "@api/donation";
defineProps<{info:DonationRank}>()
</script>
<template>
  <div class="main">
    <Image
        class="avatar"
        round
        width="2rem"
        height="2rem"
        :src="info.avatar"
    />
    <span class="user">{{info.alumni}}</span>
    <span class="cash">{{info.count}}元</span>
    <span class="time">{{info.time}}</span>

  </div>


</template>


<style scoped lang="less">
.main {
  //border: 1px solid red;
  margin: 0 auto;
  width: 80%;
  //margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  //border-radius: 1rem;
  box-shadow: 0 8px 12px #ebedf0;
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;

  .user {
    margin-left: 0.5rem;
    margin-right: 0.2rem;
  }
  .time {
    margin-left: 1rem;
  }
}

</style>
