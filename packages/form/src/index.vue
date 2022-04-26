<template>
  <el-form
    v-if="model" :validate-on-rule-change="false" v-bind="$attrs"
    :model="model" ref="form"
  >
    <template
      v-for="(item, index) in options" :key="index"
    >
      <el-form-item
        v-if="!item.children || !item.children.length"
        :label="item.label"
        :prop="item.prop" :rules="item.rules"
      >
        <component
          v-if="item.type !== 'upload' && item.type !== 'editor' "
          :is="`el-${item.type}`"
          :placeholder="item.placeholder"
          v-bind="item.attrs"
          v-model="model[item.prop!]"
        />
        <el-upload
          v-bind="item.uploadAttrs"
          v-if="item.type === 'upload'"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :on-exceed="onExceed"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
        >
          <slot name="uploadArea" />
          <slot name="uploadTip" />
        </el-upload>
        <div id="editor" style="border: 1px solid #ccc" v-if="item.type === 'editor'">
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :default-config="toolbarConfig"
            mode="default"
          />
          <Editor
            style="height: 200px; overflow-y: hidden;"
            v-model="model.desc"
            :default-config="editorConfig"
            mode="default"
            @on-created="handleCreated"
          />
        </div>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length" :label="item.label"
        :prop="item.prop" :rules="item.rules"
      >
        <component
          :placeholder="item.placeholder"
          v-bind="item.attrs" :is="`el-${item.type}`" v-model="model[item.prop!]"
        >
          <component
            v-for="(child, i) in item.children" :key="i" :is="`el-${child.type}`"
            :label="child.label" :value="child.value"
          />
        </component>
      </el-form-item>
    </template>

    <el-form-item>
      <slot name="actionArea" :form="form" :model="model" />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { PropType, ref, onMounted, watch, shallowRef, onBeforeUnmount } from 'vue'
import { FormOptions } from './types/types'
import { cloneDeep } from 'lodash'
import { UploadFile, UploadProgressEvent, UploadRawFile, UploadFiles, FormInstance } from 'element-plus'
import { Awaitable } from '@vueuse/core'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css' // 引入 css

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  // eslint-disable-next-line vue/require-default-prop
  httpRequest: {
    type: Function
  }
})

const model = ref<any>(null)
const form = ref<FormInstance | null>()

// 初始化表单
const initForm = () => {
  if (props.options && props.options.length) {
    const m: any = {}

    props.options.map((item: FormOptions) => (
      m[item.prop!.toString()] = item.value!
    ))

    model.value = cloneDeep(m)
  }
}
onMounted(() => {
  initForm()
})

// 表单验证
const validate = () => {
  return form.value?.validate
}

// 表单数据
const getFormData = () => {
  return model.value
}

// 分发方法
defineExpose({
  validate,
  getFormData
})

// 监听父组件传递过来的options
watch(() => props.options, () => {
  initForm()
})

// 上传组件的所有方法
const emits = defineEmits(['on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'on-exceed', 'before-upload', 'before-remove'])
const onPreview = (uploadFile: UploadFile) => {
  emits('on-preview', uploadFile)
}
const onRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-remove', [uploadFile, uploadFiles])
}
const onSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  const fileItem = props.options.find(item => item.type === 'upload')!
  console.log(response, uploadFile, uploadFiles, '123')

  model.value[fileItem.prop!] = { response, uploadFile, uploadFiles }

  emits('on-success', [response, uploadFile, uploadFiles])
}
// eslint-disable-next-line n/handle-callback-err
const onError = (error: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-error', [error, uploadFile, uploadFiles])
}
const onProgress = (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('on-progress', [evt, uploadFile, uploadFiles])
}
const onChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  console.log('onchange')

  emits('on-change', [uploadFile, uploadFiles])
}
const onExceed = (files: File[], uploadFiles: UploadFiles) => {
  emits('on-exceed', [files, uploadFiles])
}
const beforeUpload = (rawFile: UploadRawFile):Awaitable<void | undefined | null | boolean | File | Blob> => {
  emits('before-upload', rawFile)
}
const beforeRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('before-remove', [uploadFile, uploadFiles])
}

// wangeditor
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 内容 HTML
// const valueHtml = ref('<p>hello world</p>')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
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

<style lang="scss" scoped>
:deep .el-icon {
  width: 2em;
  height: 2em;
}
</style>
