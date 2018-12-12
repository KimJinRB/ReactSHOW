import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, Input} from '@tarojs/components'
import './index.css'
import banner from '../../resource/public/banner.png'
import activate from '../../resource/index/activate.png'
import goods from '../../resource/index/goods.png'
import invite from '../../resource/index/invite.png'
import interal from '../../resource/index/interal.png'
import search from '../../resource/index/search.png'
import goods1 from '../../resource/index/goods1.png'
import goods2 from '../../resource/index/goods2.png'
import tuiguang1 from '../../resource/index/img_tuiguang1.png'
import tuiguang2 from '../../resource/index/img_tuiguang2.png'
import img_ad from '../../resource/index/img_ad.png'


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
    
 }

  render () {
    return (
      <View className='index'>
        {/* 搜索开始 */}
        <View className='head'>
          <Image src={search}></Image>
          <Input type='search' placeholder='搜一搜' placeholderStyle=''></Input>
        </View>
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
        {/* 消息提示 */}
        <View className='newsBox'>
          <Text className='title'>消息提示</Text>
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            vertical
            circular
            autoplay>
            <SwiperItem>
              <View className='demo-text-1'>1</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>2</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>3</View>
            </SwiperItem>
          </Swiper>
          <Text className='newsTime'>1小时前</Text>
          <Text className='newsMore'>更多</Text>
        </View>
        {/* 活动 */}
        <View className='activityBox'>
          <Image src={tuiguang1}></Image>
          <Image src={tuiguang2}></Image>
        </View>
        {/* 商品列表 */}
        <View className='content'>
          {/* 超值推荐 */}
          <View className='recommend'>
            <View className='goodsHead'>
              <Text className='goodsTitle'>超值推荐</Text>
              {/* <Text className='goodsMore'>更多</Text> */}
            </View>
            <View className='goodsList'>
              <View className='subList'>
                <Image src={goods1} className='goodsBanner'></Image>
                <View className='goodsName'>智能手表</View>
                <View className='goodsPrice'>￥ 998</View>
              </View>
              <View className='subList'>
                <Image src={goods2} className='goodsBanner'></Image>
                <View className='goodsName'>智能手表</View>
                <View className='goodsPrice'>￥ 998</View>
              </View>
            </View>
            <Image src={img_ad} style='margin-top:20px;display:block;'></Image>
          </View>
          {/* 新品上线 */}
          <View className='newGoods'>
            <View className='goodsHead'>
              <Text className='goodsTitle'>新品上线</Text>
              <Text className='goodsMore'>更多 >></Text>
            </View>
            <View className='goodsList'>
              <View className='subList'>
                <Image src={goods1} className='goodsBanner'></Image>
                <View className='goodsName'>智能手表</View>
                <View className='goodsPrice'>￥ 998</View>
              </View>
              <View className='subList'>
                <Image src={goods2} className='goodsBanner'></Image>
                <View className='goodsName'>智能手表</View>
                <View className='goodsPrice'>￥ 998</View>
              </View>
              <View className='subList'>
                <Image src={goods1} className='goodsBanner'></Image>
                <View className='goodsName'>智能手表</View>
                <View className='goodsPrice'>￥ 998</View>
              </View>
              <View className='subList'>
                <Image src={goods2} className='goodsBanner'></Image>
                <View className='goodsName'>智能手表</View>
                <View className='goodsPrice'>￥ 998</View>
              </View>
              <View className='clearBoth'></View>
            </View>
          </View>
          </View>
      </View>
    )
  }
   
}

