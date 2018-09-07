import Taro,{Component} from "@tarojs/taro"
import {View, Text,Button} from '@tarojs/components'
import './index.less'
export default class EducationList extends Component{
    clickItem(item){
        this.props.ontapClick(item)
    }
    render(){
        let {item} =  this.props;
        return <View className='educationContent'>
            <View className='common double'>
                <View><Text>课程名称：</Text>{item.courseName}</View>
                <View><Button className='btn-max-w' plain type='primary' onClick={this.clickItem.bind(this,item)}>评估</Button></View>
            </View>
            <View className='common' style={{'line-height':'30px'}}>
                <View><Text>任课老师：</Text>{item.teacherName}</View>
            </View>
            <View className='common detail'>
                <View><Text>教学态度：</Text>{item.attitude||'无'}</View>
                <View><Text>教学内容：</Text>{item.details||'无'}</View>
                <View><Text>教学方法：</Text>{item.mode || '无'}</View>
                <View><Text>教学效果：</Text>{item.effect || '无'}</View>
            </View>
            <View className='textareaDetail'>
                <View>您对教学水平和课程的其他意见和建议：</View>
                <View>{item.commentSuggestion || '无'}</View>
            </View>
            <View  className='textareaDetail'>
                <View>在后期培训中希望开设哪方面的专题和课程：</View>
                <View>{item.setUpCourse || '无'}</View>
            </View>
        </View>
    }
}
