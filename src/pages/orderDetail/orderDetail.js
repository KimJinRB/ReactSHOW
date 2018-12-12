import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './orderDetail.css'
import nextBtn from '../../resource/public/btn_next.png'
import goods from '../../resource/public/banner.png'
import address from '../../resource/order/address.png'
import btnKefu from '../../resource/order/btn_kefu.png'

export default class OrderDetail extends Component {

  config = {
    navigationBarTitleText: '订单详情'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='orderDetail'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>订单详情</View>}
        <View className='addressBox'>
          <Image className='icon' src={address}></Image>
          <View className='cont'>
            <Text className='name'>莱昂纳多</Text>
            <Text className='phone'>13012345678</Text>
            <View className='address'>北京市朝阳区某某街1100号某某小区1号楼1单元102室</View>
          </View>
          <Image className='nextBtn' src={nextBtn}></Image>
        </View>
        <View className='goodsInfo'>
          <View className='goods'>
            <Image className='goodsBanner' src={goods}></Image>
            <View className='infoBox'>
              <View className='goodsName'>购贝壳W2智能小米扫地机器人送等值话费</View>
              <View className='goodsPrice'>¥ 180.00</View>
              <View className='goodProperty'>已选：”银灰色“”小号“</View>
            </View>
          </View>
          <View className='btnType'>换货</View>
        </View>
        <View className='price'>
          <View className='priceList'>
            <Text className='typeName'>商品总价</Text><Text className='typeDetail'>¥180.00</Text>
          </View>
            <View className='priceList'>
            <Text className='typeName'>平台劵</Text><Text className='typeDetail'>水券1张¥20</Text>
          </View>
          <View className='priceList'>
            <Text className='typeName'>运费（快递）</Text><Text className='typeDetail'>0</Text>
          </View>
          <View className='priceList'>
            <Text className='typeName'>订单总价</Text><Text className='typeDetail'>¥160.00</Text>
          </View>
          <Text className='allPrice'>实际付款：100.00元</Text>
        </View>
        <View className='orderInfo'>
          <View className='infoTitle'>订单消息</View>
          <View className='infoList'>
            <Text className='typeName'>平台积分</Text><Text className='typeDetail'>10积分</Text>
          </View>
          <View className='infoList'>
            <Text className='typeName'>平台返劵</Text><Text className='typeDetail'>每月返券30元，共返9个月</Text>
          </View>
          <View className='infoList'>
            <Text className='typeName'>订单编号</Text><Text className='typeDetail'>123456789123456789</Text>
          </View>
          <View className='infoList'>
            <Text className='typeName'>创建时间</Text><Text className='typeDetail'>2018-10-24  19:26:43</Text>
          </View>
          <View className='infoList'>
            <Text className='typeName'>付款时间</Text><Text className='typeDetail'>2018-10-24  19:26:43</Text>
          </View>
        </View>
        <View className='footer'>
            <Image className='iconKefu' src={btnKefu}></Image> 
            <Text className='contactKefu'>联系客服</Text>
            <Text className='checkBtn'>查看物流</Text>
        </View>
      </View>
    )
  }
}
