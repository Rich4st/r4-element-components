<template>
  <div>
    <el-select
      placeholder="请选择省份"
      v-model="province"
      clearable
    >
      <el-option
        v-for="item in areas"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      />
    </el-select>
    <el-select
      placeholder="请选择城市"
      style="margin: 0 10px;"
      v-model="city"
      :disabled="!province"
      clearable
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      />
    </el-select>
    <el-select
      placeholder="请选择区域"
      v-model="area"
      :disabled="!city"
      style="margin-right: 10px;"
      clearable
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      />
    </el-select>
    <el-select
      placeholder="请选择乡镇、街道"
      v-model="street"
      :disabled="!area || !selectStreet"
      clearable
    >
      <el-option
        v-for="item in selectStreet"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import allAreas from '../lib/pcas-code.json'

/* 类型定义 */
export interface AreaItem {
  name: string,
  code: string,
  children?: AreaItem[]
}
export interface Data {
  code: string,
  name: string
}

const areas = ref(allAreas)

/* 省市区镇的值 */
const province = ref<string>('')
const city = ref<string>('')
const area = ref<string>('')
const street = ref<string>('')
/* /省市区的值 */

/* 通过选择的省份计算出市的值 */
const selectCity = ref<AreaItem[]>()
/* /通过选择的省份计算出市的值 */

/* 通过选择的市计算出区的值 */
const selectArea = ref<AreaItem[]>()
/* /通过选择的市计算出区的值 */

/* 通过选择的区计算出乡镇的值 */
const selectStreet = ref<AreaItem[]>()
/* /通过选择的区计算出乡镇的值 */

/* 监听省份、城市和乡镇的变化 */
watch(() => province.value, () => {
  const cities = areas.value.find(item => item.code === province.value)?.children
  selectCity.value = cities
  city.value = ''
  area.value = ''
  street.value = ''
})
watch(() => city.value, () => {
  // const areaVal = selectCity.value.find((item => item.code === city.value)!.children
  // selectArea.value = areaVal
  // area.value = ''
  // street.value = ''
  const areaVal = selectCity.value?.find(item => item.code === city.value)?.children
  selectArea.value = areaVal
  area.value = ''
  street.value = ''
})
watch(() => area.value, () => {
  const streetVal = selectArea.value?.find(item => item.code === area.value)?.children
  selectStreet.value = streetVal

  street.value = ''
})
/* /监听省份、城市和乡镇的变化 */

const emits = defineEmits(['update'])
/* 给父组件分发事件 */
watch(() => street.value, val => {
  if (val) {
    const provinceData: Data = {
      code: province.value,
      name: province.value && allAreas.find(item => item.code === province.value)!.name
    }
    const cityData: Data = {
      code: city.value,
      name: city.value && selectCity.value!.find(item => item.code === city.value)!.name
    }
    const areData: Data = {
      code: area.value,
      name: area.value && selectArea.value!.find(item => item.code === area.value)!.name
    }
    const streetData: Data = {
      code: val,
      name: val && selectStreet.value!.find(item => item.code === val)!.name
    }
    emits('update', {
      province: provinceData,
      city: cityData,
      area: areData,
      street: streetData
    })
  }
})
/* /给父组件分发事件 */
</script>

<style lang="scss" scoped>
@import './chooseArea.scss'
</style>
