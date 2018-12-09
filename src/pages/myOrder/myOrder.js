import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image, Label } from '@tarojs/components'
import './myOrder.css'
import goods from '../../resource/index/banner.png'

export default class MyOrder extends Component {

  config = {
    navigationBarTitleText: '我的订单'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='myOrder'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>我的订单</View>}
        <View className='head'>
          <Text className='tab '>全部</Text>
          <Text className='tab active'>待付款</Text>
          <Text className='tab'>待发货</Text>
          <Text className='tab'>待验收</Text>
          <Text className='tab'>退货中</Text>
        </View>
        <View className='content'>
          <View className='orderList'>
            <View className='orderHead'>
              <Text className='orderTime'>12-12 12:32</Text>
              <Text className='orderType'>待验收</Text>
            </View>
            <View className='orderContent'>
              <View className='subList'>
                <Image src={goods} className='goodsBanner'></Image>
                <View className='orderData'>
                  <View className='goodsName'>购贝壳W2智能小米扫地机器人送等值话费</View>
                  <View className='goodsSize'>
                    <Text>银灰色</Text><Text>小号</Text><Text>×1</Text><Text className='goodsPrise'>￥199</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className='orderFoot'>
              <View className='total'>
                <Text className='allPrise'>￥1999</Text><Text>应付金额：</Text><Text>共2件商品</Text>
              </View>
              <View className='buttonBox'>
                <Text className='active'>确认收货</Text><Text>查看物流</Text>
              </View>
            </View>
          </View>
          <View className='orderList'>
            <View className='orderHead'>
              <Text className='orderTime'>12-12 12:32</Text>
              <Text className='orderType'>待付款</Text>
            </View>
            <View className='orderContent'>
              <View className='subList'>
                <Image src={goods} className='goodsBanner'></Image>
                <View className='orderData'>
                  <View className='goodsName'>购贝壳W2智能小米扫地机器人送等值话费</View>
                  <View className='goodsSize'>
                    <Text>银灰色</Text><Text>小号</Text><Text>×1</Text><Text className='goodsPrise'>￥199</Text>
                  </View>
                </View>
              </View>
              <View className='subList'>
                <Image src={goods} className='goodsBanner'></Image>
                <View className='orderData'>
                  <View className='goodsName'>购贝壳W2智能小米扫地机器人送等值话费</View>
                  <View className='goodsSize'>
                    <Text>银灰色</Text><Text>小号</Text><Text>×1</Text><Text className='goodsPrise'>￥199</Text>
                  </View>
                </View>
              </View>
              
            </View>
            <View className='orderFoot'>
              <View className='total'>
                <Text className='allPrise'>￥1999</Text><Text>应付金额：</Text><Text>共2件商品</Text>
              </View>
              <View className='buttonBox'>
                <Text className='active'>立即付款</Text>
              </View>
            </View>
          </View>
          <View className='orderList'>
            <View className='orderHead'>
              <Text className='orderTime'>12-12 12:32</Text>
              <Text className='orderType'>待发货</Text>
            </View>
            <View className='orderContent'>
             <View className='subList'>
                <Image src={goods} className='goodsBanner'></Image>
                <View className='orderData'>
                  <View className='goodsName'>购贝壳W2智能小米扫地机器人送等值话费</View>
                  <View className='goodsSize'>
                    <Text>银灰色</Text><Text>小号</Text><Text>×1</Text><Text className='goodsPrise'>￥199</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className='orderFoot'>
              <View className='total'>
                <Text className='allPrise'>￥1999</Text><Text>应付金额：</Text><Text>共2件商品</Text>
              </View>
              <View className='buttonBox'>
                <Text>查看物流</Text>
              </View>
            </View>
          </View>
          <View className='orderList'>
            <View className='orderHead'>
              <Text className='orderTime'>12-12 12:32</Text>
              <Text className='orderType'>退货中</Text>
            </View>
            <View className='orderContent'>
              <View className='subList'>
                <Image src={goods} className='goodsBanner'></Image>
                <View className='orderData'>
                  <View className='goodsName'>购贝壳W2智能小米扫地机器人送等值话费</View>
                  <View className='goodsSize'>
                    <Text>银灰色</Text><Text>小号</Text><Text>×1</Text><Text className='goodsPrise'>￥199</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className='orderFoot'>
              <View className='total'>
                <Text className='allPrise'>￥1999</Text><Text>应付金额：</Text><Text>共2件商品</Text>
              </View>
              <View className='buttonBox'>
                <Text className='active'>确认收货</Text><Text>查看物流</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

