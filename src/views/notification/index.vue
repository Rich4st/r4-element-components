<template>
  <div class="notification-container">
    <el-divider content-position="left">
      插槽自定义popover内容
    </el-divider>
    <!-- 插槽自定义popover内容 -->
    <m-notification
      :value="10"
    >
      <m-list
        :list="list"
        :actions="actions"
        @on-item-click="getItem"
        @on-action-click="getAction"
      />
    </m-notification>
    <el-divider content-position="left">
      基本用法
    </el-divider>
    <!-- 基本用法 -->
    <m-notification
      :value="20"
      :max="30"
    />
    <el-divider content-position="left">
      value超过max的情况
    </el-divider>
    <!-- value超过max的情况 -->
    <m-notification
      :value="31"
      :max="30"
    />
    <el-divider content-position="left">
      显示小圆点不显示具体数量
    </el-divider>
    <!-- 显示小圆点不显示具体数量 -->
    <m-notification
      :value="31"
      :is-dot="true"
    />
    <el-divider content-position="left">
      图标自定义
    </el-divider>
    <!-- 图标自定义 -->
    <m-notification
      icon="ChatRound"
      :value="10"
    />
  </div>
</template>

<script setup lang="ts">
import { list, actions } from './data'

const getItem = (val:any) => {
  console.log(val)
}
const getAction = (val:any) => {
  console.log(val)
}
</script>

<style scoped>

</style>
