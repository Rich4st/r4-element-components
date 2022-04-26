import { App } from 'vue'
import chooseAreaVue from './src/index.vue'

export default {
  install (app: App) {
    app.component('ChooseAreaVue', chooseAreaVue)
  }
}
