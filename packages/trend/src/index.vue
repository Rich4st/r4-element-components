<template>
  <div class="trend">
    <div class="text">
      <div
        :style="{ color: textColor }"
        v-if="slots.default"
      >
        <slot />
      </div>
      <div
        v-else
        :style="{ color: textColor }"
      >
        {{ text }}
      </div>
    </div>
    <div class="icon">
      <component
        v-if="type === 'up'"
        :style="{ color: reverseColor ? downIconColor : upIconColor }"
        :is="`el-icon-${upIcon}`"
      />
      <component
        v-else
        :style="{ color: reverseColor ? upIconColor : downIconColor }"
        :is="`el-icon-${downIcon}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots, computed } from 'vue'

const slots = useSlots()
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // 上升和下降趋势的图标
  upIcon: {
    type: String,
    default: 'arrowup'
  },
  downIcon: {
    type: String,
    default: 'arrowdown'
  },
  // 标记趋势图是上升（up）还是下降（down）
  type: {
    type: String,
    default: 'up'
  },
  // 趋势显示文字: 1. 父组件传递。2. 插槽
  text: {
    type: String,
    default: '文字'
  },
  // 上升和下降趋势的图标颜色
  upIconColor: {
    type: String,
    default: 'red'
  },
  downIconColor: {
    type: String,
    default: 'green'
  },
  // 上升和下降趋势的文字颜色
  upTextColor: {
    type: String,
    default: '#000'
  },
  downTextColor: {
    type: String,
    default: '#000'
  },
  // 颜色是否反转
  reverseColor: {
    type: Boolean,
    default: false
  }
})

const textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
