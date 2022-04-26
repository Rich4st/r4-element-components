// 可配置的表单

import { Callback, UploadUserFile } from 'element-plus'
import { CSSProperties } from 'vue'
import { RuleItem, ValidateFieldsError } from './rule'

// 表单配置选项
export interface FormOptions {
  // 表单项显示的元素
  type: 'cascader' | 'checkbox' | 'checkbox-group' | 'checkbox-button' | 'color-picker' |
  'date-picker' | 'input' | 'input-number' | 'radio' | 'radio-group' | 'radio-button' | 'rate' |
  'select' | 'option' | 'slider' | 'switch' | 'time-picker' | 'time-select' |
  'transfer' | 'upload' | 'editor',
  // 表单项的值
  value?: any,
  // 表单项label
  label?: string,
  // 表单项的标识
  prop?: string,
  // 表单项的验证规则
  rules?: RuleItem[],
  // 表单项的占位符
  placeholder?: string,
  // 表单元素特有的属性
  attrs?: {
    // 清空按钮
    clearable?: boolean,
    // 显示密码的眼睛按钮
    showPassword?: boolean,
    // 是否禁用
    disabled?: boolean,
    // css样式
    style?: CSSProperties
  }
  // 表单项的子元素
  children?: FormOptions[],
  // 上传组件的属性
  uploadAttrs?: {
    // 请求 URL
    action: string,
    // 设置上传的请求头部
    headers?: Headers | Record<string, any>,
    // 设置上传请求方法
    method?: string,
    // 是否支持多选文件
    multiple?: boolean,
    // 上传时附带的额外参数
    data?: Record<string, any>,
    // 上传的文件字段名
    name?: string,
    // 支持发送 cookie 凭证信息
    withCredentials?: boolean,
    // 是否显示已上传文件列表
    showFileList?: boolean,
    // 是否启用拖拽上传
    drag?: boolean,
    // 接受上传的文件类型（thumbnail-mode 模式下此参数无效）
    accept?: string,
    // 默认上传文件
    fileList?: UploadUserFile[],
    // 文件列表的类型
    listType?: 'text' | 'picture' | 'picture-card',
    // 是否自动上传文件
    autoUpload?: boolean,
    // 是否禁用上传
    disabled?: boolean,
    // 允许上传文件的最大数量
    limit?: number
  }
}

export interface ValidateFieldCallback {
  (message?: string, invalidFields?: ValidateFieldsError): void,
}

export interface FormInstance {
  registerLabelWidth(width: number, oldWidth: number): void,
  deregisterLabelWidth(width: number): void,
  autoLabelWidth: string | undefined,
  emit: (evt: string, ...args: any[]) => void,
  labelSuffix: string,
  inline?: boolean,
  model?: Record<string, unknown>,
  size?: string,
  showMessage?: boolean,
  labelPosition?: string,
  labelWidth?: string,
  rules?: Record<string, unknown>,
  statusIcon?: boolean,
  hideRequiredAsterisk?: boolean,
  disabled?: boolean,
  validate: (callback?: Callback) => Promise<boolean>,
  resetFields: () => void,
  clearValidate: (props?: string | string[]) => void,
  validateField: (props: string | string[], cb: ValidateFieldCallback) => void,
}
