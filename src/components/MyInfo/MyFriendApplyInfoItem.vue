<script setup lang="ts">
import {Icon, Image, Tag, SwipeCell, Button, Badge, Toast} from "vant";
import {inject, provide, ref} from "vue";
import {useRouter} from "vue-router";
import {ApplyInfo, handleApply} from "@api/friend-apply";
import {useXhr} from "@hooks/useXhr";
import {getUserId} from "@utils/auth";
const router = useRouter()
const myActivity = inject("myActivity");
defineProps<{applyInfo:ApplyInfo}>()
const handle = async (applyId:number,status:number)=> {
  const {msg,code} = await handleApply({applyId:applyId,alumniId:getUserId() as unknown as number,status:status})
  if(code == 0) {
    if (status == 1) {
      Toast.success('已同意')
    }else {
      Toast.success('已拒绝')
    }
  }
}
</script>
<template>
  <SwipeCell>

    <div class="main">
      <div class="left">
        <Image
            class="avatar"
            round

            :src="applyInfo.avatar"
        />

      </div>

      <div class="center">
        <span class="name">{{applyInfo.username}}</span>

        <div class="info">
          <span>申请内容:</span>
          <br/>
          <span>{{applyInfo.message}}</span>
          <br/>
        </div>
      </div>

      <div class="right">
        <Button round text="同意" @click="handle(applyInfo.applyId,1)" type="primary" />
      </div>
    </div>

    <template #right>
      <Button square text="拒绝" @click="handle(applyInfo.applyId,2)" type="danger" class="delete-bottom" />
    </template>
  </SwipeCell>
</template>

<style scoped lang="less">
.main {
  //border: 1px solid red;
  margin: 0 auto;
  //width: 80%;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 12px #ebedf0;
  display:flex;

  .left {
    width: 20%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .avatar{

    }
  }

  .center {
    width: 60%;
    margin-left: 1rem;

    .name {
      font-size: medium;
      margin-right: 0.5rem;
    }
    .info{
      font-size: x-small;
      color: gray;
      margin-top: 0.2rem;
    }
  }
  .right{
    width: 20%;
    margin-top: 1rem;
    .btn {

    }
  }
}
.delete-bottom {
  height: 100%;
}
:deep(.van-badge) {
  // 自己微调
  transform: translate(-0.1px);
}
</style>
