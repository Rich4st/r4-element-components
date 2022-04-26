// 列表每一项的类型
export interface ListItem {
  // 头像
  avatar?: string,
  // 标题
  title?: string,
  // 描述
  desc?: string,
  // 时间
  time?: string,
  // 标签内容
  tag?: string,
  // 标签类型
  tagType?: '' | 'success' | 'info' | 'warning' | 'danger'
}

// 列表
export interface ListOptions {
  title: string,
  // 内容
  content: ListItem[]
}

// 操作选项
export interface ActionOptions {
  text: string,
  icon?: string
}
