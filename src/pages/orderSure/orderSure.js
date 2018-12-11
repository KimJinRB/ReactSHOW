import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import './orderSure.css'
import nextBtn from '../../resource/my/btn_next.png'
import goods from '../../resource/index/banner.png'
import address from '../../resource/order/address.png'
import btnKefu from '../../resource/order/btn_kefu.png'

export default class Ordersure extends Component {

  config = {
    navigationBarTitleText: '订单确认'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='orderSure'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>订单确认</View>}
        <View className='addressBox'>
          <Image className='icon' src={address}></Image>
          <View className='cont'>
            <Text className='name'>莱昂纳多</Text>
            <Text className='phone'>13012345678</Text>
            <View className='clearBoth'></View>
            <View className='address'>北京市朝阳区某某街1100号某某小区1号楼1单元102室</View>
          </View>
          <Image className='nextBtn' src={nextBtn}></Image>
        </View>
        <View className='orderList'>
          <View className='goodsInfo'>
            <View className='goods'>
              <Image className='goodsBanner' src={goods}></Image>
              <View className='infoBox'>
                <View className='goodsName'>购贝壳W2智能小米扫地机器人送等值话费</View>
                <View className='goodsPrice'>¥ 180.00</View>
                <View className='goodProperty'>已选：”银灰色“”小号“</View>
              </View>
            </View>
            <View className='btnType'><Text className='returnBack'>返</Text>每月返券20元，共返9个月</View>
          </View>
          <View className='orderInfo'>
            <View className='priceList changeNumber'>
              <Text className='priceTitle'>购买数量</Text><View className='goodsNumber'><Text className='numberReduce'>-</Text><Text className='number'>2</Text><Text className='numberAdd'>+</Text></View>
            </View>
            <View className='priceList'>
              <Text className='priceTitle'>提货方式</Text><Text className='sendWay'>普通配送</Text>
            </View>
            <View className='priceList message'>
              <Text className='priceTitle'>买家留言</Text><Input type='text' placeholder='选填:填写内容已和买家协商确认'></Input>
            </View>
            <View className='total'>
              <Text className='totalPrice'>小计： 1000.00元</Text>
              <Text className='totalNumber'>共计1件商品</Text>
            </View>
          </View>
        </View>
        <View className='orderList'>
          <View className='goodsInfo'>
            <View className='goods'>
              <Image className='goodsBanner' src={goods}></Image>
              <View className='infoBox'>
                <View className='goodsName'>购贝壳W2智能小米扫地机器人送等值话费</View>
                <View className='goodsPrice'>¥ 180.00</View>
                <View className='goodProperty'>已选：”银灰色“”小号“</View>
              </View>
            </View>
            <View className='btnType'><Text className='returnBack'>返</Text>每月返券20元，共返9个月</View>
          </View>
          <View className='orderInfo'>
            <View className='priceList changeNumber'>
              <Text className='priceTitle'>购买数量</Text><View className='goodsNumber'><Text className='numberReduce'>-</Text><Text className='number'>1</Text><Text className='numberAdd'>+</Text></View>
            </View>
            <View className='priceList'>
              <Text className='priceTitle'>提货方式</Text><Text className='sendWay'>普通配送</Text>
            </View>
            <View className='priceList message'>
              <Text className='priceTitle'>买家留言</Text><Input type='text' placeholder='选填:填写内容已和买家协商确认'></Input>
            </View>
            <View className='total'>
              <Text className='totalPrice'>小计： 1000.00元</Text>
              <Text className='totalNumber'>共计1件商品</Text>
            </View>
          </View>
        </View>
        <View className='cryptonym'><Input type='checkbox' className='radio'></Input>匿名购买</View>
        <View className='footer'>
            <View className='all'>
              <Text className='allNumber'>共2件商品</Text>
              <Text className='allPrice'>共计：99900.00元</Text>
            </View>
            <View className='sureBtn'>提交订单</View>
        </View>
      </View>
    )
  }
}
