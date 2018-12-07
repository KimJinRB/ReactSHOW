import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image, Input} from '@tarojs/components'
import './allGoods.css'
import goods1 from '../../resource/index/goods1.png'
import goods2 from '../../resource/index/goods2.png'
import search from '../../resource/index/search.png'


export default class Index extends Component {

  config = {
    navigationBarTitleText: '全部商品'
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
        {/* 商品列表 */}
        <View className='content'>
          <View className='newGoods'>
            <View className='goodsHead'>
              <Text className='goodsTitle'>全部商品</Text>
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

