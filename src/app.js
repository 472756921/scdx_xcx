import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import Login from "./pages/login"
import configStore from './store'

import './app.less'

const store = configStore()

class App extends Component {
  constructor(props){
      super(props);
  }
  config = {
    pages: [
      'pages/index/index',
      'pages/main/index',
      'pages/login/index',
      'pages/classevaluation/index',
      'pages/educationevaluation/index',
      'pages/educationevaluation/datile',
      'pages/my/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#05bb04',
      navigationBarTitleText: '四川大学',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
        list: [
            {

                pagePath: 'pages/index/index',
                text: '首页',
                iconPath: 'asset/tabBar_icon_index.png',
                selectedIconPath: 'asset/tabBar_icon_index_select.png'
            },
            {
                pagePath: "pages/classevaluation/index",
                text: "班级评估",
                iconPath: "asset/tabBar_icon_order.png",
                selectedIconPath: "asset/tabBar_icon_order_select.png"
            },
            {
              pagePath: "pages/educationevaluation/index",
              text: "教学评估",
              iconPath: "asset/tabBar_icon_order.png",
              selectedIconPath: "asset/tabBar_icon_order_select.png"
            },
           {
              pagePath: "pages/my/index",
              text: "我的",
              iconPath: "asset/tabBar_icon_main.png",
              selectedIconPath: "asset/tabBar_icon_main_select.png"
            }
        ],
        color:"#9B9B9B",
        selectedColor:"#559EF7",
    }
  }

  componentWillMount(){
  }


  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
