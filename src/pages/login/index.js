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

  componentWillReceiveProps (nextProps) {
    //console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  login(){
      Taro.navigateTo({
          url:'/pages/main/index'
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
                  <View className='name'>登录名</View>
                  <View><Input type='text' placeholder='请输入用户名' name='userName'/></View>
              </View>
              <View className='line-box'>
                  <View className='name'>密码</View>
                  <View><Input type='password' placeholder='请输入密码' name='userName'/></View>
              </View>
              <View className='loginBtn' onClick={this.login.bind(this)}>
                  <Button className="btn-max-w" plain type="primary">登录</Button>
              </View>
          </View>
      </View>
    )
  }
}

export default Index
