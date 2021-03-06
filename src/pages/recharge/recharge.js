import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem} from '@tarojs/components'
import './recharge.css'
import btn_chongzhi1 from '../../resource/recharge/btn_chongzhi1.png'
import btn_chongzhi2 from '../../resource/recharge/btn_chongzhi2.png'
import btn_chongzhi3 from '../../resource/recharge/btn_chongzhi3.png'
import btn_chongzhi4 from '../../resource/recharge/btn_chongzhi4.png'
import btn_chongzhi5 from '../../resource/recharge/btn_chongzhi5.png'
import btn_chongzhi6 from '../../resource/recharge/btn_chongzhi6.png'
import btn_chongzhi7 from '../../resource/recharge/btn_chongzhi7.png'
import btn_chongzhi8 from '../../resource/recharge/btn_chongzhi8.png'
import banner from '../../resource/public/banner.png'
import news from '../../resource/recharge/goods2.png'

export default class Recharge extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  config = {
    navigationBarTitleText: '发现'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='recharge'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>发现</View>}
        {/* 轮播开始 */}
        <View className='banner'>
          <Swiper 
            className='testH'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            autoplay='true'
            circular='true'
            duration='200'
            >
            <SwiperItem>
              <View className='demo-text-1' data-id='1' onclick={this.bannerDetail}>
                <Image src={banner}></Image>
              </View>
            </SwiperItem>
            <SwiperItem >
              <View className='demo-text-2' data-id='2' onclick={this.bannerDetail}>
                <Image src={banner}></Image>
              </View>
            </SwiperItem>
            <SwiperItem >
              <View className='demo-text-3' data-id='3' onclick={this.bannerDetail}>
                <Image src={banner}></Image>
              </View>
            </SwiperItem>
          </Swiper>
        </View>
        {/* 轮播结束 */}
        <View className='newContent'>
          <View className='title'>贝壳资讯</View>
          <View className='newBox'>
            <View className='newList'>
              <Image src={news}></Image>
              <View className='newRight'>
                <View className='newTitle'>前9月国企利润同比下降1.6%钢铁行业</View>
                <View className='newDetail'>激光投影键盘，让你的办公更方便扭亏为盈</View>
                <View className='newTime'>2018-12-12</View>
              </View>
            </View>
            <View className='newList'>
              <Image src={news}></Image>
              <View className='newRight'>
                <View className='newTitle'>前9月国企利润同比下降1.6%钢铁行业</View>
                <View className='newDetail'>激光投影键盘，让你的办公更方便扭亏为盈</View>
                <View className='newTime'>2018-12-12</View>
              </View>
            </View>
            <View className='newList'>
              <Image src={news}></Image>
              <View className='newRight'>
                <View className='newTitle'>前9月国企利润同比下降1.6%钢铁行业</View>
                <View className='newDetail'>激光投影键盘，让你的办公更方便扭亏为盈</View>
                <View className='newTime'>2018-12-12</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

