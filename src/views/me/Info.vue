<template>
  <MyNavBar/>
  <Form @submit="">
    <CellGroup inset>
      <Field
          v-model="alumni.username"
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
          v-model="alumni.phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
      />

      <Field
          v-model="alumni.address"
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
provide('navTitle','修改资料')
import {useStore} from "../../store/user-info";
import {Alumni} from "@api/alumni";
const userStore = useStore()
const alumni = ref<Alumni>({})
alumni.value = userStore
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
