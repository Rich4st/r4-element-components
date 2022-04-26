import { App } from 'vue'
import chooseAreaVue from './chooseArea'
import chooseIconVue from './chooseIcon'
import trend from './trend'
import notification from './notification'
import menu from './menu'
import list from './list'
import progress from './progress'
import datePicker from './datepicker'
import chooseDate from './chooseDate'
import chooseCity from './chooseCity'
import form from './form'
import modelForm from './modelForm'
import table from './table'
import calendar from './calendar'
import './hooks'
import './styles/index.scss'
import * as Icons from '@element-plus/icons'
import { toLine } from './utils/index'

const components = [
  chooseAreaVue, chooseIconVue, trend, notification, list, menu, progress, datePicker, chooseDate, chooseCity, form, modelForm,
  table, calendar
]

export default {
  install (app:App) {
    // eslint-disable-next-line array-callback-return
    components.map(item => {
      app.use(item)
      for (const i in Icons) {
        // 注册全局组件
        app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
        // console.log(`el-icon-${toLine(i)}`,(Icons as any)[i]);
      }
    })
  }
}
