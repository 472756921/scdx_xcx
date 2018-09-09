import Taro, { Component } from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { View, Text, Button,ScrollView} from '@tarojs/components'
import EducationItem from '../../components/educationEvaluation'
import './index.less'
import base from '../../util'

export default class EducatonEvalution extends Component{
    config = {
      navigationBarTitleText: '教学评估',
    }
    constructor(props){
        super(props);
        this.state = {
            educationData:[]
        }
    }
    componentWillMount(){
        let userData = Taro.getStorageSync("userData"), _this =  this;
        Taro.request({
            method:'POST',
            url:base.url2+'/teachingEvaluate/getData.do',
            data: {
                itemId: userData.itemId,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            dataType:"json",
            success: function(res) {
                //console.log(res.data)
                if(res.data.msg === "Success"){
                    _this.setState({
                        educationData:res.data.data
                    })
                }
            }
        })
    }
    evalution(item){
        Taro.setStorageSync("datile", item);
        Taro.navigateTo({url: '/pages/educationevaluation/datile' + '?courseId='+item.courseId+'&teacherId='+item.teacherId});
    }

    render(){
        //console.log("educationData",this.state.educationData);
        let { educationData } =  this.state, _this =  this,
        classType =  Taro.getStorageSync("classType");
        return <View className='educationMain'>
            <View className='educationTop'>
                <View>
                  <View>培训班次：</View>
                  <View>{classType.className||''}</View>
                </View>
                <View>
                  <View>培训时间：</View>
                  <View>{classType.start&&classType.start.replace(/-/g,".")||''}-{classType.end&&classType.end.replace(/-/g,".")||''}</View>
                </View>
            </View>
          <ScrollView
            scrollY
            scrollWithAnimation
            scrollTop='0'
            style='height: 90%'
            lowerThreshold='20'
            upperThreshold='20'>

              {educationData.length&&educationData.map((item, index)=>{
                  return <EducationItem item={item} ontapClick={_this.evalution.bind(_this)} key={index} />
              })}

          </ScrollView>

        </View>

    }
}
