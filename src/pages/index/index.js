import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, Input} from '@tarojs/components'
import './index.css'
import banner from '../../resource/index/banner.png'
import activate from '../../resource/index/activate.png'
import goods from '../../resource/index/goods.png'
import invite from '../../resource/index/invite.png'
import interal from '../../resource/index/interal.png'
import search from '../../resource/index/search.png'


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  bannerDetail = e => {
    console.log(e.currentTarget.dataset.id)
    Taro.navigateTo({
      url:'/pages/activity/activity?id=' + e.currentTarget.dataset.id
    })
 }

  render () {
    return (
      <View className='index'>
        <View class='head'>
          <Image src={search}></Image>
          <Input type='search' placeholder='搜一搜'></Input>
        </View>
        {/* 轮播开始 */}
        <Swiper
        className='testH'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        autoplay='true'
        circular='true'
        duration='200'
        indicatorDots
        autoplay>
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
      {/* 轮播结束 */}
      <View className='headTab'>
        <View className='headTabL'>
          <Image src={goods}></Image>
          <Text>全部宝贝</Text>
        </View>
        <View className='headTabL'>
          <Image src={activate}></Image>
          <Text>产品激活</Text>
        </View>
        <View className='headTabL'>
          <Image src={invite}></Image>
          <Text>邀请好友</Text>
        </View>
        <View className='headTabL'>
          <Image src={interal}></Image>
          <Text>积分活动</Text>
        </View>
      </View>
      </View>
    )
  }
   
}

