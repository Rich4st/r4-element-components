<template>
  <div>
    <el-progress
      :percentage="per"
      :indeterminate="isAnimation"
      :duration="duration"
      :color="color"
      :stroke-width="strokeWidth"
      :show-text="showText"
      :text-inside="textInside"
      :type="type"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // 进度条百分比
  percentage: {
    type: Number,
    default: 0,
    required: true
  },
  // 进度条类型：line/circle/dashboard
  type: {
    type: String,
    default: 'line'
  },
  // 是否为动画进度条
  isAnimation: {
    type: Boolean,
    default: false
  },
  // 控制动画进度条速度
  duration: {
    type: Number,
    default: 3
  },
  // 进度条背景色 string/function/array
  color: {
    type: String,
    default: ''
  },
  // 进度条内显示文字
  showText: {
    type: Boolean,
    default: true
  },
  // 进度条文字
  textInside: {
    type: Boolean,
    default: false
  },
  // 进度条的宽度
  strokeWidth: {
    type: Number,
    default: 6
  }
})

const per = ref<number>(0)
onMounted(() => {
  if (props.isAnimation) {
    // 规定时间内加载完成
    const t = Math.ceil((props.duration * 1000) / props.percentage)
    console.log(t)

    const timer = setInterval(() => {
      per.value++
      if (per.value >= props.percentage) {
        per.value = props.percentage
        clearInterval(timer)
      }
    }, t)
  } else {
    per.value = props.percentage
  }
})
</script>

<style lang="scss" scoped>
svg{
  width: 126px !important;
  height: 126px !important;
}
</style>
