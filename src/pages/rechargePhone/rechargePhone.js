import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import './rechargePhone.css'
import btn_tongxunlu from '../../resource/pay/btn_tongxunlu.png'
import btn_quan from '../../resource/pay/btn_quan.png'
import btn_czjilu from '../../resource/pay/btn_czjilu.png'
import PayNow from '../../components/PayNow/PayNow'

export default class RechargePhone extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  config = {
    navigationBarTitleText: '花费充值'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='rechargePhone'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>花费充值<Image src={btn_czjilu}  className='czjilu'></Image><Image src={btn_quan} className='quan'></Image></View>}
        <PayNow></PayNow>
        <View className='phoneBox'>
          <View className='phone'>
            <Input value='12345678911' className='phoneNumber'></Input>
            <Text className='phoneAddress'>默认号码（山东移动）</Text>
          </View>
          <Image className='icon' src={btn_tongxunlu}></Image>
        </View>
        <View className='quanType'>
          <View className='list'>
            <View className='faceValue'>10元</View>
            <View className='realValue'>售价10元</View>
          </View>
          <View className='list'>
            <View className='faceValue'>20元</View>
            <View className='realValue'>售价10元</View>
          </View>
          <View className='list'>
            <View className='faceValue'>30元</View>
            <View className='realValue'>售价30元</View>
          </View>
        </View>
        <View className='quanType'>
          <View className='list'>
            <View className='faceValue'>50元</View>
            <View className='realValue'>售价45元</View>
          </View>
          <View className='list'>
            <View className='faceValue'>100元</View>
            <View className='realValue'>售价90元</View>
          </View>
          <View className='list'>
            <View className='faceValue'>300元</View>
            <View className='realValue'>售价260元</View>
          </View>
        </View>
        <View className='buyNow'>立即支付</View>
      </View>
    )
  }
}

