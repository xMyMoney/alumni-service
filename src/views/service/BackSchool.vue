<template>
  <MyNavBar/>
  <Form @submit="apply">
    <CellGroup inset>
      <Field
          v-model="applyInfo.username"
          name="姓名"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <Field
          name="性别" label="性别"
          :rules="[{ required: true, message: '请选择性别' }]"
      >
        <template #input>
          <RadioGroup v-model="applyInfo.gender" direction="horizontal">
            <Radio name="1">男</Radio>
            <Radio name="0">女</Radio>
          </RadioGroup>
        </template>

      </Field>

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

      <Field name="uploader" label="健康码"
             :rules="[{ required: false, message: '请上传健康码' }]">
        <template #input>
          <Uploader  />
        </template>
      </Field>

      <Field
          v-model="time"
          is-link
          readonly
          name="calendar"
          label="返校时间"
          placeholder="点击选择日期"
          :rules="[{ required: true, message: '请选择返校时间' }]"
          @click="showCalendar = true"
      />
      <Calendar v-model:show="showCalendar" :show-confirm="false" @confirm="onConfirmTime" />

      <Field
          v-model="applyInfo.reason"
          name="返校事由"
          label="返校事由"
          placeholder="返校事由"
          :rules="[{ required: true, message: '请填写返校事由' }]"
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
import {Form, Field, CellGroup, Button, Popup, Picker, Uploader, Calendar, Radio, RadioGroup, Toast} from 'vant';
import {onMounted, provide, ref} from "vue";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {backApply, BackApply, backApplyInfo} from "@api/alumni-apply";
import {useRoute, useRouter} from "vue-router";
provide('navTitle','返校预约')
import {useStore} from "../../store/user-info";
const userStore = useStore()
const time = ref<string>()
const showCalendar = ref(false);
const onConfirmTime = (date: Date) => {
  time.value = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  applyInfo.value.backTime = date
  showCalendar.value = false;
};
const route = useRoute()
const applyInfo = ref<BackApply>({})
const id = route.params.id as unknown as number;
const fetchData = async ()=> {
  const {data} = await backApplyInfo(id);
  applyInfo.value = data
}
onMounted(()=>{
  fetchData();
})

const apply = async ()=> {
  applyInfo.value.applyId = userStore.id;
  applyInfo.value.status = 0;
  applyInfo.value.reply = '';
  const {code,msg} = await backApply(applyInfo.value);
  if (code !== 0) {
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
