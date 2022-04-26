<template>
  <div>
    <ChooseAreaVue @update="onGetLocation" />
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const onGetLocation = (location: any) => {
  const province = location.province.name
  const city = location.city.name
  const area = location.area.name
  const street = location.street.name
  const loc = `${province}-${city}-${area}-${street}`
  ElMessage.success(loc)
}
</script>

<style lang="scss" scoped>

</style>
