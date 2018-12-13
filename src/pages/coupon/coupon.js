import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './coupon.css'
import noData from '../../resource/coupon/icon_quan_dif.png'
export default class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  config = {
    navigationBarTitleText: '平台返劵'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='coupon'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>平台返劵</View>}
        <View className='head'>
          <Text className='tab active'>未解冻</Text>
          <Text className='tab'>未使用</Text>
          <Text className='tab'>已使用</Text>
        </View>
        <View className='content'>
          <View className='list'> 
            <Text className='couponType'>水劵</Text>
            <View  className='couponBox'>
              <Text className='couponTitle'>10</Text>
              <Text className='couponUint'>元</Text>
              <View className='couponTime'>有效期至2099-01-01</View>
            </View>
            <Button className='status'>未激活</Button>
          </View>
          <View className='list'> 
            <Text className='couponType'>电劵</Text>
            <View  className='couponBox'>
              <Text className='couponTitle'>10</Text>
              <Text className='couponUint'>元</Text>
              <View className='couponTime'>有效期至2099-01-01</View>
            </View>
            <Button className='status'>去使用</Button>
          </View>
          <View className='list'> 
            <Text className='couponType'>燃气劵</Text>
            <View  className='couponBox'>
              <Text className='couponTitle'>10</Text>
              <Text className='couponUint'>元</Text>
              <View className='couponTime'>有效期至2099-01-01</View>
            </View>
            <Button className='status'>已使用</Button>
          </View>
        </View>
        <View className='noData'>
          <Image src={noData} className='noDataImg'></Image>
          <View className='noDataCon'>您没有已使用的劵</View>
        </View>
      </View>
    )
  }
}

