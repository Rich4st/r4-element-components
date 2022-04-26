<template>
  <div>
    <m-form
      label-width="100px" :options="options" @on-preview="handlePreview"
      @on-remove="handleRemove" @on-exceed="handleExceed"
      @before-remove="beforeRemove" @on-success="handleOnSuccess"
      @on-change="handleChange"
    >
      <template #uploadArea>
        <el-button type="primary">
          Click to upload
        </el-button>
      </template>
      <template #uploadTip>
        <div class="el-upload__tip" style="color: #ccc; font-size: 12px; margin-left: 15px;">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
      <template #actionArea="scope">
        <el-button type="primary" @click="submitForm(scope)">
          Submit
        </el-button>
        <el-button @click="resetForm(scope)">
          Reset
        </el-button>
      </template>
    </m-form>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox, FormInstance, UploadProps } from 'element-plus'
import { FormOptions } from '../../components/form/src/types/types'

const options:FormOptions[] = [
  // username
  {
    type: 'input',
    value: 'admin',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 10,
        message: '用户名在2-10位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true
    }
  },
  // password
  {
    type: 'input',
    value: '123',
    label: '密码',
    prop: 'password',
    rules: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 10,
        message: '密码在2-10位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true,
      showPassword: true
    }
  },
  // select
  {
    type: 'select',
    value: '1',
    placeholder: '请选择职位',
    label: '职位',
    prop: 'role',
    rules: [
      { required: true, message: '请选择职位', trigger: 'blur' }
    ],
    attrs: {
      style: { width: '100%' }
    },
    children: [
      {
        type: 'option',
        value: '1',
        label: '经理'
      },
      {
        type: 'option',
        value: '2',
        label: '主管'
      },
      {
        type: 'option',
        value: '3',
        label: '前台'
      }
    ]
  },
  // checkbox-grou
  {
    type: 'checkbox-group',
    value: [1],
    label: '爱好',
    prop: 'habit',
    rules: [
      { required: true, message: '爱好不能为空', trigger: 'blur' }
    ],
    children: [
      {
        type: 'checkbox',
        value: '1',
        label: '足球'
      },
      {
        type: 'checkbox',
        value: '2',
        label: '篮球'
      },
      {
        type: 'checkbox',
        value: '3',
        label: '排球'
      }
    ]
  },
  // radio-grou
  {
    type: 'radio-group',
    value: '0',
    label: '性别',
    prop: 'gender',
    rules: [
      { required: true, message: '性别不能为空', trigger: 'blur' }
    ],
    children: [
      {
        type: 'radio',
        value: '0',
        label: '男'
      },
      {
        type: 'radio',
        value: '1',
        label: '女'
      },
      {
        type: 'radio',
        value: '2',
        label: '保密'
      }
    ]
  },
  // upload
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      headers: { headers: 'Access-Control-Allow-Origin' },
      multiple: true,
      limit: 3
    },
    rules: [
      // { required: true, message: '图片不能为空', trigger: 'blur' }
    ]
  },
  // editor
  {
    type: 'editor',
    value: '',
    prop: 'desc'
  }
]

interface Scope {
  form: FormInstance,
  model: any
}

// form表单的操作项
const submitForm = (scope: Scope) => {
  scope.form.validate(valid => {
    if (valid) {
      console.log(scope.model)

      ElMessage.success('提交成功')
    } else {
      ElMessage.error('表单填写有误,请重新填写')
    }
  })
}
const resetForm = (scope: Scope) => {
  scope.form.resetFields()
}

// 上传组件的方法
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}
const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfert of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
const handleOnSuccess = (val: any) => {
  console.log('success', val)
}

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
</script>

<style scoped>

</style>
