import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './recharge.css'

export default class Recharge extends Component {

  config = {
    navigationBarTitleText: '发现'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <View style='font-size:60px;color:red'>发现页面!</View>
      </View>
    )
  }
}

