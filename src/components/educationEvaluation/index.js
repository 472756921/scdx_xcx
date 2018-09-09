import Taro,{Component} from "@tarojs/taro"
import {View, Text,Button} from '@tarojs/components'
import './index.less'
import base from "../../util"

export default class EducationList extends Component{
    clickItem(item){
        this.props.ontapClick(item)
    }
    render(){
        let {item} =  this.props;
        if(!item){return}
        return <View className='educationContent'>
            <View className='common double'>
                <View><Text>课程名称：</Text>{item.courseName}</View>
                <View><Button className='btn-max-w' plain type='primary' onClick={this.clickItem.bind(this,item)}>评估</Button></View>
            </View>
            <View className='common' style={{'line-height':'30px'}}>
                <View><Text>任课老师：</Text>{item.teacherName}</View>
            </View>
            <View className='common detail'>
                <View><Text>教学态度：</Text>{base.attitude(item.attitude)||''}</View>
                <View><Text>教学内容：</Text>{base.attitude(item.details)||''}</View>
                <View><Text>教学方法：</Text>{base.attitude(item.mode) || ''}</View>
                <View><Text>教学效果：</Text>{base.attitude(item.effect) || ''}</View>
            </View>
            <View className='textareaDetail'>
                <View>您对教学水平和课程的其他意见和建议：</View>
                <View>{item.commentSuggestion || ''}</View>
            </View>
            <View  className='textareaDetail'>
                <View>在后期培训中希望开设哪方面的专题和课程：</View>
                <View>{item.setUpCourse || ''}</View>
            </View>
        </View>
    }
}
