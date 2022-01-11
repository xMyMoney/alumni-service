<script setup lang="ts">
import {Tag,Button,SwipeCell} from "vant";
import {useRouter} from "vue-router";
const router = useRouter()

</script>
<template>
  <SwipeCell>
    <div class="main">

      <Tag type="success">金钱捐赠</Tag>

      <div class="content">
        <div>
          已捐赠:<span>$1000</span>
        </div>
        <div>
          捐赠项目:<span>天八翻新</span>
        </div>
        <div>
          捐赠时间:<span>2022-01-01 1:00</span>
          <Button class="btn" type="success" round size="small">再捐一次</Button>
        </div>

      </div>

    </div>
    <template #right>
      <Button style="height: 100%" square text="删除" type="danger" class="delete-bottom" />
    </template>
  </SwipeCell>



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
      margin-left: 4rem;
    }
  }


}

</style>
