import Taro, { Component } from '@tarojs/taro'
import { View, Text, Label, Image, Button } from '@tarojs/components'

import './settingUp.css'
import publicFun from '../../public/public'
import btnNext from '../../resource/public/btn_next.png'

export default class SettingUp extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  config = {
    navigationBarTitleText: '设置'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  navigateTo = e => {
    publicFun.navigateTo(e);
  }
  switchTab = e => {
    publicFun.switchTab(e);
  }
  redirectTo = e => {
    publicFun.redirectTo(e);
  }

  render () {
    return (
      <View className='setup'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>消息</View>}
        <View className='tabList'>
          <View className='list' data-url='personInfo' onclick={this.navigateTo}>
            <Label>个人信息</Label>
            <Text className='value'></Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list' data-url='orderNews' onclick={this.navigateTo}>
            <Label>登录账号</Label>
            <Text className='value'>150****8888</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list' data-url='orderNews' onclick={this.navigateTo}>
            <Label>登录密码</Label>
            <Text className='value'>******</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list' data-url='orderNews' onclick={this.navigateTo}>
            <Label>支付密码</Label>
            <Text className='value'>******</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list' data-url='orderNews' onclick={this.navigateTo}>
            <Label>收货信息</Label>
            <Text className='value'>山东济南高新区绿城花园2号楼…</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list' data-url='orderNews' onclick={this.navigateTo}>
            <Label>实名认证</Label>
            <Text className='value'>已认证</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list bankID' data-url='orderNews' onclick={this.navigateTo}>
            <Label>银行卡</Label>
            <Text className='value'></Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list' data-url='orderNews' onclick={this.navigateTo}>
            <Label>意见反馈</Label>
            <Text className='value'></Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list' data-url='orderNews' onclick={this.navigateTo}>
            <Label>关于平台</Label>
            <Text className='value'></Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list' data-url='orderNews' onclick={this.navigateTo}>
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

