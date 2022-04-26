<template>
  <div>
    <m-choose-city @update-city="getCity" />
  </div>
</template>

<script setup lang="ts">
const getCity = (city: any) => {
  console.log(city)
}
</script>

<style scoped>

</style>
