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
                 <RadioGroup >
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
                 <RadioGroup >
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
                 <RadioGroup >
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
                 <RadioGroup >
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
                 <RadioGroup >
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
                 <RadioGroup >
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
                 <RadioGroup >
                   {this.state.list.map((item, i) => {
                     return (
                       <Label className='radio-list__label' for={i} key={i}>
                         <Radio className='radio-list__radio_2 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                       </Label>
                     )
                   })}
                 </RadioGroup>
             </View>
             <Button size='mini' style={{display:'block', margin:'1rem auto', 'width':'100px'}}>提交</Button>
           </AtTabsPane>

           <AtTabsPane style='line-height: 24px'>
             <Text className='tab-content' style={{float:'left',height: '90px'}}>餐饮：</Text>
             <View className='tab-content'>
               菜品卫生
               <RadioGroup >
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
               <Text style={{marginTop:'10px',distplay:'block'}}>就餐环境与服务</Text>
               <RadioGroup >
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
               <RadioGroup >
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
               <Text style={{marginTop:'10px',distplay:'block'}}>客房服务及时有效</Text>
               <RadioGroup >
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
               <RadioGroup >
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
               <Text style={{marginTop:'10px',distplay:'block'}}>司机态度</Text>
               <RadioGroup >
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
             </View>
             <Button size='mini' style={{display:'block', margin:'1rem auto', 'width':'100px'}}>提交</Button>
           </AtTabsPane>

           <AtTabsPane style='line-height: 24px'>
             <View className='tab-content'>
               您对本期培训班的总体满意度是
               <RadioGroup >
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
               <Text style={{marginTop:'10px',distplay:'block'}}>您参加本期培训后的总体感觉是</Text>
               <RadioGroup >
                 {this.state.list.map((item, i) => {
                   return (
                     <Label className='radio-list__label' for={i} key={i}>
                       <Radio className='radio-list__radio_1 radio-list__radio' value={item.value} checked={item.checked}> {item.text} </Radio>
                     </Label>
                   )
                 })}
               </RadioGroup>
             </View>
             <Button size='mini' style={{display:'block', margin:'1rem auto', 'width':'100px'}}>提交</Button>
           </AtTabsPane>

           <AtTabsPane>
             <View className='tab-content'>
               <Text>自己的收获主要是</Text>
               <Textarea style='margin: 6px;background:#fff;width:85%;min-height:80px;padding:0 30rpx;border:1px solid #eee' autoHeight/>
               <Text>您对改进培训班的意见和建议</Text>
               <Textarea style='margin: 6px;background:#fff;width:85%;min-height:80px;padding:0 30rpx;border:1px solid #eee' autoHeight/>
             </View>


             <Button size='mini' style={{display:'block', margin:'1rem auto', 'width':'100px'}}>提交</Button>
           </AtTabsPane>
         </AtTabs>
       </View>
     </View>
  }
}
