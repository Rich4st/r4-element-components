
/* 将驼峰命名转换成横杠连接的 */
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/,'-$1').toLocaleLowerCase()
}