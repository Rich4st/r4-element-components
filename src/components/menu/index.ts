import { App } from 'vue'
import menu from './src/index.vue'
import infiniteMenu from './src/menu'

export default {
  install (app:App) {
    app.component('MMenu', menu)
    app.component('MInfiniteMenu', infiniteMenu)
  }
}
