import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './login.css'

export default class Login extends Component {

  config = {
    navigationBarTitleText: '登录'
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

