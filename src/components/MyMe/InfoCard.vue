<script setup lang="ts">
import { Image as VanImage, Badge, Tag, Icon, Grid, GridItem } from 'vant';
import {useRouter} from "vue-router";
const value = 3;
const router = useRouter();
import {useStore} from "../../store/user-info";
const userStore = useStore()
</script>
<template>
    <div class="main">
        <div style="background: rgba(55, 152, 218, 0.589);">
                    <div class="top">
            <Badge :content="5">
                <VanImage
                    round
                    width="6rem"
                    height="6rem"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <template #content>
                    <Icon name="cross" class="badge-icon"/>
                </template>
            </Badge>
        </div>
        <div class="center">
            <div>
                <span class="username">{{userStore.username}}</span>

            </div>
            <div>
                <span class="classroom">{{userStore.academy}} {{userStore.beginYear}}级 {{userStore.major}}</span>

            </div>
            <div>
                <Tag type="success">{{ userStore.star }} 星级校友</Tag>
            </div>
        </div>
        </div>


        <div class="bottom">
            <Grid :border="false" :column-num="3" >
              <GridItem>
                <span>11</span>
                <span style="color: grey;" @click="router.push('/myActivity')">活动</span>
              </GridItem>
                <GridItem>
                    <span>11</span>
                    <span style="color: grey;" @click="router.push('/myDonation')">捐赠</span>
                </GridItem>

              <GridItem>
                <span>11</span>
                <span style="color: grey;" @click="router.push('/myInfo')">申请</span>
              </GridItem>
<!--                <GridItem>-->
<!--                    <span>11</span>-->
<!--                    <span style="color: grey;" >消息</span>-->
<!--                </GridItem>-->

            </Grid>
        </div>
    </div>
</template>

<style scoped lang="less">
.main {
    .top {
        text-align: center;
        padding-top: 1rem;
    }
    .center {
        text-align: center;
        .username {
            font-size: x-large;
        }
        .classroom {
            font-size: small;
        }
    }
  .bottom {
    margin-bottom: 1rem;
    //box-shadow: 5px 3px 10px #ccc;

    //box-shadow: 0 8px 12px #ebedf0;
  }
}
:deep(.van-badge) {
  // 自己微调
  transform: translate(-5px);
}
</style>
