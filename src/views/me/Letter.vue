<script setup lang="ts">
import MyNavBar from "@components/MyNavBar/MyNavBar.vue";
import {useXhr} from "@hooks/useXhr";
import {getStaticPage, StaticPage} from "@api/static-page";
import {formatActiveTime} from "@utils/time";
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import {onBeforeUnmount, ref, shallowRef, provide, onMounted} from 'vue'
import { Editor } from '@wangeditor/editor-for-vue'
provide('navTitle','致校友的一封信')
const adapter = async ()=>(await getStaticPage(1)).data
const [request, response,loading] = useXhr(adapter,{},true)

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref<string>('')

// 模拟 ajax 异步获取内容
onMounted( () => {
  setTimeout(()=>{
    valueHtml.value = response.value.content as string
  },500)

})

const toolbarConfig = {}
const editorConfig = { readOnly:true }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>
<template>
  <MyNavBar/>
  <div class="main">
    <div class="top">
      <h3>致校友的一封信</h3>

      <span class="time">{{formatActiveTime(response.createTime)}}</span>
<!--      <span class="origin">来源: 桂林航天工业学院</span>-->
    </div>
    <div>
      <div style="border: 1px solid #ccc">
        <Editor
            v-model="valueHtml"
            @onCreated="handleCreated"
            :defaultConfig="editorConfig"
        />
      </div>
    </div>
    <div class="bottom">
      <div></div>
    </div>
  </div>

</template>

<style scoped lang="less">
.main {
  margin: 0.5rem;
  .top {
    h3 {
      margin: 0.3rem 0;
    }
    span {
      color: gray;
    }
    .origin {
      margin-left: 1rem;
    }
  }
}
</style>
