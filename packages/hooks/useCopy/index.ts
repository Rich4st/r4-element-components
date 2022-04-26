
import { ElMessage } from 'element-plus'
/* 复制文本hooks */
export const useCopy = (text: string) => {
  // 创建input
  const input = document.createElement('input')
  input.value = text
  // 要把input追加到body里面才能实现复制功能
  document.body.appendChild(input)
  input.select()
  // 复制文本
  navigator.clipboard.writeText(input.value).then(() => {
    ElMessage.success('复制成功')
    // 移除加入的input
    document.body.removeChild(input)
  }, () => {
    ElMessage.error('复制失败')
  })
}
