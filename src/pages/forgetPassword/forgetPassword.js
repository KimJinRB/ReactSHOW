import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './forgetPassword.css'

export default class ForgetPassword extends Component {

  config = {
    navigationBarTitleText: '忘记密码'
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

