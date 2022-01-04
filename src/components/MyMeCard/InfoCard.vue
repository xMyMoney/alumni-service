<script setup lang="ts">
import { Image as VanImage, Badge, Tag, Icon, Grid, GridItem } from 'vant';
const value = 3;
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
                <span class="username">朱伟熹</span>

            </div>
            <div>
                <span class="classroom">计算机科学与工程 2018级 软件工程3班</span>

            </div>
            <div>
                <Tag type="success">{{ value }} 星级校友</Tag>
            </div>
        </div>
        </div>


        <div class="bottom">
            <Grid :border="false">
                <GridItem>
                    <span>11</span>
                    <span style="color: grey;">相册</span>
                </GridItem>
                <GridItem>
                    <span>11</span>
                    <span style="color: grey;">互助</span>
                </GridItem>
                <GridItem>
                    <span>11</span>
                    <span style="color: grey;">活动</span>
                </GridItem>
                <GridItem>
                    <span>11</span>
                    <span style="color: grey;">通知</span>
                </GridItem>
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
    //border-bottom: 1px solid #ccc;
    box-shadow: 5px 3px 10px #ccc;
  }
}
</style>
