<template>
  <el-popover
    placement="bottom-start"
    :width="400"
    trigger="click"
    v-model:visible="visible"
  >
    <template #reference>
      <div
        class="city-wrap"
        @click="visible = !visible"
      >
        <div>
          {{ city }}
        </div>
        <div class="icon">
          <el-icon-arrowdown :class="{ 'rotate': visible }" />
        </div>
      </div>
    </template>
    <div class="content">
      <el-row>
        <el-col :span="8">
          <el-radio-group
            v-model="radioVal"
            size="default"
          >
            <el-radio-button label="城市" />
            <el-radio-button label="省份" />
          </el-radio-group>
        </el-col>
        <el-col
          :offset="2"
          :span="14"
        >
          <el-select
            v-model="selectVal" placeholder="请选择城市" filterable
            :filter-method="filterMethod" clearable @change="onSelectChange"
          >
            <el-option
              v-for="item in cities"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            >
              <span style="float: left">{{ item.name }}</span>
              <span
                style="float: right;color: var(--el-text-color-secondary);font-size: 13px;"
              >{{ item.spell }}</span>
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <!-- 按城市选择 -->
      <div
        class="city" v-if="radioVal === '城市'"
      >
        <div
          class="city-item"
          v-for="(value, key) in citys"
          :key="key" @click="onLetterClick(key)"
        >
          <div>
            {{ key }}
          </div>
        </div>
        <el-scrollbar max-height="200px">
          <template
            v-for="(value, key) in citys"
            :key="key"
          >
            <el-row
              style="margin: 10px 0;" :id="key"
            >
              <el-col :span="2">
                <div>
                  {{ key }}:
                </div>
              </el-col>
              <el-col
                :span="22"
                class="city-name"
              >
                <div
                  class="city-name-item"
                  v-for="(item, index) in value"
                  :key="index"
                  @click="getCity(item)"
                >
                  <div>{{ item.name }}</div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </div>
      <!-- 按省份选择 -->
      <div class="province" v-else>
        <div
          class="province-item" v-for="(value, key) in provinces" :key="key"
          @click="onLetterClick(key)"
        >
          <div>
            {{ key }}
          </div>
        </div>
        <el-scrollbar max-height="200px">
          <template
            v-for="(item, index) in Object.values(provinces)"
            :key="index"
          >
            <template v-for="(item1, index1) in item" :key="index1">
              <el-row
                style="margin: 10px 0;" :id="item1.id"
              >
                <el-col :span="3">
                  <div>
                    {{ item1.name }}:
                  </div>
                </el-col>
                <el-col
                  :span="21"
                  class="province-name"
                >
                  <div
                    class="province-name-item"
                    v-for="(item2, index2) in item1.data"
                    :key="index2"
                    @click="getCityFromProvince(item2)"
                  >
                    <div>{{ item2 }}</div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </div>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import c from '../lib/city'
import { CityType } from './types'
import p from '../lib/province.json'

const city = ref<string>('请选择')
const visible = ref<boolean>(false) // 控制popover是否可见
const radioVal = ref<string>('城市') // 按城市和按省份
const citys = ref(c.cities) // 所有城市的数据
const provinces = ref(p) // 所有省份数据

/* 下拉选择城市 */
const selectVal = ref('')
const cities = ref<CityType[]>([])
/* /下拉选择城市 */

const emits = defineEmits(['update-city'])
/* 点击获取城市名字 */
const getCity = (item: CityType) => {
  city.value = item.name
  visible.value = false
  emits('update-city', item)
}
const getCityFromProvince = (item: string) => {
  city.value = item
  visible.value = false
  emits('update-city', item)
}
/* /点击获取城市名字 */

/* 点击字母跳转到对应的城市 */
const onLetterClick = (item:string) => {
  const el = document.getElementById(item)
  el?.scrollIntoView()
}
/* /点击字母跳转到对应的城市 */

/* 下拉选择框数据 */
onMounted(() => {
  const values = Object.values(citys.value).flat(2)
  cities.value = values
})
/* /下拉选择框数据 */

/* 下拉选择框change事件 */
const onSelectChange = (val:string) => {
  city.value = val
  visible.value = false
}
/* /下拉选择框change事件 */

/* 自定义过滤搜索方法 */
const filterMethod = (val: string) => {
  const values = Object.values(citys.value).flat(2)
  if (val === '') {
    cities.value = values
  } else {
    cities.value = values.filter(item => {
      return item.name.includes(val) || item.spell.includes(val)
    })
  }
}
/* /自定义过滤搜索方法 */

</script>
<style lang="scss" scoped>
@import './index.scss'
</style>
