import Taro, { Component } from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { View, Radio, RadioGroup, Label, Button } from '@tarojs/components'
import './index.less'

let  _this;
export default  class ClassEvaluation extends Component{
  constructor(props){
    super(props);
    _this = this;
    this.state = {
      current: 0,
      list: [
        {value: '很满意', text: '很满意', checked: true},
        {value: '满意', text: '满意', checked: false},
        {value: '一般', text: '一般', checked: false},
        {value: '不满意', text: '不满意', checked: false},
      ],
    };
  }
  handleClick(index){
    this.setState({
      current: index
    })
  }
  changeRa(d){
    // let v = d.detail.value;
    // let nl = _this.state.list.map((it) =>{
    //   if(it.value === v){
    //     it.checked = true;
    //   }else {
    //     delete it['checked'];
    //   }
    //   return it;
    // })
    // _this.setState({
    //   ..._this.state.current,
    //   list: nl
    // })
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
                 <RadioGroup onChange={this.changeRa}>
                   {this.state.list.map((item, i) => {
                     return (
                       <Label className='radio-list__label' for={i} key={i}>
                         <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                       </Label>
                     )
                   })}
                 </RadioGroup>
             </View>
             <View className='tab-content'>
               课程设置： &nbsp;&nbsp;
                 <RadioGroup onChange={this.changeRa}>
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
                 <RadioGroup onChange={this.changeRa}>
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
                 <RadioGroup onChange={this.changeRa}>
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
                 <RadioGroup onChange={this.changeRa}>
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
                 <RadioGroup onChange={this.changeRa}>
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
                 <RadioGroup onChange={this.changeRa}>
                   {this.state.list.map((item, i) => {
                     return (
                       <Label className='radio-list__label' for={i} key={i}>
                         <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                       </Label>
                     )
                   })}
                 </RadioGroup>
             </View>
             <Button size='mini' style={{display:'block', margin:'1rem auto'}}>提交</Button>
           </AtTabsPane>
           <AtTabsPane>
             <View className='tab-content'>后勤服务评估</View>
           </AtTabsPane>
           <AtTabsPane>
             <View className='tab-content'>综合评估</View>
           </AtTabsPane>
           <AtTabsPane>
             <View className='tab-content'>建议</View>
           </AtTabsPane>
         </AtTabs>
       </View>
     </View>
  }
}
