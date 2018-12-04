import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './activity.css'

export default class Activity extends Component {

  config = {
    navigationBarTitleText: '活动'
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

