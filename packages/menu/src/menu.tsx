import { defineComponent, PropType } from 'vue'
import { MenuItem } from './types'
import * as Icons from '@element-plus/icons'

export default defineComponent({
  props: {
      // 导航菜单数据
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true
  },
  // 菜单栏模式：水平：horizontal || 垂直：vertical
  mode: {
    type: String,
    default: 'vertical'
  },
  // 背景色
  backgroundColor: {
    type: String,
    default: '#fff'
  },
  // 导航菜单文字颜色
  textColor: {
    type: String,
    default: '#303133'
  },
  // 激活菜单栏文字的颜色
  activeTextColor: {
    type: String,
    default: '#409EFF'
  }
  },
  setup (props, ctx) {
    // 封装一个渲染无限层级菜单的方法
    // 函数会返回一段jsx的代码
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        // 每个菜单的图标
        item.i = (Icons as any)[item.icon!]
        // 处理sub-menu的插槽
        let slots = {
          title: () => {
            return <>
              <item.i />
              <span>{item.name}</span>
            </>
          }
        }
        // 递归渲染children
        if(item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots} >
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        // 正常渲染普通的菜单
        return (
          <el-menu-item index={item.index}>
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }
    
    return () => {
      return (
        <el-menu>
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  }
})