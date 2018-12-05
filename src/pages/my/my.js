import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Input, Label, Button, Image } from '@tarojs/components'
import './my.css'
import header from '../../resource/my/useHeader.png'
import btnNext from '../../resource/my/btn_next.png'
import icon_grzx_t1 from '../../resource/my/icon_grzx_t1.png'
import icon_grzx_t2 from '../../resource/my/icon_grzx_t2.png'
import icon_grzx_t3 from '../../resource/my/icon_grzx_t3.png'
import btn_list1 from '../../resource/my/btn_grzx_list1.png'
import btn_list2 from '../../resource/my/btn_grzx_list2.png'
import btn_list3 from '../../resource/my/btn_grzx_list3.png'
import btn_list4 from '../../resource/my/btn_grzx_list4.png'
import btn_list5 from '../../resource/my/btn_grzx_list5.png'
import btn_list6 from '../../resource/my/btn_grzx_list6.png'

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
        <View className='listBox'>
          <View className='list'>
            <Image src={btn_list1} className='iconImg'></Image>
            <View className='lists'>
              <Text className='listName'>我的订单</Text>
              <Image src={btnNext} className='infoGo'></Image>
            </View>
          </View>
          <View className='list'>
            <Image src={btn_list2} className='iconImg'></Image>
            <View className='lists'>
              <Text className='listName'>我的充值</Text>
              <Image src={btnNext} className='infoGo'></Image>
              </View>
          </View>
          <View className='list'>
            <Image src={btn_list3} className='iconImg'></Image>
            <View className='lists'>
              <Text className='listName'>我的收藏</Text>
              <Image src={btnNext} className='infoGo'></Image>
            </View>
          </View>
          <View className='list'>
            <Image src={btn_list4} className='iconImg'></Image>
            <View className='lists'>
              <Text className='listName'>我的加购</Text>
              <Image src={btnNext} className='infoGo'></Image>
            </View>
          </View>
          <View className='list'>
            <Image src={btn_list5} className='iconImg'></Image>
            <View className='lists'>
              <Text className='listName'>我的邀请</Text>
              <Image src={btnNext} className='infoGo'></Image>
            </View>
          </View>
          <View className='list'>
            <Image src={btn_list6} className='iconImg'></Image>
            <View className='lists'>
              <Text className='listName'>设置</Text>
              <Image src={btnNext} className='infoGo'></Image>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

