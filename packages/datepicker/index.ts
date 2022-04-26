import { App } from 'vue'
import datePicker from './src/index.vue'

export default {
  install (app:App) {
    app.component('MDatePicker', datePicker)
  }
}
