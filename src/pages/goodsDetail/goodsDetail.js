import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './goodsDetail.css'

export default class GoodsDetail extends Component {

  config = {
    navigationBarTitleText: '宝贝详情'
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

