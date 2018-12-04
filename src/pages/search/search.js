import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './search.css'

export default class Search extends Component {

  config = {
    navigationBarTitleText: '搜索'
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

