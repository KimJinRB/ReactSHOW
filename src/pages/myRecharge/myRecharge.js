import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './myRecharge.css'

export default class MyRecharge extends Component {

  config = {
    navigationBarTitleText: '我的充值'
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
        <Text>撒的发顺丰!</Text>
      </View>
    )
  }
}

