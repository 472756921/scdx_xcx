import Taro, { Component } from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { View, Text, Button,ScrollView} from '@tarojs/components'
import './index.less'

export default class EducatonEvalution extends Component{
    config = {
      navigationBarTitleText: '教学评价',
    }
    render(){
        return <View className='educationMain'>
            <View className='educationTop'>
                <View>
                  <View>培训班次：</View>
                  <View>四川大学——广西壮族自治区国土资源系统女性干部专题研讨班</View>
                </View>
                <View>
                  <View>培训时间：</View>
                  <View>2018.5.7-5.11</View>
                </View>
            </View>
          <ScrollView
            scrollY
            scrollWithAnimation
            scrollTop='0'
            style='height: 90%'
            lowerThreshold='20'
            upperThreshold='20'>
            <View className='educationContent'>
                <View className='common double'>
                    <View><Text>课程名称：</Text>管理沟通与团队建设</View>
                    <View><Button className='btn-max-w' plain type='primary'>评估</Button></View>
                </View>
                <View className='common' style={{'line-height':'30px'}}>
                    <View><Text>任课老师：</Text>管理沟通与团队建设</View>
                </View>
                <View className='common detail'>
                    <View><Text>教学态度：</Text>满意</View>
                    <View><Text>教学内容：</Text>满意</View>
                    <View><Text>教学方法：</Text>满意</View>
                    <View><Text>教学效果：</Text>满意</View>

                  <View><Text>教学效果：</Text>满意</View>

                  <View><Text>教学效果：</Text>满意</View>

                  <View><Text>教学效果：</Text>满意</View>

                  <View><Text>教学效果：</Text>满意</View>

                  <View><Text>教学效果：</Text>满意</View>

                  <View><Text>教学效果：</Text>满意</View>
                  <View><Text>教学效果：</Text>满意</View>

                  <View><Text>教学效果：</Text>满意</View>
                  <View><Text>教学效果：</Text>满意</View>
                  <View><Text>教学效果：</Text>满意</View>

                  <View><Text>教学效果：</Text>满意</View>

                  <View><Text>教学效果：</Text>满意</View>
                  <View><Text>教学效果：</Text>满意</View>

                  <View><Text>教学效果：</Text>满意</View>

                  <View><Text>教学效果：</Text>满意</View>




                </View>
                <View className='textareaDetail'>
                    <View>您对教学水平和课程的其他意见和建议：</View>
                    <View>福建省打开了房间上的风景上看到上的风景上课了接受的方式对方立刻精神大发牢骚记得了</View>
                </View>
                <View  className='textareaDetail'>
                    <View>在后期培训中希望开设哪方面的专题和课程：</View>
                    <View>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</View>
                </View>
            </View>
          </ScrollView>

        </View>

    }
}
