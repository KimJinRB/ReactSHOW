import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './newsDetail.css'

export default class NewsDetail extends Component {

  config = {
    navigationBarTitleText: '消息详情'
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

