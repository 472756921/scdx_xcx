import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image,ScrollView, RichText  } from '@tarojs/components'
import './index.less'
import Tr from './tr'
import  base  from '../../util'
export default  class Main extends Component {
    config = {
        navigationBarTitleText: '首页',
    }
    constructor(props) {
      super(props);
      this.state = {
        pagesData: ''
      }
    }
    componentWillMount(){
       // console.log("userData", Taro.getStorageSync('userData'));
       if(!Taro.getStorageSync('userData')){
          Taro.redirectTo({
              url:'/pages/login/index'
          });
        }
    }
  componentDidMount(){
    //console.log("111111111111");
      /**
       * 这里就初始化数据
       */
      this.initConfig();
    /**
     * 初始化首页数据
     */
    this.initData();
  }
  initData(){
    let userData = Taro.getStorageSync("userData"), _this =  this;
    Taro.request({
      method:'POST',
      url: base.url+'/weChat/getTimetable.do',
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
          //Taro.setStorageSync("classType",res.data.data)
          _this.setState({
            "pagesData": res.data.data
          });
        }
      }
    })
  }
  initConfig(){
    let userData = Taro.getStorageSync("userData"), _this =  this;
    Taro.request({
      method:'POST',
      url: base.url2+'/gradeEvaluate/getClass.do',
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

          Taro.setStorageSync("classType",res.data.data)
        }
      }
    })
  }

  render(){
        /**
         *  UserData
         */
        let pagesData =  this.state.pagesData;
        //console.log("pagesData",pagesData.infoList);
        return <View className='index_main'>
              <View className='title'>{pagesData.itemName}</View>
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
                {
                  pagesData&&pagesData.infoList.map((item,index) => {
                    return  <Tr key={index} item={item}></Tr>
                  })
                }
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
