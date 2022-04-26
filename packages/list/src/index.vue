<template>
  <div class="list-container">
    <el-tabs>
      <el-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :label="item.title"
      >
        <!-- 内容部分 -->
        <el-scrollbar height="250px">
          <div
            class="container"
            v-for="(item1, index1) in item.content"
            @click="onItemClick(item1,index1)"
            :key="index1"
          >
            <div
              v-if="item1.avatar"
              class="avatar"
            >
              <el-avatar
                :src="item1.avatar"
              />
            </div>
            <div
              class="content"
              v-if="item1.title"
            >
              <div class="title">
                <div>{{ item1.title }}</div>
                <div v-if="item1.tag">
                  <el-tag :type="item1.tagType">
                    {{ item1.tag }}
                  </el-tag>
                </div>
              </div>
              <div
                class="desc"
                v-if="item1.desc"
              >
                {{ item1.desc }}
              </div>
              <div
                class="time"
                v-if="item1.time"
              >
                {{ item1.time }}
              </div>
            </div>
          </div>
        </el-scrollbar>
        <!-- /内容部分 -->
        <!-- 操作部分 -->
        <div
          class="actions"
        >
          <div
            class="a-item"
            v-for="(action, index3) in actions"
            :key="index3"
            :class="{ 'border': index3 !== actions.length-1 }"
            @click="onActionClick(action,index3)"
          >
            <div
              class="a-icon"
              v-if="action.icon"
            >
              <component :is="`el-icon-${toLine(action.icon)}`" />
            </div>
            <div class="a-text">
              {{ action.text }}
            </div>
          </div>
        </div>
        <!-- /操作部分 -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { toLine } from '../../utils'
import { ListOptions, ActionOptions, ListItem } from './types'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // 列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})

const emits = defineEmits(['onItemClick', 'onActionClick'])
const onItemClick = (item:ListItem, index:number) => {
  emits('onItemClick', { item, index })
}
const onActionClick = (item: ActionOptions, index:number) => {
  emits('onActionClick', { item, index })
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
