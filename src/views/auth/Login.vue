<template>
  <NavBar
      class="nav"
      title="登录校友之家"
  />
  <Form @submit="onSubmit">
    <CellGroup inset>
      <Field
          v-model="loginParam.stuId"
          name="学号"
          label="学号"
          placeholder="学号"
          :rules="[{ required: true, message: '请填写学号' }]"
      />
      <Field
          v-model="loginParam.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </CellGroup>
    <div style="margin: 16px;">
      <Button round block type="primary" native-type="submit">
        登录
      </Button>
      <Button @click="router.push('/register')" style="margin-top: 1rem" round block type="primary">
        注册
      </Button>
    </div>
  </Form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { NavBar ,Toast ,Form, Field, CellGroup,Button} from 'vant';
import {useRouter} from "vue-router";
import {login, LoginParam} from "@api/alumni";
import {useStore} from "../../store/user-info";
import {setToken, setUserId} from "@utils/auth";
const infoStore = useStore()
const router = useRouter()
const loginParam = ref<LoginParam>({})
const onSubmit = async () => {
  const {code,msg,data} = await login(loginParam.value)
  if (code === 0) {
    if (data.alumni?.status === 1) {
      infoStore.setInfo(data.alumni)
      setToken(data.token as string)
      setUserId(data.alumni.id as unknown as string)
      await router.push("/")
      console.log('状态村里吗')
      console.log(infoStore.status)
    }else {
      // 审核不通过或者正在审核状态 可以修改信息
      await router.push('/register/'+data.alumni?.id)
    }
  }else {
    Toast.fail(msg)
  }
};
</script>

<style scoped>

</style>
