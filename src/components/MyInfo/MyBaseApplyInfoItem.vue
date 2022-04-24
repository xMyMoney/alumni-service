<script setup lang="ts">
import {Tag, SwipeCell, Button, Badge, Toast} from "vant";
import {inject, provide, ref} from "vue";
import {useRouter} from "vue-router";
import {BaseApplyInfo} from "@api/alumni-apply";
const router = useRouter()
const myActivity = inject("myActivity");
defineProps<{applyInfo:BaseApplyInfo}>()
const toUpdate = (id:number,applyType:string)=> {
  if (applyType == '返校') {
    // 返校申请
    router.push('/backSchool/'+id)
  }else if(applyType == '学位证明') {
    router.push('/degreeCertificate/'+id)
  }else {
    router.push('/graduationCertificate/'+id)
  }
}
const deleteApply =()=> {
  Toast.success("已删除")
}
</script>
<template>
  <SwipeCell>
    <div class="main">
      <div class="left">
        <span class="name">{{applyInfo.applyType}}</span>
      </div>

      <div class="center">
        <div class="info">
          <span>申请时间:{{applyInfo.applyTime}}</span>
          <br/>
          <span v-if="applyInfo.reply !== null">批复:{{applyInfo.reply}}</span>
        </div>
      </div>

      <div class="right">
        <Tag type="primary" v-if="applyInfo.applyStatus === 0">申请中</Tag>
        <Tag type="success" v-else-if="applyInfo.applyStatus === 1">已通过</Tag>
        <Tag type="danger" v-else>未通过</Tag>
      </div>
    </div>

    <template #right>
      <Button @click="toUpdate(applyInfo.id,applyInfo.applyType)" v-show="applyInfo.applyStatus === 2" square text="修改" type="primary" class="delete-bottom" />
      <Button @click="deleteApply" square text="删除" type="danger" class="delete-bottom" />
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

  box-shadow: 0 8px 12px #ebedf0;
  display:flex;
  align-items: center;
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

    .info{
      font-size: x-small;
      color: gray;
    }
  }
  .right{
    width: 20%;
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
