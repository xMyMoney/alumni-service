<script setup lang="ts">
import {Tag, Button, SwipeCell, Toast,Popup,Field} from "vant";
import {useRouter} from "vue-router";
import {addDonationRecord, Donation} from "@api/donation";
import {ref} from "vue";
import {getUserId} from "@utils/auth";
const router = useRouter()
defineProps<{info:Donation}>()
const money = ref<number>()
const show = ref(false)
const spend = ()=> {
  show.value = true
}
const goDonation = async (donationId:number)=> {
  if (money.value != null && money.value > 100000) {
    Toast.success('十万元以上捐赠请先申请')
    show.value = false
    return;
  }
  show.value = false
  const {msg,code} = await addDonationRecord(donationId,getUserId() as unknown as number,money.value);
}
</script>
<template>
  <SwipeCell>
    <div class="main">

<!--      <Tag type="success">金钱捐赠</Tag>-->

      <div class="content">
        <div>
          累计捐赠:<span>${{info.total}}</span>
        </div>
        <div>
          捐赠项目:<span>{{info.title}}</span>
        </div>
        <div>
          项目状态:
          <Tag class="tag" v-if="info.status === 0" type="primary">未开始</Tag>
          <Tag class="tag" v-else-if="info.status === 1" type="success">进行中</Tag>
          <Tag class="tag" v-else type="danger">已结束</Tag>
          <Button v-if="info.status === 2" disabled class="btn" type="success" round size="small" @click="spend">再捐一笔</Button>
          <Button v-else class="btn" type="success" round size="small" @click="spend">再捐一笔</Button>
        </div>
      </div>

    </div>
    <template #right>
      <Button style="height: 100%" square text="删除" type="danger" class="delete-bottom" />
    </template>
  </SwipeCell>
  <Popup v-model:show="show" position="bottom" :style="{ height: '45%' }" >
    <Field v-model="money" label="捐赠金额" type="number" >
      <template #button>
        <Button size="small" type="primary" @click="goDonation(info.donationId)">立即捐赠</Button>
      </template>
    </Field>
  </Popup>


</template>


<style scoped lang="less">
.main {
  //border: 1px solid red;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  //border-radius: 1rem;
  box-shadow: 0 8px 12px #ebedf0;
  //display:flex;
  //flex-direction:row;

  .content {
    //border: 1px solid red;
    margin: 1rem 2rem;
    div {
      margin-bottom: 0.5rem;
    }
    span {
      font-weight: bold;
    }
    .btn {
      margin-left: 8rem;
    }
  }


}

</style>
