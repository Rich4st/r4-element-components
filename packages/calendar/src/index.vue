<template>
  <div id="calendar" />
</template>

<script setup lang="ts">
import '@fullcalendar/core/vdom'
import { Calendar, EventClickArg } from '@fullcalendar/core'
import { onMounted, PropType, ref, watch } from 'vue'
import daygrid from '@fullcalendar/daygrid'
import interaction, { DateClickArg } from '@fullcalendar/interaction'
import { EventItem } from './types'

const emits = defineEmits(['dateClick', 'eventClick'])
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // 日历的语言
  locale: {
    type: String,
    default: 'zh-cn'
  },
  // 视图模式
  initialView: {
    type: String,
    default: 'dayGridMonth'
  },
  // 日历按钮的文字
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: '今天',
        day: '日',
        month: '月',
        year: '年',
        prevYear: '上一年',
        nextYear: '下一年',
        prev: '上一月',
        next: '下一月'
      }
    }
  },
  // 头部工具栏
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        start: 'title',
        center: '',
        end: 'prev today next'
      }
    }
  },
  // 底部工具栏
  footerToolbar: {
    type: Object,
    default: () => {}
  },
  // 事件
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => []
  },
  // 显示事件结束时间，
  displayEventEnd: {
    type: Boolean,
    default: false
  },
  // 自定义渲染日历事件样式
  eventContent: {
    type: Function,
    default: () => {}
  }
})

const calendar = ref<Calendar>()
// 渲染日历的方法
const renderCalendar = () => {
  const el = document.getElementById('calendar')
  if (el) {
    calendar.value = new Calendar(el, {
      plugins: [daygrid, interaction],
      locale: props.locale,
      initialView: props.initialView,
      buttonText: props.buttonText,
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,
      eventSources: [
        // 渲染日历的事件
        {
          events (e, callback) {
            if (props.events.length) {
              callback(props.events)
            } else {
              // eslint-disable-next-line n/no-callback-literal
              callback([])
            }
          }
        }
      ],
      // 点击日历上的某一天
      dateClick (info: DateClickArg) {
        emits('dateClick', info)
      },
      // 点击日历上的某一个事件
      eventClick (info: EventClickArg) {
        emits('eventClick', info)
      },
      // 显示事件结束事件
      displayEventEnd: props.displayEventEnd,
      eventContent: props.eventContent
    })
    calendar.value.render()
  }
}

onMounted(() => {
  renderCalendar()
})
// 监听events的变化
watch(() => props.events, () => {
  renderCalendar()
}, { deep: true })

</script>

<style lang="scss" scoped>
.fc-daygrid-day-frame {
  height: 50px;
  max-height: 50px;
}
#calendar {
  width: 100%;
}
</style>
