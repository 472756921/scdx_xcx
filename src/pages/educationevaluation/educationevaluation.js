import Taro, { Component } from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { View, Text, Button} from '@tarojs/components'
import './index.less'

export default class EducatonEvalution extends Component{

    render(){
        return <View className='educationContent'>
            <View className='educationTop'>
                <View><Text>培训班次：</Text>四川大学——广西壮族自治区国土资源系统女性干部专题研讨班</View>
                <View><Text>培训时间：</Text>2018.5.7-5.11</View>
            </View>
            <View className='educationContent'>
                <View className='common double'>
                    <View><Text>课程名称：</Text>管理沟通与团队建设</View>
                    <View><Button>评估</Button></View>
                </View>
                <View>
                    <View><Text>课程名称：</Text>管理沟通与团队建设</View>
                </View>
                <View>
                    <View><Text>教学态度：</Text>满意</View>
                    <View><Text>教学内容：</Text>满意</View>
                    <View><Text>教学方法：</Text>满意</View>
                    <View><Text>教学效果：</Text>满意</View>
                </View>
                <View>
                    <View>您对教学水平和课程的其他意见和建议：</View>
                    <View>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</View>
                </View>
                <View>
                    <View>在后期培训中希望开设哪方面的专题和课程：</View>
                    <View>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</View>
                </View>
            </View>

        </View>

    }
}
