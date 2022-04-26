<template>
  <div>
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <template #default>
        <div>
          <m-form ref="form" :options="options">
            <template #uploadTip>
              <slot name="uploadTip" />
            </template>
            <template #uploadArea>
              <slot name="uploadArea" />
            </template>
          </m-form>
        </div>
      </template>
      <template #footer>
        <slot name="footer" :form="form" />
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { FormInstance } from 'element-plus'
import { ref, watch, PropType } from 'vue'
import { FormOptions } from '../../form/src/types/types'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})

// 表单实例
const form = ref<FormInstance | null>()

const dialogVisible = ref<boolean>(props.visible)

const emits = defineEmits(['update:visible'])
watch(() => props.visible, val => {
  dialogVisible.value = val
})
watch(() => dialogVisible.value, (val) => {
  emits('update:visible', val)
})
</script>

<style lang="scss" scoped>
:deep(.el-icon) {
  width: 2em;
  height: 2em;
}
</style>
