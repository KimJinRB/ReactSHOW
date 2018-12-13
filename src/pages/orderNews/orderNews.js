import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image, Label } from '@tarojs/components'
import './orderNews.css'
import goods from '../../resource/public/banner.png'

export default class orderNews extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  config = {
    navigationBarTitleText: '订单消息'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='orderNews'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>订单消息</View>}
        <View className='content'>
          <View className='orderList'>
            <View className='orderHead'>
              <Text className='orderType'>待验收</Text>
              <Text className='orderTime'>12-12 12:32</Text>
            </View>
            <View className='orderContent'>
              <View className='subList'>
                <Image src={goods} className='goodsBanner'></Image>
                <View className='orderData'>
                  <View className='goodsName'>购贝壳W2智能小米扫地机器人送等值话费</View>
                  <View className='orderNumber'>运单编号：1234567890</View>
                </View>
              </View>
            </View>
          </View>
          <View className='orderList'>
            <View className='orderHead'>
              <Text className='orderType'>待验收</Text>
              <Text className='orderTime'>12-12 12:32</Text>
            </View>
            <View className='orderContent'>
              <View className='subList'>
                <Image src={goods} className='goodsBanner'></Image>
                <View className='orderData'>
                  <View className='goodsName'>购贝壳W2智能小米扫地机器人送等值话费</View>
                  <View className='orderNumber'>运单编号：1234567890</View>
                </View>
              </View>
            </View>
          </View>
          <View className='orderList'>
            <View className='orderHead'>
              <Text className='orderType'>待验收</Text>
              <Text className='orderTime'>12-12 12:32</Text>
            </View>
            <View className='orderContent'>
              <View className='subList'>
                <Image src={goods} className='goodsBanner'></Image>
                <View className='orderData'>
                  <View className='goodsName'>购贝壳W2智能小米扫地机器人送等值话费</View>
                  <View className='orderNumber'>运单编号：1234567890</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

