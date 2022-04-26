import { toLine } from './utils/index'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'
import './styles/index.scss'
// pinia
import { createPinia } from 'pinia'
// 全局组件
import mCom from './views'

// mockjs
import './mock'

const app = createApp(App)
// 全局注册图标
for (const i in Icons) {
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
  // console.log(`el-icon-${toLine(i)}`,(Icons as any)[i]);
}

app.use(router).use(ElementPlus).use(createPinia()).use(mCom)
app.mount('#app')
