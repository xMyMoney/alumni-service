<template>
  <MyNavBar/>
  <Form @submit="onSubmit">
    <CellGroup inset>
      <Field
          v-model="username"
          name="姓名"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <Field
          v-model="result"
          is-link
          readonly
          name="picker"
          label="性别"
          placeholder="点击选择性别"
          :rules="[{ required: true, message: '请选择性别' }]"
          @click="showPicker = true"
      />
      <Popup v-model:show="showPicker" position="bottom">
        <Picker
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
        />
      </Popup>

      <Field
          v-model="username"
          name="身份证"
          label="身份证"
          placeholder="身份证"
          :rules="[{ required: true, message: '请填写身份证' }]"
      />
      <Field
          v-model="username"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
      />

      <Field name="uploader" label="健康码"
             :rules="[{ required: true, message: '请上传健康码' }]">
        <template #input>
          <Uploader v-model="uri" />
        </template>
      </Field>

      <Field
          v-model="resultTime"
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
          v-model="username"
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
import { Form, Field, CellGroup,Button,Popup,Picker,Uploader,Calendar } from 'vant';
import {provide, ref} from "vue";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
provide('navTitle','返校预约')
const result = ref('');
const showPicker = ref(false);
const columns = ['男', '女'];

const onConfirm = (value: string) => {
  result.value = value;
  showPicker.value = false;
};

const resultTime = ref('');
const showCalendar = ref(false);
const onConfirmTime = (date: Date) => {
  resultTime.value = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  showCalendar.value = false;
};

</script>

<style scoped>

</style>
