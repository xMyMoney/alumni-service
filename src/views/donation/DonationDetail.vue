<script setup lang="ts">
import {Image,NavBar,Circle,Tab,Tabs,ActionBar ,Toast, Button,ActionBarButton,Popup,NumberKeyboard,Field} from "vant";
import {computed, onMounted, ref} from "vue";
import MyDonationRankItem from "@components/MyDonation/MyDonationRankItem.vue";
import {useRoute} from "vue-router";
import {Donation, DonationRank, getDonationDetails, addDonationRecord, getLatestRank, getRank} from "@api/donation";
import {useXhr} from "@hooks/useXhr";
import {useStore} from "../../store/user-info";
const userStore = useStore()
const comeback = () => {
  history.back()
}

const active = ref(0)

const route = useRoute()
const id = route.params.id as unknown as number;
const currentRate = ref<number>(0)
const text = computed(() => currentRate.value.toFixed(0) + '%');

const donationDetail = ref<Donation>()
const latestRankList = ref<DonationRank[]>()
const rankList = ref<DonationRank[]>()
const fetchDonationDetail = async()=> {
  const {data} =  await getDonationDetails(id)
  donationDetail.value = data
}
const fetchLatestRankList = async()=> {
  const {data} =  await getLatestRank(id)
  latestRankList.value = data
}
const fetchRankList = async()=> {
  const {data} =  await getRank(id)
  rankList.value = data
}
fetchDonationDetail()
fetchLatestRankList()
fetchRankList()
const money = ref<number>()
const show = ref(false)
const spend = ()=> {
  show.value = true
}
const goDonation = async ()=> {
  if (money.value != null && money.value > 100000) {
    Toast.success('十万元以上捐赠请先申请')
    show.value = false
    return;
  }
  show.value = false
  const {msg,code} = await addDonationRecord(donationDetail.value?.id,userStore.id,money.value);
  await fetchDonationDetail()
  await fetchLatestRankList()
  await fetchRankList()
}
</script>
<template>
  <div class="main">
    <NavBar
        class="nav"
        :title="donationDetail.title"
        left-text="返回"
        left-arrow
        @click-left="comeback"
    />
    <Image
        class="cover"
        fit="contain"
        src="https://pig-blog.oss-cn-guangzhou.aliyuncs.com/blog-file/img/1638857103861.jpg"
    />
    <div class="info">
      <h3>{{donationDetail.title}}</h3>
      <p>
        {{donationDetail.content}}
      </p>
    </div>

    <div class="situation">
      <h3>项目情况</h3>
      <div class="count">
        <Circle
            style="margin-left: 3rem"
            v-model:current-rate="currentRate"
            :rate="donationDetail.rate"
            :speed="30"
            :text="text"
            size="4.5rem"
        />
        <div class="right">
          <div>
            目标:<span>${{donationDetail.target}}</span>
          </div>
          <div>
            已收到捐款:<span>${{donationDetail.total}}</span>
          </div>
          <div>
            尚缺:<span>${{donationDetail.remain}}</span>
          </div>
        </div>
      </div>

    </div>
    <div class="rank">
      <Tabs v-model:active="active">
        <Tab title="最新捐赠">
          <MyDonationRankItem
          v-for="item in latestRankList"
          :info="item"/>
        </Tab>
        <Tab title="捐赠排行">
          <MyDonationRankItem
              v-for="item in rankList"
              :info="item"
          />
        </Tab>
      </Tabs>
    </div>
    <ActionBar>
<!--      <ActionBarIcon icon="chat-o" text="主页" @click="onClickIcon" />-->
<!--      <ActionBarButton disabled type="primary" text="物品捐赠" @click="" />-->
      <ActionBarButton v-if="donationDetail.status === 2" disabled type="success" text="立即捐赠" @click="spend" />
      <ActionBarButton v-else type="success" text="立即捐赠" @click="spend" />
    </ActionBar>
    <Popup v-model:show="show" position="bottom" :style="{ height: '45%' }" >
      <Field v-model="money" label="捐赠金额" type="number" >
        <template #button>
          <Button size="small" type="primary" @click="goDonation">立即捐赠</Button>
        </template>
      </Field>
    </Popup>




  </div>

</template>

<style scoped lang="less">
.main {
  .cover {
    //height: 15rem;
  }
  .info {
    margin: 1rem;
  }
  .situation {
    margin: 1rem;
    .count {
      //border: 1px solid red;
      width: 90%;
      margin: 0 auto;
      display: flex;
      //flex-direction:row;
      //justify-items: center;
      align-items: center;

      .right {
        margin-left: 1.5rem;
        div {
          margin-bottom: 0.5rem;
        }
        span {
          font-weight: bold;
        }
      }
    }
  }

}
</style>
