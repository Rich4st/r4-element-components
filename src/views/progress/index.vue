<template>
  <div>
    <m-progress
      :percentage="100"
      :is-animation="true"
      :duration="5"
      color="red"
    />
    <m-progress
      :percentage="100"
      :is-animation="true"
      :duration="5"
      :stroke-width="24"
    />
    <m-progress
      :percentage="100"
      :is-animation="true"
      :duration="5"
      :stroke-width="5"
      type="circle"
    />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
