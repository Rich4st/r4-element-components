<template>
  <div>
    <m-table
      :data="tableData" :options="options" element-loading-text="加载中"
      :element-loading-spinner="svg" @confirm-edit="getEditData" @cancel-edit="onCanelEdit"
      is-edit-row v-model:edit-row-index="editRowIndex" is-pagination
      :total="total" :current-page="current" @update:current-page="getCurrentPage"
      pagination-align="left" :page-size="pageSize" @update:page-size="getPageSize"
      stripe border show-header
      highlight-current-row
    >
      <template #date="{ scope }">
        <el-icon-calendar color="skyblue" />
        <span>{{ scope.row.date }}</span>
      </template>
      <template #name="{ scope }">
        <el-popover
          effect="light" trigger="hover" placement="top"
          width="auto"
        >
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
          <template #default>
            <span>{{ scope.row.address }}</span>
          </template>
        </el-popover>
      </template>
      <template #action="{scope}">
        <el-button type="primary" @click="onEdit(scope)">
          编辑
        </el-button>
        <el-button type="danger" @click="onDelete(scope)">
          删除
        </el-button>
      </template>
      <template #editRow="{scope}">
        <el-button type="primary" @click="onEdit(scope)">
          确认
        </el-button>
        <el-button type="danger" @click="onCanel(scope)">
          取消
        </el-button>
      </template>
    </m-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TableOptions } from '../../components/table/src/types'
import axios from 'axios'

// 表格配置
const options:TableOptions[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center',
    slot: 'date',
    editable: true
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center',
    slot: 'name',
    editable: true
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center'
  },
  {
    label: '操作',
    align: 'center',
    action: true,
    fixed: true
  }
]

interface TableData {
  date: string,
  name: string,
  address: string
}

const tableData = ref<TableData[]>([])
// 模拟数据的加载状态
// setTimeout(() => {
//   tableData.value = [
//     {
//       date: '2016-05-03',
//       name: 'Tom',
//       state: 'California',
//       city: 'Los Angeles',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '2016-05-02',
//       name: 'Tom',
//       state: 'California',
//       city: 'Los Angeles',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '2016-05-04',
//       name: 'Tom',
//       state: 'California',
//       city: 'Los Angeles',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '2016-05-01',
//       name: 'Tom',
//       state: 'California',
//       city: 'Los Angeles',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '2016-05-08',
//       name: 'Tom',
//       state: 'California',
//       city: 'Los Angeles',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '2016-05-06',
//       name: 'Tom',
//       state: 'California',
//       city: 'Los Angeles',
//       address: 'No. 189, Grove St, Los Angeles'
//     },
//     {
//       date: '2016-05-07',
//       name: 'Tom',
//       state: 'California',
//       city: 'Los Angeles',
//       address: 'No. 189, Grove St, Los Angeles'
//     }
//   ]
// }, 100)

/* 编辑和删除方法 */
const onEdit = (scope: any) => {
  editRowIndex.value = 'edit'
}

const onDelete = (scope: any) => {

}
/* /编辑和删除方法 */

/* 加载图标 */
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `

/* 编辑表格 */
const getEditData = (scope: any) => {
  console.log(scope)
}
const onCanelEdit = (scope: any) => {
  console.log(scope, 'cancel')
}
/* /编辑表格 */

/* 编辑行 */
const editRowIndex = ref<string>('')
const onCanel = (scope: any) => {
  editRowIndex.value = 'edit'
}
/* /编辑行 */

/* 加载mock数据 */
const current = ref<number>(1)
const pageSize = ref <number>(10)
const total = ref<number>(0)

const getDataList = () => {
  axios.post('/api/list',
    { current: current.value, pageSize: pageSize.value }).then((res: any) => {
    console.log(res.data)

    tableData.value = res.data.data.rows
    total.value = res.data.data.total
  })
}
onMounted(() => {
  getDataList()
})
/* /加载mock数据 */

const getCurrentPage = (val: number) => {
  current.value = val
  getDataList()
}
const getPageSize = (val: number) => {
  pageSize.value = val
  getDataList()
}
</script>

<style lang="scss" scoped>

</style>
