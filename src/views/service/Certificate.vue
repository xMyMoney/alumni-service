<template>
  <MyNavBar/>
  <Form >
    <CellGroup inset>
      <Field

          name="姓名"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />

      <Field

          name="学号"
          label="学号"
          placeholder="学号"
          :rules="[{ required: true, message: '请填写学号' }]"
      />

      <Field

          name="身份证"
          label="身份证"
          placeholder="身份证"
          :rules="[{ required: true, message: '请填写身份证' }]"
      />
      <Field

          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
      />

      <Field

          name="邮递地址"
          label="邮递地址"
          placeholder="邮递地址"
          :rules="[{ required: true, message: '请填写邮递地址' }]"
      />


      <Field

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
import { Form, Field, CellGroup,Button,Popup,Picker,Uploader,Calendar } from 'vant';
import {provide, ref} from "vue";
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {useRoute, useRouter} from "vue-router";
const route = useRoute()

provide('navTitle',Number(route.params.type) ? '学位证明':'毕业证明')
const result = ref('');
const showPicker = ref(false);
const columns = ['男', '女'];

const onConfirm = (value: string) => {
  result.value = value;
  showPicker.value = false;
};



</script>

<style scoped>

</style>
