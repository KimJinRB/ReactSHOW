import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './goodsList.css'

export default class GoodsList extends Component {

  config = {
    navigationBarTitleText: '宝贝列表'
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

