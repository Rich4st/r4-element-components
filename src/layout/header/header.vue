<template>
  <el-header>
    <toggleExpandVue @click="main.toggleIsCollapse" />
  </el-header>
</template>

<script setup lang="ts">
import toggleExpandVue from './components/toggleExpand.vue'
import { useMainStore } from '../../store'
const main = useMainStore()
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
}
</style>
