<template>
  <div
    class="time-picker-wrap"
    style="display: flex;"
  >
    <div
      class="star-time-wrap"
      style="margin-right: 20px ;"
    >
      <el-time-select
        v-model="startTime"
        :max-time="endTime"
        class="mr-4"
        :placeholder="startPlaceholder"
        :start="stimeStart"
        :step="step"
        :end="stimeEnd"
        v-bind="$attrs"
      />
    </div>
    <div class="end-time-wrap">
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="etimeStart"
        :step="step"
        :end="etimeEnd"
        :disabled="disabledEnd"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// const attrs = useAttrs()

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // 开始时间的占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  // 开始时间
  stimeStart: {
    type: String,
    default: '08:00'
  },
  // 步长
  step: {
    type: String,
    default: '00:30'
  },
  // 结束时间
  stimeEnd: {
    type: String,
    default: '24:00'
  },
  // 结束时间的占位符
  endPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  // 开始时间
  etimeStart: {
    type: String,
    default: '08:00'
  },
  // 结束时间
  etimeEnd: {
    type: String,
    default: '24:00'
  }
})

/* 开始和结束时间 */
const startTime = ref<string>('')
const endTime = ref<string>('')
const disabledEnd = ref <boolean>(true) // 控制结束时间选择的禁用状态
const emits = defineEmits(['updateStartTime', 'updateEndTime'])
/* 监听开始时间 */
watch(() => startTime.value, val => {
  if (val) {
    disabledEnd.value = false
    emits('updateStartTime', val)
  } else {
    endTime.value = ''
    disabledEnd.value = true
  }
})
/* /监听开始时间 */
/* 监听结束时间 */
watch(() => endTime.value, val => {
  emits('updateEndTime', {
    startTime: startTime.value,
    endTime: val
  })
})
/* /监听结束时间 */
</script>

<script lang="ts">
export default {
  inheritAttrs: true
}
</script>

<style lang="scss" scoped>
:deep .el-icon {
  width: 2em;
  height: 2em;
}
</style>
