<script setup lang="ts">
import {Image,Grid, GridItem,Icon,ActionBar, ActionBarButton,Dialog ,Tag,Toast} from "vant";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {provide, ref} from "vue";
import {useRoute} from "vue-router";
import {Activity, getOne, joinActivity} from "@api/activity";
import {getUserId} from "@utils/auth";
provide('navTitle','详情')
const route = useRoute()
const id = route.params.id as unknown as number
const info = ref<Activity>({})
const fetchActivity = async ()=> {
  const {data} = await getOne(id,getUserId() as unknown as number);
  info.value = data;
}
fetchActivity()
const showDialog =  ()=> {
  Dialog.confirm({
    title: '参加活动',
    message:
        '是否报名参加活动',
  })
      .then(async () => {
        const {code,msg} = await joinActivity(info.value?.id,getUserId() as unknown as number);
        Toast.success("报名成功")
        await fetchActivity()
      })
      .catch(() => {
        // on cancel
      });

}
</script>
<template>
  <div class="main">
    <MyNavBar/>
    <Image
        radius="0.5rem"
        fit="contain"
        :src="info.cover"
    />
    <div class="info">
      <h3>{{info.title}}</h3>
      <div class="comInfo">
        <Grid :column-num="3" :border="false">
          <GridItem>
              <span><Icon name="chat-o" />状态</span>
            <div>
              <Tag v-if="info.status === 0" type="primary">未开始</Tag>
              <Tag v-else-if="info.status === 1" type="success">进行中</Tag>
              <Tag v-else type="danger">已结束</Tag>
            </div>
          </GridItem>
          <GridItem>
            <span><Icon name="chat-o" />名额</span>
            <div>{{info.quota}}</div>
          </GridItem>
          <GridItem>
            <span><Icon name="chat-o" />已报名</span>
            <div>{{info.joinCount}}</div>
          </GridItem>
        </Grid>
      </div>
      <div class="impInfo">
        <div>开始:{{info.beginTime}}</div>
        <div>结束:{{info.endTime}}</div>
        <div>地点:{{info.place}}</div>
      </div>
      <div class="detail">
        <h3>活动内容</h3>
        <div>{{info.content}}</div>
      </div>
    </div>
    <ActionBar>
      <ActionBarButton v-if="info.join" disabled  type="success" text="已报名" @click="showDialog" />
      <ActionBarButton v-else-if="info.status === 2 || info.status === 0" disabled  type="success" text="立即报名" @click="showDialog" />
      <ActionBarButton v-else  type="success" text="立即报名" @click="showDialog" />
    </ActionBar>

  </div>


</template>

<style scoped lang="less">
.main {
  .info {
    margin: 1rem;
    .comInfo {
      //display:flex;
      //flex-direction:row;
      div {
        //border: 1px solid red;
        //margin: 0 1rem;
      }
    }
  }
}
</style>
