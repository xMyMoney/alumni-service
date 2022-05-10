<template>
  <NavBar
      left-text="返回"
      left-arrow
      @click-left="comeback"
      class="nav"
      title="注册信息"
  />
  <Form @submit="onSubmit">
    <CellGroup inset>
      <Field required name="uploader" label="头像">
        <template #input>
          <Uploader v-model="imgList"  :after-read="afterRead" />
        </template>
      </Field>

      <Field
          required
          v-model="alumni.username"
          name="姓名"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <Field
          required
          v-model="alumni.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <Field required name="radio" label="性别">
        <template #input>
          <RadioGroup v-model="alumni.gender" direction="horizontal">
            <Radio name="1">男</Radio>
            <Radio name="2">女</Radio>
          </RadioGroup>
        </template>
      </Field>
      <Field
          required
          v-model="calender"
          is-link
          readonly
          name="calendar"
          label="出生日期"
          placeholder="点击选择日期"
          @click="showCalendar = true"
      >
      </Field>
      <Popup v-model:show="showCalendar" position="bottom">
        <DatetimePicker
            type="date"
            @confirm="onConfirm"
            @cancel="showCalendar=false"
        />
      </Popup>

      <Field
          required
          v-model="alumni.phone"
             type="tel" label="手机号" placeholder="手机号"
             :rules="[{ required: true, message: '请填写手机号' }]"
             ></Field>
      <Field
          required
          v-model="alumni.company"
          name="公司"
          label="公司"
          placeholder="公司"
          :rules="[{ required: true, message: '请填写公司' }]"
      />
      <Field
          required
          v-model="alumni.jor"
          name="职位"
          label="职位"
          placeholder="职位"
          :rules="[{ required: true, message: '请填写职位' }]"
      />
      <Field v-model="alumni.stuId"
             required
             type="tel" label="学号" placeholder="学号"
             :rules="[{ required: true, message: '请填写学号' }]"
      ></Field>
    </CellGroup>
    <div style="margin: 16px;">
      <Button v-if="id === '' || id == null" style="margin-top: 1rem" round block type="primary" native-type="submit">
        注册
      </Button>
      <Button v-else style="margin-top: 1rem" round block type="primary" native-type="submit">
        重新提交
      </Button>
    </div>
  </Form>

</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import { NavBar ,Image,Toast ,Form, Field, CellGroup,Button,RadioGroup,Radio,Uploader,Popup,DatetimePicker} from 'vant';
import {Alumni, FileVo, register, registerInfo, uploadImg} from "@api/alumni";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
import {useRequestor} from "@utils/requestor/useRequestor";
const comeback = () => {
  history.back()
}
const router = useRouter()
const route = useRoute()
const id = route.params.id as unknown as string
const alumni = ref<Alumni>({})
const calender = ref<string>()
const fetchAlumni = async ()=> {
  const {data} = await registerInfo(id)
  alumni.value = data
  // calender.value = data.birthday
}
onMounted(()=> {
  if (id != '' && id != null) {
    fetchAlumni()
  }
})

const avatar = ref<any>()
const beforeRead = (file:File)=> {
  if (file.type !== 'image/jpeg') {
    Toast('请上传 jpg 格式图片');
    return false;
  }
  return true;
}
const uploadAvatar = async (file:File)=> {
  const {data} = await  uploadImg(file)
  alumni.value.avatar = data.fileUrl
}
const imgList=ref<any[]>([])

const afterRead = (file: any)=> {
  // console.log(file)
  // const {data} = await  uploadImg(file.file)
  // alumni.value.avatar = data.fileUrl
  // uploadAvatar(file.file)
  const formData = new FormData();
  formData.append('file',file.file)
  console.log(formData)
  useRequestor.request<HttpResponse<FileVo>>({
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url:'file/upload',
    method:'POST',
    data:formData
  }).then((res)=> {

    alumni.value.avatar = res.data.fileUrl
    console.log(123)
    // imgList.value=[{url:res.data.fileUrl}]
  }).catch(e=>{
    console.log(e)
  })

}
const onSubmit = async () => {
  const {msg,code} = await register(alumni.value);
  if (code === 0) {
    // 信息认证成功
    Toast.success('注册成功');
  }else {
    Toast.success(msg)
  }
  await router.push('/login')
};
const showCalendar = ref(false);
const onConfirm = (date: Date) => {
  calender.value = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  alumni.value.birthday = date;
  showCalendar.value = false;
};
</script>

<style scoped>

</style>
