import Taro, { Component } from '@tarojs/taro'
import { View, Textarea,Label,Radio, Button,RadioGroup} from '@tarojs/components'
import './index.less'
import base from '../../util'

export default class EducatonEvalution extends Component{

  config = {
    navigationBarTitleText: "教学评估",
  }
  constructor(props){
    super(props);
    let detail =  Taro.getStorageSync("datile");
    this.state = {
      list: [
        {value: '1', text: '很满意', checked: true},
        {value: '2', text: '满意', checked: false},
        {value: '3', text: '一般', checked: false},
        {value: '4', text: '不满意', checked: false},
      ],
      postList: {
        "id": detail.id,                     //教学评估ID    查询教学评估接 里 id值是什么，就填写什么   如：添加 id:null   修改 ：1
        "itemId":Taro.getStorageSync('userData').itemId,                     // 项目ID
        "studentId":Taro.getStorageSync('userData').studentId,                     //学员ID
        "courseId":detail.courseId,                     //课程名称ID
        "teacherId":detail.teacherId,                     //老师ID
        "attitude":detail.attitude&&detail.attitude||1,                     //教学态度
        "details":detail.details&&detail.details||1,                     //教学内容
        "mode":detail.mode&&detail.mode||1,                     //教学方法
        "effect":detail.effect&&detail.effect||1,                     //教学效果
        "commentSuggestion":detail.commentSuggestion&&detail.commentSuggestion||"",                     //您对教学水平和课程的其他意见和建议
        "setUpCourse":detail.setUpCourse&&detail.setUpCourse||""                     //在后期培训中希望开设哪方面的专题和课程
      },
    };
  }
  radioChange(type,t){
    let d = t.detail.value;
    let data = JSON.parse(JSON.stringify(this.state.postList));
    switch (type){
      case 'attitude':
        data.attitude = d;
        break;
      case 'details':
        data.details = d;
        break;
      case 'details':
        data.details = d;
        break;
      case 'mode':
        data.mode = d;
        break;

      case 'effect':
        data.effect = d;
        break;
      case 'commentSuggestion':
        data.commentSuggestion = d;
        break;
      case 'setUpCourse':
        data.setUpCourse = d;
        break;
    }
    this.setState({
      ...this.state,
      postList: data,
    })
  }
  tijiao() {
    var _this =  this;
    let detail =  Taro.getStorageSync("datile");
    let datas = this.state.postList;
    for(let d in datas) {
      if(d != 'id' && d != 'overallSatisfaction' && d != 'commentSuggestion'){
        datas[d] = this.isnull(datas[d]);
      }
    }

    wx.request({
      url:base.url2+'/teachingEvaluate/data.do',
      data: datas,
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        /**
         * 如果成功则，提交
         */
        if(res.data.msg === "Success"){
          Taro.showToast({
            title: detail.id === null ?'新增成功':'修改成功',
            icon: 'none',
            duration: 1000
          });
          setTimeout(()=>{
            Taro.reLaunch({
              url: "/pages/educationevaluation/index"
            });
          }, 1200)
        }
      }
    })
  }

  isnull(data) {
    if(data == '' || data == null) {
      return 1;
    }
    return data;
  }

  render(){

    let postList =  this.state.postList;
    //console.log("postList",postList)
    return(
      <View className='educationMain_datile' style='font-size:12px;line-height: 30px; padding: 10px'>
        <View className='tab-content'>
          教学态度：
          <RadioGroup onChange={this.radioChange.bind(this, 'attitude')}>
            {this.state.list.map((item, i) => {
              return (
                <Label className='radio-list__label' for={i} key={i}>
                  <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={(postList.attitude == item.value||item.value == '1'||false)}> {item.text} </Radio>
                </Label>
              )
            })}
          </RadioGroup>
        </View>
        <View className='tab-content'>
          教学内容：
          <RadioGroup onChange={this.radioChange.bind(this, 'details')}>
            {this.state.list.map((item, i) => {
              return (
                <Label className='radio-list__label' for={i} key={i}>
                  <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={(postList.details == item.value||item.value == '1'||false)}> {item.text} </Radio>
                </Label>
              )
            })}
          </RadioGroup>
        </View>
        <View className='tab-content'>
          教学方法：
          <RadioGroup onChange={this.radioChange.bind(this, 'mode')}>
            {this.state.list.map((item, i) => {
              return (
                <Label className='radio-list__label' for={i} key={i}>
                  <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={(postList.mode == item.value||item.value == '1'||false)}> {item.text} </Radio>
                </Label>
              )
            })}
          </RadioGroup>
        </View>
        <View className='tab-content'>
          教学效果：
          <RadioGroup onChange={this.radioChange.bind(this, 'effect')}>
            {this.state.list.map((item, i) => {
              return (
                <Label className='radio-list__label' for={i} key={i}>
                  <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={(postList.effect == item.value||item.value == '1'||false)}> {item.text} </Radio>
                </Label>
              )
            })}
          </RadioGroup>
        </View>
        <View>
          <View>您对教学水平和课程的其他意见和建议：（如有特别针对某门课程的建议，请指明是某门课程）</View>
          <Textarea onInput={this.radioChange.bind(this,'commentSuggestion')} value={postList.commentSuggestion} style='margin: 6px;background:#fff;width:85%;min-height:80px;padding:0 30rpx;border:1px solid #eee' autoHeight/>
        </View>
        <View>
          <View>在后期培训中希望开设哪方面的专题和课程</View>
          <Textarea onInput={this.radioChange.bind(this,'setUpCourse')} value={postList.setUpCourse} style='margin: 6px;background:#fff;width:85%;min-height:80px;padding:0 30rpx;border:1px solid #eee' autoHeight/>
        </View>
        <Button size='mini' style={{display:'block',background:'#05bb04',color:'#fff', margin:'1rem auto', 'width':'100px'}} onClick={this.tijiao.bind(this)}>提交</Button>
      </View>
    )

  }
}
