import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image } from '@tarojs/components'
export default  class Main extends Component {
    config = {
        navigationBarTitleText: '首页',
    }
    componentWillMount(){
        // console.log("111111111111");
        Taro.navigateTo({
            url:'/pages/login/index'
        })
    }

    render(){
        return <View>
            首页
        </View>
    }
}
