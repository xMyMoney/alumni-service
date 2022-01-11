<script setup lang="ts">
import {Image,NavBar,Circle,Tab,Tabs,ActionBar, ActionBarIcon, ActionBarButton} from "vant";
import {computed, ref} from "vue";
import MyDonationRankItem from "@components/MyDonation/MyDonationRankItem.vue";

const comeback = () => {
  history.back()
}
const currentRate = ref(0);
const text = computed(() => currentRate.value.toFixed(0) + '%');

const active = ref(0)
</script>
<template>
  <div class="main">
    <NavBar
        class="nav"
        title="天八翻新"
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
      <h3>天八翻新</h3>
      <p>
        肯定要翻新肯定要翻新肯定要翻新
        肯定要翻新肯定要翻新肯定要翻新
        肯定要翻新肯定要翻新肯定要翻新
        肯定要翻新肯定要翻新肯定要翻新
        肯定要翻新肯定要翻新肯定要翻新
      </p>
    </div>

    <div class="situation">
      <h3>项目情况</h3>
      <div class="count">
        <Circle
            style="margin-left: 3rem"
            v-model:current-rate="currentRate"
            :rate="100"
            :speed="100"
            :text="text"
            size="4.5rem"
        />
        <div class="right">
          <div>
            目标:<span>$1000</span>
          </div>
          <div>
            已收到捐款:<span>$1001</span>
          </div>
          <div>
            尚缺:<span>$+1</span>
          </div>
        </div>
      </div>

    </div>
    <div class="rank">
      <Tabs v-model:active="active">
        <Tab title="最新捐赠">
          <MyDonationRankItem/>
          <MyDonationRankItem/>
          <MyDonationRankItem/>
          <MyDonationRankItem/>
          <MyDonationRankItem/>
        </Tab>
        <Tab title="捐赠排行">
          <MyDonationRankItem/>
          <MyDonationRankItem/>
          <MyDonationRankItem/>
        </Tab>

      </Tabs>
    </div>
    <ActionBar>
<!--      <ActionBarIcon icon="chat-o" text="主页" @click="onClickIcon" />-->
      <ActionBarButton disabled type="primary" text="物品捐赠" @click="" />
      <ActionBarButton type="success" text="立即捐赠" @click="" />
    </ActionBar>
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
