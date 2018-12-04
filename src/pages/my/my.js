import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './my.css'

export default class My extends Component {

  config = {
    navigationBarTitleText: '我的'
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

