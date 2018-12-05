import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Input, Label, Button, Image } from '@tarojs/components'
import './my.css'
import header from '../../resource/my/useHeader.png'
import btnNext from '../../resource/my/btn_next.png'
import icon_grzx_t1 from '../../resource/my/icon_grzx_t1.png'
import icon_grzx_t2 from '../../resource/my/icon_grzx_t2.png'
import icon_grzx_t3 from '../../resource/my/icon_grzx_t3.png'

export default class My extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  componentWillMount () {
    
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='my'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>我的</View>}
        <View className='head'>
          <View className='headTop'>
            <Image src={header} className='useHeader'></Image>
            <View className='nameBox'>
              <Text className='name'>小鱼</Text>
              <Text className='phone'>12345678952</Text>
            </View>
            <Image src={btnNext} className='infoGo'></Image>
          </View>
          <View className='headBottom'>
            <View className='headList'>
              <Image src={icon_grzx_t1}></Image>
              <Text>余额</Text>
              <Text>1256.32</Text>
            </View>
            <View className='headList'>
              <Image src={icon_grzx_t2}></Image>
              <Text>优惠券</Text>
              <Text>123</Text>
            </View>
            <View className='headList'>
              <Image src={icon_grzx_t3}></Image>
              <Text>积分</Text>
              <Text>123.23</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

