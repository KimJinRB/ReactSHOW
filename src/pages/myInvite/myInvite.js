import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './myInvite.css'

export default class MyInvite extends Component {

  config = {
    navigationBarTitleText: '我的邀请'
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

