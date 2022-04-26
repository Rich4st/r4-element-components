<template>
  <div>
    <el-table
      v-loading="isLoading" :data="tableData" :element-loading-text="elementLoadingText"
      v-bind="$attrs"
      :element-loading-spinner="elementLoadingSpinner" :element-loading-background="elementLoadingBackground"
      :element-loading-svg="elementLoadingSvg" element-loading-svg-view-box="-10, -10, 50, 50" @row-click="onRowClick"
    >
      <template v-for="(item, index) in options" :key="index">
        <el-table-column :label="item.label" :prop="item.prop" :align="item.align">
          <template #default="scope">
            <template v-if="scope.row.rowEdit && !item.action">
              <el-input v-model="scope.row[item.prop!]" />
            </template>
            <template v-else>
              <template v-if="scope.$index + scope.column.id === currentEditVal">
                <div style="display: flex;">
                  <el-input v-model="scope.row[item.prop!]" />
                  <div class="icons">
                    <el-icon-check class="check" @click.stop="onConfirmEdit(scope)" />
                    <el-icon-close class="close" @click.stop="onCancelEdit(scope)" />
                  </div>
                </div>
              </template>
              <template v-else>
                <slot v-if="item.action && !scope.row.rowEdit" name="action" :scope="scope" />
                <slot v-else-if="item.slot" :name="item.slot" :scope="scope" />
                <span v-else>{{ scope.row[item.prop!] }}</span>
                <slot v-if="item.action && scope.row.rowEdit" name="editRow" />
                <component
                  :is="`el-icon-${toLine(editIcon)}`" v-if="item.editable" class="edit"
                  @click.stop="onEditClick(scope)"
                />
              </template>
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页组件 -->
    <div class="pagination" :style="{justifyContent: paginationAlign}" v-if="isPagination">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="pageSizes"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <!-- /分页组件 -->
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, ref, onMounted, watch } from 'vue'
import { TableOptions } from './types'
import { toLine } from '../../../utils'
import { cloneDeep } from 'lodash'

const emits = defineEmits(['confirm-edit', 'cancel-edit', 'update:edit-row-index', 'update:current-page', 'update:page-size'])
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // 表格配置项
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  // 图标下方的加载文案
  elementLoadingText: {
    type: String,
    default: 'Loading...'
  },
  // 自定义加载图标
  // eslint-disable-next-line vue/require-default-prop
  elementLoadingSpinner: {
    type: String
  },
  // svg加载图标 跟 elementLoadingSpinner 一样的效果，取其一即可
  // eslint-disable-next-line vue/require-default-prop
  elementLoadingSvg: {
    type: String
  },
  // 背景遮罩的颜色
  // eslint-disable-next-line vue/require-default-prop
  elementLoadingBackground: {
    type: String
  },
  // 编辑单元格的图标
  editIcon: {
    type: String,
    default: 'edit'
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false
  },
  // 编辑行的标识
  editRowIndex: {
    type: String,
    default: ''
  },
  // 是否显示分页
  isPagination: {
    type: Boolean,
    default: false
  },
  // 当前页数
  currentPage: {
    type: Number,
    default: 1
  },
  // 每页多少条数据
  pageSize: {
    type: Number,
    default: 10
  },
  // 每页数据条数的设置项
  pageSizes: {
    type: Array as PropType<number[]>,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: [10, 20, 50, 100]
  },
  // 数据总条数
  // eslint-disable-next-line vue/require-default-prop
  total: {
    type: Number
  },
  // 是否使用小型分页样式
  small: {
    type: Boolean,
    default: false
  },
  // 是否为分页按钮添加背景色
  background: {
    type: Boolean,
    default: false
  },
  // 是否禁用分页
  disabled: {
    type: Boolean,
    default: false
  },
  // 分页组件的布局
  paginationAlign: {
    type: String as PropType<'flex-start' | 'center' | 'flex-end'>,
    default: 'flex-start'
  }

})

const isLoading = computed(() => !props.data || !props.data.length) // 表格数据的加载状态

/* 点击编辑图标 */
const currentEditVal = ref<string>('') // 控制每次只有一个单元格处于编辑状态
const onEditClick = (scope: any) => {
  currentEditVal.value = scope.$index + scope.column.id
}
/* /点击编辑图标 */

/* 确认和取消编辑 */
const onConfirmEdit = (scope: any) => {
  currentEditVal.value = ''
  emits('confirm-edit', scope)
}
const onCancelEdit = (scope: any) => {
  currentEditVal.value = ''
  emits('cancel-edit', scope)
}
/* /确认和取消编辑 */

/* 编辑行 */
const tableData = ref<any[]>(cloneDeep(props.data)) // 拷贝一份表格数据
const cloneEditRowIndex = ref<string>(props.editRowIndex)

const onRowClick = (row:any, column: any) => {
  // 判断当前点击的是否是操作项目
  if (column.label === '操作') {
    // 判断当前点击的是否是编辑按钮
    if (props.isEditRow && props.editRowIndex === cloneEditRowIndex.value && props.editRowIndex) {
      // 点击的按钮是做可编辑的操作
      row.rowEdit = !row.rowEdit
      // 重置其他数据的isEditRow
      // eslint-disable-next-line array-callback-return
      tableData.value.map(item => {
        if (item !== row) item.rowEdit = false
      })
      // 重置按钮的标识
      emits('update:edit-row-index', '')
    }
  }
}

watch(() => props.data, val => {
  tableData.value = cloneDeep(val)
  // eslint-disable-next-line array-callback-return
  tableData.value.map(item => {
    item.rowEdit = false
  })
}, { deep: true })

watch(() => props.editRowIndex, val => {
  if (val) cloneEditRowIndex.value = val
})

onMounted(() => {
  // eslint-disable-next-line array-callback-return
  tableData.value.map(item => {
    // 代表当前是否是可编辑的状态
    item.rowEdit = false
  })
})
/* /编辑行 */

/* 分页组件 */
const currentPage = ref<number>(props.currentPage)
const pageSize = ref <number>(props.pageSize)

const handleSizeChange = (val: number) => {
  emits('update:page-size', val)
}
const handleCurrentChange = (val: number) => {
  emits('update:current-page', val)
}
/* /分页组件 */

</script>

<style lang="scss" scoped>
:deep svg {
  width: 1em;
  height: 1em;
}
.edit {
  margin-left: 8px;
  transform: translateY(10%);
  cursor: pointer;
}
.icons {
  display: flex;
  position: relative;
  left: 8px;
  top: 8px;
  cursor: pointer;
  .check{
    color: green;
  }
  .close{
    color: red
  }
}
.pagination {
  display: flex;
  margin-top: 10px;
}

</style>
