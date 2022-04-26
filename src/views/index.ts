import { App } from 'vue'
import chooseAreaVue from '../components/chooseArea'
import chooseIconVue from '../components/chooseIcon'
import trend from '../components/trend'
import notification from '../components/notification'
import menu from '../components/menu'
import list from '../components/list'
import progress from '../components/progress'
import datePicker from '../components/datepicker'
import chooseDate from '../components/chooseDate'
import chooseCity from '../components/chooseCity'
import form from '../components/form'
import modelForm from '../components/modelForm'
import table from '../components/table'
import calendar from '../components/calendar'

const components = [
  chooseAreaVue, chooseIconVue, trend, notification, list, menu, progress, datePicker, chooseDate, chooseCity, form, modelForm,
  table, calendar
]

export default {
  install (app:App) {
    components.map(item => app.use(item))
  }
}
