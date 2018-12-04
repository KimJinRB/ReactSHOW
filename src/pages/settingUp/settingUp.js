import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './settingUp.css'

export default class SettingUp extends Component {

  config = {
    navigationBarTitleText: '设置'
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

