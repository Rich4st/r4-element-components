<template>
  <el-popover
    placement="bottom"
    :width="300"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #default>
      <slot />
    </template>
    <template #reference>
      <el-badge
        :value="value"
        :max="max"
        :is-dot="isDot"
        style="cursor: pointer;"
      >
        <component
          :is="`el-icon-${ toLine(icon) }`"
        />
      </el-badge>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { toLine } from '../../utils'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // 显示的图标
  icon: {
    type: String,
    default: 'Bell'
  },
  // 通知的数量
  value: {
    type: [String, Number],
    default: ''
  },
  // 通知最大值
  max: {
    type: Number,
    default: 30
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
