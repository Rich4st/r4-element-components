<template>
  <div class="container">
    <div style="width: 210px;">
      <m-menu
        :data="data1"
        mode="vertical"
        background-color="#E6CAA2"
        text-color="red"
        active-text-color="#fff"
      />
    </div>
    <div style="width: 300px;">
      <m-infinite-menu
        :data="data2"
        background-color="#E6CAA2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document'
      }
    ]
  }
]
// eslint-disable-next-line no-unused-vars
const data2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'Document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'Document',
                children: [
                  {
                    name: '导航3-1-1-1-1',
                    index: '3-1-1-1-1',
                    icon: 'Document'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
}

::v-deep(svg) {
  width: 1em;
  height: 1em;
}
</style>
