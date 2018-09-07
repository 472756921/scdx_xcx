import Taro, { Component } from '@tarojs/taro'
import { View, Form , Button,Input} from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Index extends Component {

    config = {
        navigationBarTitleText: '登录',
    }
    constructor(props){
        super(props);
        this.state={
            studentId:""
        }
    }

  componentWillReceiveProps (nextProps) {
    //console.log(this.props, nextProps)
  }

  componentWillMount(){
    //console.log("11111111");
     // wx.reLaunch();
  }
  componentWillUnmount () {

  }

  componentDidShow () { }

  componentDidHide () { }

  login(){
       // let studentId =  this.refs.studentId.value
     // console.log("studentId",this.state.studentId);
      let _this =  this;

      wx.login({
          success: function(res) {
              // console.log("res",res);
              if (res.code) {
                  //发起网络请求
                  wx.request({
                      url: 'http://202.115.33.207:8080/weChat/login.do',
                      data: {
                          code: res.code,
                          studentCard: _this.state.studentId
                      },
                      success: function(res) {
                          // console.log(res.data)
                          if(res.data.msg === "Success"){
                              Taro.reLaunch({
                                  url: "/pages/index/index"
                              });
                              Taro.setStorageSync("userData",res.data.data)
                          }
                      }
                  })
              } else {
                  console.log('登录失败！' + res.errMsg)
              }
          }
      });
     // Taro.navigateBack()
  }
  putStudentId(e){
      //console.log("e", e.target.value);
      this.setState({
          "studentId": e.target.value
      })
  }

  render () {
    return (
      <View className='index'>
        {/*<Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View>{this.props.counter.num}</View>
        <View>Hello, World</View>*/}
          <View className='formLogin'>
              <View className='line-box'>
                  <View className='name'>学号</View>
                  <View><Input type='text' onChange={this.putStudentId.bind(this)} placeholder='请输入学号' name='studentId' value={this.state.studentId}/></View>
              </View>
              {/*<View className='line-box'>
                  <View className='name'>密码</View>
                  <View><Input type='password' placeholder='请输入密码' name='userName'/></View>
              </View>*/}
              <View className='loginBtn' onClick={this.login.bind(this)}>
                  <Button className="btn-max-w" plain type="primary">登录</Button>
              </View>
          </View>
      </View>
    )
  }
}

export default Index
