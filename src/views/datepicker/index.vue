<template>
  <div>
    <el-divider content-position="left">
      选择时间
    </el-divider>
    <m-date-picker
      @update-start-time="getStartTime"
      @update-end-time="getEndTime"
      size="default"
      :clearable="false"
    />
    <el-divider content-position="left">
      选择日期
    </el-divider>
  </div>
</template>

<script setup lang="ts">

type Time = {
  startTime: string,
  endTime: string
}

const getStartTime = (val:string) => {
  console.log('开始时间：', val)
}
const getEndTime = (val: Time) => {
  console.log(val)
}
</script>

<style lang="scss" scoped>
</style>
