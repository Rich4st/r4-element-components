<template>
  <el-aside width="auto">
    <!-- <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo .el-menu--collapse"
      default-active="2"
      text-color="#fff"
      :collapse="main.isCollapse"
      router
    >
      <el-menu-item index="/home">
        <el-icon-homefilled />
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/chooseIcon">
        <el-icon-filter />
        <span>图标选择器</span>
      </el-menu-item>
      <el-menu-item index="/chooseArea">
        <el-icon-location />
        <span>省市区选择器</span>
      </el-menu-item>
      <el-menu-item index="/trend">
        <el-icon-sort />
        <span>趋势图</span>
      </el-menu-item>
      <el-menu-item index="/notification">
        <el-icon-bell />
        <span>通知菜单</span>
      </el-menu-item>
      <el-menu-item index="/menu">
        <el-icon-menu />
        <span>导航菜单</span>
      </el-menu-item>
    </el-menu> -->
    <el-scrollbar height="100vh">
      <m-menu
        :data="data"
        :collapse="main.isCollapse"
        background-color="#545C64"
        text-color="#fff"
        :router="true"
        default-active="/home"
      />
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import { useMainStore } from '../../store/index'
const main = useMainStore()

const data = [
  {
    icon: 'HomeFilled',
    name: '首页',
    index: '/home'
  },
  {
    icon: 'filter',
    name: '图标选择器',
    index: '/chooseIcon'
  },
  {
    icon: 'location',
    name: '省市区选择器',
    index: '/chooseArea'
  },
  {
    icon: 'sort',
    name: '趋势图',
    index: '/trend'
  },
  {
    icon: 'bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'menu',
    name: '导航菜单',
    index: '/menu'
  },
  {
    icon: 'Operation',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'Clock',
    name: '时间选择',
    index: '/datePicker'
  },
  {
    icon: 'Calendar',
    name: '日期选择',
    index: '/chooseDate'
  },
  {
    icon: 'SetUp',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'Document',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Document',
    name: '弹出框表单',
    index: '/modelForm'
  },
  {
    icon: 'Grid',
    name: '表格',
    index: '/table'
  },
  {
    icon: 'Calendar',
    name: '日历',
    index: '/calendar'
  }
]
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
