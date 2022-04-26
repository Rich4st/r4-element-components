<template>
  <div class="common-layout">
    <el-container>
      <Sider />
      <el-container>
        <Header />
        <Content />
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Sider from './sider'
import Header from './header'
import Content from './content'

</script>

<style lang="scss" scoped>
.el-container{
  height: 100vh;
}
.el-container:nth-child(2){
display: flex;
flex-direction: column;
}
</style>
