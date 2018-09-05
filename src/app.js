import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import Login from "./pages/login"
import configStore from './store'

import './app.less'

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/main/index',
      'pages/login/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
        list: [
            {

                pagePath: 'pages/index/index',
                text: '首页',
            },
            {
                pagePath: "pages/index/index",
                text: "订单",
            }
        ],
        color:"#9B9B9B",
        selectedColor:"#559EF7",
    }
  }

  componentWillMount(){
     // console.log("111111111111");
      Taro.navigateTo({
          url:'/pages/login/index'
      })
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
