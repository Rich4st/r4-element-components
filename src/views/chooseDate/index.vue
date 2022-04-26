<template>
  <div>
    <m-choose-date
      :start-placeholder="dateOptions.startPlaceHolder"
      :end-placeholder="dateOptions.endPlaceHolder"
      :default-time="dateOptions.defaultTime"
    />
  </div>
</template>

<script setup lang="ts">
interface DatePickOptions {
  startPlaceHolder: string,
  endPlaceHolder: string,
  defaultTime: Date | Date[],
}

const defaultTime = [
  new Date(2000, 1, 1, 12, 0, 0),
  new Date(2000, 2, 1, 8, 0, 0)
] // '12:00:00', '08:00:00'
const dateOptions: DatePickOptions = {
  startPlaceHolder: '请选择开始时间',
  endPlaceHolder: '请选择结束时间',
  defaultTime
}
</script>

<style scoped>

::v-deep(.el-icon) {
  width: 2em;
  height: 2em;
}
</style>
