import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './banner.css'

export default class Banner extends Component {

  config = {
    navigationBarTitleText: 'Banner详情'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Image src='' className='headerImg'></Image>
        <Text>活动规则</Text>
        <Text>撒的发顺丰!</Text>
      </View>
    )
  }
}

