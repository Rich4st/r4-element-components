<template>
  <div style="">
    <m-calendar
      :events="events"
      @date-click="getDateInfo" @event-click="getEventInfo"
      display-event-end :event-content="eventContent"
    />
  </div>
</template>

<script setup lang="ts">
import { EventItem } from '../../components/calendar/src/types'
import { EventClickArg, EventContentArg } from '@fullcalendar/core'
import { DateClickArg } from '@fullcalendar/interaction'
import { ref } from 'vue'

const events = ref<EventItem[]>([
  {
    title: 'coding',
    start: '2022-04-20 09:00',
    end: '2022-04-20 21:00',
    editable: true
  },
  {
    title: 'gaming',
    start: '2022-04-23 09:10',
    end: '2022-04-23 21:10'
  }
])

/* 日历的点击事件 */
const getDateInfo = (info: DateClickArg) => {
  events.value.push({
    title: 'learning',
    start: info.dateStr + ' 12:00',
    end: info.dateStr + ' 21:50'
  })
}
const getEventInfo = (info: EventClickArg) => {
}
/* /日历的点击事件 */

/* 渲染日历的事件 */
const eventContent = (arg: EventContentArg) => {
  const el = document.createElement('div')
  const timeTextArr = arg.timeText.split('-')
  const start = timeTextArr[0]
  const end = timeTextArr[1]
  el.innerHTML = `
          <div style="font-size: 20px;">🗒  ${arg.event._def.title}</div>
          <div style="margin-top: 15px;">⌛️ ${start}</div>
          <div style="margin-top: 10px;">⏰ ${end}</div>
        `
  return {
    domNodes: [el]
  }
}
/* /渲染日历的事件 */
</script>

<style scoped>

</style>
