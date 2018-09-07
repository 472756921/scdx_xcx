import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components"
import './index.less'

export default class My extends Component{
    config = {
        navigationBarTitleText: '我的',
    }
    render(){
        return <View className='my-show'>
            <View className='top'>敬请期待。。。</View>
            {/*<View className='content'>敬请期待。。。</View>*/}
        </View>
    }
}
