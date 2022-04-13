<script setup lang="ts">
import { Icon, Image, Tag, SwipeCell, Button } from "vant";
import {inject, provide, ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter()
const myActivity = inject("myActivity");
</script>
<template>
  <SwipeCell>
    <div class="main">
      <div class="container">
        <div class="cover" @click="router.push('/activityDetail')">
          <Image
              radius="0.5rem"
              fit="contain"
              src="https://pig-blog.oss-cn-guangzhou.aliyuncs.com/blog-file/img/1638857103861.jpg"
          />
          <span class="title">一起回母校吧！！！</span>
        </div>
        <div class="left">
          <div>
            <Tag type="danger" style="margin-right: 0.05rem">已结束</Tag>
            <Tag type="primary">校友聚会</Tag>
          </div>
          <div>
            <Icon name="clock-o" />
            <span>2020-1-1 9:00</span>
          </div>
          <div>
            <Icon name="location-o" />
            <span>广西贺州</span>
          </div>
          <div>
            <Icon name="friends-o" />
            <span>11人报名</span>
          </div>
        </div>
        <div class="right">

        </div>

      </div>
    </div>
    <template #right v-if="myActivity">
      <Button square text="删除" type="danger" class="delete-bottom" />
    </template>
  </SwipeCell>
</template>

<style scoped lang="less">
.main {
  //border: 1px solid red;
  //margin: 0 auto;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 12px #ebedf0;
  //width: 80%;
  //text-align: center;
  .container {
    width: 80%;
    margin: 0 auto;
    text-align: left;
    .cover {
      //border: 1px solid red;
      position: relative; //add by jc
      .title {
        color: #fff; //update by jc
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }



  .info {
    //border: 1px solid red;
    span {
      //font-size: x-small;
    }
  }

  .content {
    //border: 1px solid red;
    margin-top: 0.4rem;
    margin-bottom: 0.1rem;
  }

  .category {
  }
}

.delete-bottom {
  height: 100%;
}
</style>
