<template>
  <el-button
    type="primary"
    @click="onChooseClick"
  >
    <slot />
  </el-button>
  <el-dialog
    :title="title"
    v-model="dialogVisible"
  >
    <div class="icons-container">
      <div
        class="item"
        v-for="(item,index) in Object.keys(ElIcons)"
        :key="index"
        @click="onItemClick(item)"
      >
        <div>
          <component
            class="icon"
            :is="`el-icon-${toLine(item)}`"
          />
        </div>
        <div> {{ item }} </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import * as ElIcons from '@element-plus/icons'
import { watch, ref } from 'vue'
import { toLine } from '../../utils'
import { useCopy } from '../../hooks/useCopy'
// eslint-disable-next-line no-unused-vars
const props = defineProps<{
  // 弹出框标题
  title: string,
  // 控制弹出框的显示状态
  visible: boolean
}>()

const dialogVisible = ref<boolean>(props.visible)

const emits = defineEmits(['update:visible'])
// 点击按钮显示dialog
const onChooseClick = () => {
  emits('update:visible', !props.visible)
}
// 点击图标，实现复制
const onItemClick = (text: string) => {
  useCopy(`<el-icon-${toLine(text)} />`)
  dialogVisible.value = false
}

// 监听visible的变化
watch(() => props.visible, val => {
  dialogVisible.value = val
})
// 监听组件内部的dialogVisible变化
watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>
@import './chooseIcon.scss';
:deep .el-icon {
  width: 2em;
  height: 2em;
}
</style>
