import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './recharge.css'

export default class Recharge extends Component {

  config = {
    navigationBarTitleText: '充值'
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

