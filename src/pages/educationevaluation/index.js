import Taro, { Component } from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { View, Text, Button,ScrollView} from '@tarojs/components'
import EducationItem from '../../components/educationEvaluation'
import './index.less'

export default class EducatonEvalution extends Component{
    config = {
      navigationBarTitleText: '教学评价',
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
            url: 'http://202.115.33.207:8080/teachingEvaluate/getData.do',
            data: {
                itemId: 16||userData.itemId,
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
        console.log("item", item);
    }

    render(){
        //console.log("educationData",this.state.educationData);
        let { educationData } =  this.state, _this =  this;

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

              {educationData.length&&educationData.map((item, index)=>{
                  return <EducationItem item={item} ontapClick={_this.evalution.bind(_this)} key={index} />
              })}

          </ScrollView>

        </View>

    }
}
