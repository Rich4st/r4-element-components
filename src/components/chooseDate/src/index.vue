<template>
  <div class="block">
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      v-bind="$attrs"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value2 = ref('')

</script>
<style scoped>
.block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.block:last-child {
  border-right: none;
}
</style>
