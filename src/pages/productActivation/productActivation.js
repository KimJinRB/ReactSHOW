import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './productActivation.css'

export default class ProductActivation extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  config = {
    navigationBarTitleText: '产品激活'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='activate'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>产品激活</View>}
        <View className='head'>
          <View className='title'>产品激活</View>
          <View className='hint'>扫描包装盒内卡片上的二维码激活，获取相应返券，返券可用于平台内所</View>
        </View>
        <Input className='activateCode' placeholder='请输入产品激活码' type='number'></Input>
        <View className='btnActivate'>激活</View>
        <View className='btnDetail'>详情说明</View>
      </View>
    )
  }
}

