import Taro, { Component } from '@tarojs/taro'
import { View, Text, Label, Image, Button } from '@tarojs/components'

import './settingUp.css'
import btnNext from '../../resource/public/btn_next.png'

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
      <View className='setup'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>消息</View>}
        <View className='tabList'>
          <View className='list'>
            <Label>个人信息</Label>
            <Text className='value'></Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list'>
            <Label>登录账号</Label>
            <Text className='value'>150****8888</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list'>
            <Label>登录密码</Label>
            <Text className='value'>******</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list'>
            <Label>支付密码</Label>
            <Text className='value'>******</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list'>
            <Label>收货信息</Label>
            <Text className='value'>山东济南高新区绿城花园2号楼…</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list'>
            <Label>实名认证</Label>
            <Text className='value'>已认证</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list bankID'>
            <Label>银行卡</Label>
            <Text className='value'></Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list'>
            <Label>意见反馈</Label>
            <Text className='value'></Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list'>
            <Label>关于平台</Label>
            <Text className='value'></Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list'>
            <Label>联系我们</Label>
            <Text className='value'></Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
        </View>
        <Button className='unlogin'>退出登录</Button>
      </View>
    )
  }
}

