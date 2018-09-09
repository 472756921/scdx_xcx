import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components"
import './index.less'

export default class My extends Component{
    config = {
        navigationBarTitleText: '我的',
    }
  cle(){
      wx.clearStorage();

    Taro.showToast({
      title: '即将退出登录',
      icon: 'none',
      duration: 2000
    })
    setTimeout(()=>{
      Taro.redirectTo({
        url:'/pages/login/index'
      })
    },2100)
  }

    render(){
        return <View className='my-show'>
            <View className='top'>敬请期待。。。</View>
            <View>
              <Button size='mini' style={{display:'block',background:'#05bb04',color:'#fff', margin:'1rem auto', 'width':'100px'}} onClick={this.cle.bind(this)}>注销</Button></View>
            {/*<View className='content'>敬请期待。。。</View>*/}
        </View>
    }
}
