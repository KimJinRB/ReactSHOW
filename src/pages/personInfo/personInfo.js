import Taro, { Component } from '@tarojs/taro'
import { View, Text, Label, Image, Button } from '@tarojs/components'

import './personInfo.css'
import btnNext from '../../resource/public/btn_next.png'
import header from '../../resource/my/useHeader.png'

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
      <View className='person'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>设置</View>}
        <View className='tabList'>
          <View className='list heade'>
            <Label>头像</Label>
            <Image src={btnNext} className='btnNext'></Image>
            <Image src={header} className='headPortrait'></Image>
          </View>
          <View className='list'>
            <Label>昵称</Label>
            <Image src={btnNext} className='btnNext'></Image>
            <Text className='value'>奔跑的小包子</Text>
          </View>
          <View className='list'>
            <Label>性别</Label>
            <Image src={btnNext} className='btnNext'></Image>
            <Text className='value'>男</Text>
          </View>
          <View className='list'>
            <Label>地区</Label>
            <Image src={btnNext} className='btnNext'></Image>
            <Text className='value'>山东济南</Text>
          </View>
          <View className='list'>
            <Label>年龄</Label>
            <Image src={btnNext} className='btnNext'></Image>
            <Text className='value'>30</Text>
          </View>
          <View className='list'>
            <Label>星座</Label>
            <Image src={btnNext} className='btnNext'></Image>
            <Text className='value'>狮子</Text>
          </View>
          <View className='list'>
            <Label>职业</Label>
            <Image src={btnNext} className='btnNext'></Image>
            <Text className='value'>画家</Text>
          </View>
          <View className='list'>
            <Label>收入</Label>
            <Image src={btnNext} className='btnNext'></Image>
            <Text className='value'>50万/年</Text>
          </View>
      </View>
    </View>
    )
  }
}

