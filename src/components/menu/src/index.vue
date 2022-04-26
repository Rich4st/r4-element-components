<template>
  <el-aside
    width="auto"
  >
    <el-menu
      class="el-menu-vertical-demo"
      :mode="mode"
      :background-color="backgroundColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      :router="router"
      :collapse="collapse"
      :default-active="defaultActive"
    >
      <template
        v-for="(item, index) in data"
        :key="index"
      >
        <el-sub-menu
          v-if="item.children && item.children.length"
          :index="item.index"
        >
          <template #title>
            <component
              v-if="item.icon"
              :is="`el-icon-${toLine(item.icon)}`"
            />
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="(item1, index1) in item.children"
            :key="index1"
          >
            <component
              v-if="item1.icon"
              :is="`el-icon-${toLine(item1.icon)}`"
            />
            <span>{{ item1.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item
          v-if="!item.children || !item.children.length"
          :index="item.index"
        >
          <component
            v-if="item.icon"
            :is="`el-icon-${ toLine(item.icon) }`"
          />
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { toLine } from '../../../utils'
import { PropType } from 'vue'
import { MenuItem } from './types'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // 导航菜单数据
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true
  },
  // 菜单栏模式：水平：horizontal || 垂直：vertical
  mode: {
    type: String,
    default: 'vertical'
  },
  // 背景色
  backgroundColor: {
    type: String,
    default: '#fff'
  },
  // 导航菜单文字颜色
  textColor: {
    type: String,
    default: '#303133'
  },
  // 激活菜单栏文字的颜色
  activeTextColor: {
    type: String,
    default: '#409EFF'
  },
  // 是否开启路由模式
  router: {
    type: Boolean,
    default: false
  },
  // 是否可以折叠
  collapse: {
    type: Boolean,
    default: false
  },
  // 默认激活的菜单
  defaultActive: {
    type: String,
    default: '/home'
  }
})

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

svg{
  width: 1em;
  height: 1em;
}
</style>
