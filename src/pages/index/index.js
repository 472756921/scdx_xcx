import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image,ScrollView } from '@tarojs/components'
import './index.less'
export default  class Main extends Component {
    config = {
        navigationBarTitleText: '首页',
    }
    componentWillMount(){
        /*console.log("111111111111");
        Taro.navigateTo({
            url:'/pages/login/index'
        });*/

       // console.log("userData", Taro.getStorageSync('userData'));
        if(!Taro.getStorageSync('userData')){
            Taro.redirectTo({
                url:'/pages/login/index'
            });
        }
    }
  componentDidMount(){
    console.log("111111111111");
      /**
       * 这里就初始化数据
       */
  }
    render(){
        /**
         *  UserData
         */
        //console.log("UserData---------------");
        return <View className='index_main'>
              <View className='title'>XX专题培训班教学安排</View>
          <ScrollView className='scrollview'
                      scrollY
                      scrollWithAnimation
                      scrollTop='0'
                      style='height: 90%'
                      lowerThreshold='20'
                      upperThreshold='20'
                      >
            <View className='table'>
              <View className='tr  bg-w'>
                <View className='th'>日期</View>
                <View className='th'>时间</View>
                <View className='th'>授课内容</View>
                <View className='th '>主讲或主持</View>
                <View className='th '>地点</View>
              </View>
              <View className='tr-Content'>
                <View className='tr' >
                  <View className='td'>2018-10-09</View>
                  <View className='td'>2018-10-09</View>
                  <View className='td'>2018-10-09</View>
                  <View className='td'>2018-10-09</View>
                  <View className='td'>2018-10-09</View>
                </View>
                <View className='tr'>
                  <View className='td'>2018-10-09</View>
                  <View className='td'>2018-10-09</View>
                  <View className='td'>2018-10-09</View>
                  <View className='td'>2018-10-09</View>
                  <View className='td'>2018-10-09</View>
                </View>
              </View>
            </View>
            <View className='index_detail'>
                <View>备注:</View>
                <View className='num'>1、因不可预测因素，部分课程或师资或有适当调整，届时将提前通知。</View>
                <View className='num'>2、培训期间若有四川大学重要讲座，培训时间将另行通知</View>
            </View>
          </ScrollView>
        </View>
    }
}
