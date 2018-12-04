import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './news.css'

export default class News extends Component {

  config = {
    navigationBarTitleText: '消息'
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

