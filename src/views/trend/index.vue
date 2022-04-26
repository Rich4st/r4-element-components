<template>
  <!-- 正常 -->
  <div class="trend-container">
    <div><m-trend text="销售额" /></div>
    <div>
      <m-trend
        text="营业额"
        type="down"
      />
    </div>
  </div>
  <!-- 使用插槽和自定义文字颜色 -->
  <div class="trend-container">
    <div>
      <m-trend
        up-text-color="yellow"
        up-icon="carettop"
      >
        今日新增
      </m-trend>
    </div>
    <div>
      <m-trend
        type="down"
        down-text-color="blue"
        down-icon="caretbottom"
      >
        今日治愈
      </m-trend>
    </div>
  </div>
  <!-- 颜色反转 -->
  <div class="trend-container">
    <div>
      <m-trend
        reverse-color
      >
        今日新增
      </m-trend>
    </div>
    <div>
      <m-trend
        type="down"
        reverse-color
      >
        今日治愈
      </m-trend>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.trend-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  div {
    margin-right: 10px;
  }
}
</style>
