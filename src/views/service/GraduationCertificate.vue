<template>
  <MyNavBar/>
  <Form @submit="apply">
    <CellGroup inset>
      <Field
          v-model="applyInfo.username"
          name="姓名"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
      />

      <Field
          v-model="applyInfo.stuId"
          name="学号"
          label="学号"
          placeholder="学号"
          :rules="[{ required: true, message: '请填写学号' }]"
      />
      <Field
          v-model="applyInfo.phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
      />

      <Field
          v-model="applyInfo.address"
          name="邮递地址"
          label="邮递地址"
          placeholder="邮递地址"
          :rules="[{ required: true, message: '请填写邮递地址' }]"
      />


      <Field
          v-model="applyInfo.reason"
          name="申请理由"
          label="申请理由"
          placeholder="申请理由"
          :rules="[{ required: true, message: '请填写申请理由' }]"
      />

    </CellGroup>

    <div style="margin: 16px;">
      <Button round block type="primary" native-type="submit">
        提交
      </Button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import {Form, Field, CellGroup, Button, Popup, Picker, Uploader, Calendar, Toast} from 'vant';
import {onMounted, provide, ref} from "vue";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {useRoute, useRouter} from "vue-router";
import {backApply, proveApply, ProveApply, proveApplyInfo} from "@api/alumni-apply";
const route = useRoute()

provide('navTitle','毕业证明')
import {useStore} from "../../store/user-info";
const userStore = useStore()
const id = route.params.id as unknown as number;
const applyInfo = ref<ProveApply>({})
const fetchData = async ()=> {
  const {data} = await proveApplyInfo(id);
  applyInfo.value = data
}
onMounted(()=> {
  fetchData();
})
const apply = async ()=> {
  applyInfo.value.applyId = userStore.id
  applyInfo.value.proveType = 2
  applyInfo.value.status = 0
  applyInfo.value.reply = ''
  const {code,msg} = await proveApply(applyInfo.value);
  if (code != 0) {
    Toast.success(msg)
    return;
  }
  Toast.success('已提交申请')
  setTimeout(()=>{
    history.back()
  },2000)
}
</script>

<style scoped>

</style>
