import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './myPurchased.css'

export default class MyPurchased extends Component {

  config = {
    navigationBarTitleText: '我的加购'
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

