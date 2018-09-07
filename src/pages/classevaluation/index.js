import Taro, { Component } from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { View, Radio, RadioGroup, Label, Button, Text, Textarea } from '@tarojs/components'
import './index.less'

export default  class ClassEvaluation extends Component{
  constructor(props){
    super(props);
    this.state = {
      current: 0,
      list: [
        {value: '1', text: '很满意', checked: true},
        {value: '2', text: '满意', checked: false},
        {value: '3', text: '一般', checked: false},
        {value: '4', text: '不满意', checked: false},
      ],
      postList: {
        "itemId":"16",      //项目ID
        "studentId":"5",   //学员ID
        "classTheme":"1",   //专题班主题
        "courses":"1",     //课程设置
        "details":"1",        //教学内容
        "mode":"1",        //教学方式
        "datum":"1",       //资料准备
        "coordinate":"1",       //教学组织协调
        "classServe":"1"       //班级管理服务
      },
      postList2: {
        "itemId":"16",      //项目ID
        "studentId":"5",   //学员ID
        "dish":"1",           //菜品卫生
        "environmentServe":"1",           //就餐环境与服务
        "roomHealth":"2",           //房间设施与卫生条件
        "roomServe":"1",           //客房服务及时有效
        "pickUp":"1",           //接送及时
        "driverAttitude":"1"
      },
      postList3: {
        "itemId":"16",      //项目ID
        "studentId":"5",   //学员ID
        "globalSatisfaction":"1",           //您对本期培训班的总体满意度是
        "globalFeel":"1"          //您参加本期培训后的总体感觉是
      },
      postList4: {
        "itemId":"16",      //项目ID
        "studentId":"5",   //学员ID
        "overallSatisfaction":"1",           //自己的收获主要是
        "commentSuggestion":"1"          //您对改进培训班的意见和建议
      },
    };
  }
  handleClick(index){
    this.setState({
      current: index
    })
  }
  radioChange(type,t){
    let d = t.detail.value;
    let data = JSON.parse(JSON.stringify(this.state.postList));
    switch (type){
      case 'classTheme':
        data.classTheme = d;
        break;
      case 'courses':
        data.courses = d;
        break;
      case 'details':
        data.details = d;
        break;
      case 'mode':
        data.mode = d;
        break;
      case 'datum':
        data.datum = d;
        break;
      case 'coordinate':
        data.coordinate = d;
        break;
      case 'classServe':
        data.classServe = d;
        break;
    }
    this.setState({
      ...this.state,
      postList: data,
    })
  }
  radioChange_t(type,t){
    let d = t.detail.value;
    let data = JSON.parse(JSON.stringify(this.state.postList2));
    switch (type){
      case 'dish':
        data.dish = d;
        break;
      case 'environmentServe':
        data.environmentServe = d;
        break;
      case 'roomHealth':
        data.roomHealth = d;
        break;
      case 'roomServe':
        data.roomServe = d;
        break;
      case 'pickUp':
        data.pickUp = d;
        break;
      case 'driverAttitude':
        data.driverAttitude = d;
        break;
    }
    this.setState({
      ...this.state,
      postList2: data,
    })
  }
  radioChange_s(type,t){
    let d = t.detail.value;
    let data = JSON.parse(JSON.stringify(this.state.postList3));
    switch (type){
      case 'globalSatisfaction':
        data.globalSatisfaction = d;
        break;
      case 'globalFeel':
        data.globalFeel = d;
        break;
    }
    this.setState({
      ...this.state,
      postList3: data,
    })
  }
  radioChange_f(type,t){
    let d = t.detail.value;
    let data = JSON.parse(JSON.stringify(this.state.postList4));
    switch (type){
      case 'overallSatisfaction':
        data.overallSatisfaction = d;
        break;
      case 'commentSuggestion':
        data.commentSuggestion = d;
        break;
    }
    this.setState({
      ...this.state,
      postList4: data,
    })
  }

  tijiao(v) {
    let datas = this.state.postList;
    let url = '/gradeEvaluate/addOrUpdateManage.do';
    switch (v){
      case 2:
        datas =  this.state.postList2;
        url = '/gradeEvaluate/addOrUpdateLogistics.do';
        break;
      case 3:
        datas =  this.state.postList3;
        url = '/gradeEvaluate/addOrUpdateGlobal.do';
        break;
      case 4:
        datas =  this.state.postList4;
        url = '/gradeEvaluate/addOrUpdateComment.do';
        break;
      default:
        datas =  this.state.postList;
        url = '/gradeEvaluate/addOrUpdateManage.do';
        break;
    };

    wx.request({
      url: 'http://202.115.33.207:8080'+url, //仅为示例，并非真实的接口地址
      data: datas,
      method: 'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  }

  render(){
    const tabList1 = [{ title: '教学管理评估' }, { title: '后勤服务评估' }, { title: '综合评估' },  { title: '建议' }]
     return  <View className='panel'>
       <View className='panel__title'>
         培训班次：四川大学——广西壮族自治区国土资源系统女性干部专题研讨班
         <View>培训时间：2018.5.7-5.11</View>
       </View>
       <View className='panel__content'>
         <AtTabs current={this.state.current} tabList={tabList1} onClick={this.handleClick.bind(this)} style={{height:'100%'}}>
           <AtTabsPane>
             <View className='tab-content'>
               专题班主题：
                 <RadioGroup onChange={this.radioChange.bind(this,'classTheme')}>
                   {this.state.list.map((item, i) => {
                     return (
                       <Label className='radio-list__label' for={i} key={i}>
                         <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                       </Label>
                     )
                   })}
                 </RadioGroup>
             </View>
             <View className='tab-content'>
               课程设置： &nbsp;&nbsp;
                 <RadioGroup onChange={this.radioChange.bind(this,'courses')}>
                   {this.state.list.map((item, i) => {
                     return (
                       <Label className='radio-list__label' for={i} key={i}>
                         <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                       </Label>
                     )
                   })}
                 </RadioGroup>
             </View>
             <View className='tab-content'>
               教学内容： &nbsp;&nbsp;
                 <RadioGroup onChange={this.radioChange.bind(this,'details')}>
                   {this.state.list.map((item, i) => {
                     return (
                       <Label className='radio-list__label' for={i} key={i}>
                         <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                       </Label>
                     )
                   })}
                 </RadioGroup>
             </View>
             <View className='tab-content'>
               教学方式： &nbsp;&nbsp;
                 <RadioGroup onChange={this.radioChange.bind(this,'mode')}>
                   {this.state.list.map((item, i) => {
                     return (
                       <Label className='radio-list__label' for={i} key={i}>
                         <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                       </Label>
                     )
                   })}
                 </RadioGroup>
             </View>
             <View className='tab-content'>
               资料准备： &nbsp;&nbsp;
                 <RadioGroup onChange={this.radioChange.bind(this,'datum')} >
                   {this.state.list.map((item, i) => {
                     return (
                       <Label className='radio-list__label' for={i} key={i}>
                         <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                       </Label>
                     )
                   })}
                 </RadioGroup>
             </View>
             <View className='tab-content'>
               教学组织协调：
                 <RadioGroup onChange={this.radioChange.bind(this,'coordinate')} >
                   {this.state.list.map((item, i) => {
                     return (
                       <Label className='radio-list__label' for={i} key={i}>
                         <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                       </Label>
                     )
                   })}
                 </RadioGroup>
             </View>
             <View className='tab-content'>
               班级管理服务：
                 <RadioGroup onChange={this.radioChange.bind(this,'classServe')} >
                   {this.state.list.map((item, i) => {
                     return (
                       <Label className='radio-list__label' for={i} key={i}>
                         <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                       </Label>
                     )
                   })}
                 </RadioGroup>
             </View>
             <Button size='mini' style={{display:'block', margin:'1rem auto', 'width':'100px'}} onClick={this.tijiao.bind(this, 1)}>提交</Button>
           </AtTabsPane>

           <AtTabsPane style='line-height: 24px'>
             <Text className='tab-content' style={{float:'left',height: '90px'}}>餐饮：</Text>
             <View className='tab-content'>
               菜品卫生
               <RadioGroup onChange={this.radioChange_t.bind(this,'dish')}>
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
               <Text style={{marginTop:'10px',distplay:'block'}}>就餐环境与服务</Text>
               <RadioGroup onChange={this.radioChange_t.bind(this,'environmentServe')}>
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
             </View>
             <Text className='tab-content' style={{float:'left',height: '90px'}}>住宿：</Text>
             <View className='tab-content'>
               房间设施与卫生条件
               <RadioGroup  onChange={this.radioChange_t.bind(this,'roomHealth')}>
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
               <Text style={{marginTop:'10px',distplay:'block'}}>客房服务及时有效</Text>
               <RadioGroup  onChange={this.radioChange_t.bind(this,'roomServe')}>
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
             </View>
             <Text className='tab-content' style={{float:'left',height: '90px'}}>交通：</Text>
             <View className='tab-content'>
               接送及时
               <RadioGroup  onChange={this.radioChange_t.bind(this,'pickUp')}>
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
               <Text style={{marginTop:'10px',distplay:'block'}}>司机态度</Text>
               <RadioGroup onChange={this.radioChange_t.bind(this,'driverAttitude')}>
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
             </View>
             <Button size='mini' style={{display:'block', margin:'1rem auto', 'width':'100px'}} onClick={this.tijiao.bind(this, 2)}>提交</Button>
           </AtTabsPane>

           <AtTabsPane style='line-height: 24px'>
             <View className='tab-content'>
               您对本期培训班的总体满意度是
               <RadioGroup onChange={this.radioChange_s.bind(this,'globalSatisfaction')}>
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
               <Text style={{marginTop:'10px',distplay:'block'}}>您参加本期培训后的总体感觉是</Text>
               <RadioGroup onChange={this.radioChange_s.bind(this,'globalFeel')}>
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
             </View>
             <Button size='mini' style={{display:'block', margin:'1rem auto', 'width':'100px'}} onClick={this.tijiao.bind(this, 3)}>提交</Button>
           </AtTabsPane>

           <AtTabsPane>
             <View className='tab-content'>
               <Text>自己的收获主要是</Text>
               <Textarea onInput={this.radioChange_f.bind(this,'overallSatisfaction')} style='margin: 6px;background:#fff;width:85%;min-height:80px;padding:0 30rpx;border:1px solid #eee' autoHeight/>
               <Text>您对改进培训班的意见和建议</Text>
               <Textarea onInput={this.radioChange_f.bind(this,'commentSuggestion')} style='margin: 6px;background:#fff;width:85%;min-height:80px;padding:0 30rpx;border:1px solid #eee' autoHeight/>
             </View>


             <Button size='mini' style={{display:'block', margin:'1rem auto', 'width':'100px'}} onClick={this.tijiao.bind(this, 4)}>提交</Button>
           </AtTabsPane>
         </AtTabs>
       </View>
     </View>
  }
}
