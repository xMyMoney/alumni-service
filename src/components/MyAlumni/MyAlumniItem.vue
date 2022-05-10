<template>
    <div class="main">
      <div class="left">
<!--        <Badge>-->
<!--          <Image-->
<!--              class="avatar"-->
<!--              round-->
<!--              width="5rem"-->
<!--              height="5rem"-->
<!--              src="https://img.yzcdn.cn/vant/cat.jpeg"-->
<!--          />-->
<!--          <template #content>-->
<!--            <Icon name="cross" class="badge-icon"/>-->
<!--          </template>-->
<!--        </Badge>-->
        <Image
            class="avatar"
            round

            :src="alumni.avatar"
        />

      </div>

      <div class="right">
        <span class="name">{{alumni.username}}</span>
        <Rate size="small" v-model="alumni.star" color="#ffd21e"/>

        <div class="info">
          <span class="info"> </span>
          <span class="">{{alumni.beginYear}}-{{alumni.endYear}} {{educate(alumni.education)}} {{alumni.major}}</span>
          <br/>
          <span class="">{{alumni.address}} {{alumni.company}} {{alumni.jor}}</span>
          <br/>
        </div>
        <div class="active">
          <span>{{formatActiveTime(alumni.loginTime)}} 活跃</span>

          <Button v-if="alumni.isFriend" class="btn" type="success" round size="small" @click="copyVx(alumni.phone.toString())">复制手机号</Button>

          <Button v-else class="btn" type="success" round size="small" @click="showPopup">交换名片</Button>
          <Popup v-model:show="show" position="top" style="height: 20%">
            <CellGroup inset>
              <Field
                  v-model="applyInfo.message"
                  label="申请留言"
                  left-icon="smile-o"
                  placeholder="内容"
                  style="margin-top: 3rem"
              >
                <template #button>
                  <Button round size="normal" type="primary" @click="applyCard(alumni.id)">申请</Button>
                </template>
              </Field>
            </CellGroup>
          </Popup>
        </div>
      </div>
    </div>


</template>
<script setup lang="ts">
import {Badge,Icon,Image,Button,Toast,Popup,CellGroup,Field,Rate} from "vant";
import {computed, inject, ref} from "vue";
import {Alumni} from "@api/alumni";
defineProps<{alumni:Alumni,all:number}>()
import {formatActiveTime} from "@utils/time";
import { toClipboard } from '@soerenmartius/vue3-clipboard';
import {applyChange, ApplyInfo} from "@api/friend-apply";
import {getUserId} from "@utils/auth";
const educate = (educate:number)=> {
  let t = '';
  switch (educate) {
    case 1: t = '本科';break;
    case 2: t = '硕士';break;
    case 3: t = '博士';break;
    case 0 : t = '专科';break;
  }
  return t;
}

const copyVx = (phone:string)=> {
  toClipboard(phone,"copy")
  Toast.success('复制手机号成功')
}
const applyInfo = ref<ApplyInfo>({})
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const applyCard = async (id:number) => {
  applyInfo.value.alumniId = id;
  applyInfo.value.applyId = getUserId() as unknown as number;
  const {msg,code} = (await applyChange(applyInfo.value))
  if(code == 200) {
    Toast.success('已发送交换请求')
  }
}
</script>

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
