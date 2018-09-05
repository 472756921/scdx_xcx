import Taro, { Component } from '@tarojs/taro'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { View} from '@tarojs/components'
import './index.less'
export default  class ClassEvaluation extends Component{
  constructor(props){
    super(props);
    this.state = {
      current: 0
    }
  }
  handleClick(index){
    this.setState({
      current: index
    })
  }
  render(){
    const tabList1 = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
     return  <View className='panel'>
       <View className='panel__title'>滑动切换内容</View>
       <View className='panel__content'>
         <AtTabs current={this.state.current} tabList={tabList1} onClick={this.handleClick.bind(this)}>
           <AtTabsPane>
             <View className='tab-content'>标签页一的内容</View>
           </AtTabsPane>
           <AtTabsPane>
             <View className='tab-content'>标签页二的内容</View>
           </AtTabsPane>
           <AtTabsPane>
             <View className='tab-content'>标签页三的内容</View>
           </AtTabsPane>
         </AtTabs>
       </View>
     </View>
  }
}
