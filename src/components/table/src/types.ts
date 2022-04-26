// 表格的类型

export interface TableOptions {
  // 表头
  label: string,
  // 字段名称
  prop?: string,
  // 列宽度
  width?: string | number,
  // 对齐方式
  align?: 'left' | 'center' | 'right',
  // 自定义模板
  slot?: string,
  // 是否固定
  fixed?: boolean,
  // 是否为操作项
  action?: boolean,
  // 是否可以编辑
  editable?: boolean
}
