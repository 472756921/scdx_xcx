import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image,ScrollView } from '@tarojs/components'
import './index.less'

export default class Tr extends Component{
  render(){
    let item =  this.props.item;
    return <View className='tr' >
      <View className='td'><View>{item.date}</View></View>
      <View className='td'><View>{item.time}</View></View>
      <View className='td'><View>{item.course}</View></View>
      <View className='td'><View>{item.courseType}</View></View>
      <View className='td normal'><View>{item.classroomAddress}</View></View>
    </View>
  }
}
