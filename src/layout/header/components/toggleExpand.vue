<template>
  <div>
    <el-icon-expand v-if="main.isCollapse" />
    <el-icon-fold v-else />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../../../store/index'
const main = useMainStore()
</script>

<style scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>
