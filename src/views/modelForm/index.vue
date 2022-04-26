<template>
  <div>
    <el-button type="primary" @click="onOpenDialog">
      open
    </el-button>
    <m-model-form v-model:visible="visible" title="编辑用户" :options="options">
      <template #footer="{ form }">
        <span class="dialog-footer">
          <el-button @click="onCancel(form)">Cancel</el-button>
          <el-button type="primary" @click="onConfirm(form)">Confirm</el-button>
        </span>
      </template>
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
    </m-model-form>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, FormInstance } from 'element-plus'
import { ref } from 'vue'
import { FormOptions } from '../../components/form/src/types/types'

const options: FormOptions[] = [
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

const visible = ref<boolean>()
const onOpenDialog = () => {
  visible.value = true
}

// 点击取消
const onCancel = (form: FormInstance) => {
  visible.value = false
}
// 点击确认
const onConfirm = (form: any) => {
  const validate = form.validate()
  const model = form.getFormData()
  console.log(model)

  validate((valid: any) => {
    if (valid) {
      ElMessage.success('验证成功')
    } else {
      ElMessage.error('验证失败')
    }
  })
}
</script>

<style scoped>
</style>
