import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './productActivation.css'

export default class ProductActivation extends Component {

  config = {
    navigationBarTitleText: '产品激活'
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

