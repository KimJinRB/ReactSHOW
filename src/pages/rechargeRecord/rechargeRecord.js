import Taro, { Component } from '@tarojs/taro'
import { View, Text, Label, Image,  } from '@tarojs/components'
import './rechargeRecord.css'
import btn_chongzhi1 from '../../resource/recharge/btn_chongzhi1.png'
import btn_chongzhi2 from '../../resource/recharge/btn_chongzhi2.png'
import btn_chongzhi3 from '../../resource/recharge/btn_chongzhi3.png'
import btn_chongzhi4 from '../../resource/recharge/btn_chongzhi4.png'
import btn_chongzhi5 from '../../resource/recharge/btn_chongzhi5.png'
import btn_chongzhi6 from '../../resource/recharge/btn_chongzhi6.png'
import btn_chongzhi7 from '../../resource/recharge/btn_chongzhi7.png'
import btnNext from '../../resource/my/btn_next.png'

export default class Recharge extends Component {

  config = {
    navigationBarTitleText: '充值记录'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='rechargeR'>
       {process.env.TARO_ENV === 'h5' && <View className='header'>充值记录</View>}
       
       <View className='tabList'>
          <View className='title'>充值</View>
          <View className='list'>
            <Image src={btn_chongzhi1} className='icon'></Image>
            <Label>话费</Label>
            <Text className='value'>15088888888</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi5} className='icon'></Image>
            <Label>水费</Label>
            <Text className='value'>15088888888</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi6} className='icon'></Image>
            <Label>电费</Label>
            <Text className='value'>15088888888</Text>
            <Image src={btnNext} className='btnNext'></Image>
          </View>
        </View>
       {/*  更多充值 */}
        <View className='title'>更多充值</View>
        <View className='moreList'>
          <View className='list'>
            <Image src={btn_chongzhi2} className='icon'></Image>
            <Text className='value'>流量</Text>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi3} className='icon'></Image>
            <Text className='value'>宽带</Text>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi7} className='icon'></Image>
            <Text className='value'>燃气费</Text>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi4} className='icon'></Image>
            <Text className='value'>Q币</Text>
          </View>
        </View>
      </View>
    )
  }
}

