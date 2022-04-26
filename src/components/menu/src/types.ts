export interface MenuItem {
  icon?: string,
  // TSX中处理过后的图标
  i?: any,
  name?: string,
  index?: string,
  children: MenuItem[]
}
