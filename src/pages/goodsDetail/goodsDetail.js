import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './goodsDetail.css'
import banner from '../../resource/public/banner.png'
import btnNext from '../../resource/public/btn_next.png'
import icon_tese from '../../resource/goods/icon_tese.png'
import icon_tese2 from '../../resource/goods/icon_tese2.png'
import icon_tese3 from '../../resource/goods/icon_tese3.png'
import icon_tese4 from '../../resource/goods/icon_tese4.png'
import btn_kefu from '../../resource/goods/btn_kefu.png'
import btn_gouwuche from '../../resource/goods/btn_gouwuche.png'
import btn_xihuan from '../../resource/goods/btn_xihuan.png'

export default class GoodsDetail extends Component {

  config = {
    navigationBarTitleText: '宝贝详情'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='goodsDet'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>宝贝详情</View>}
        <View className='banner'>
          <Image src={banner}></Image>
        </View>
        <View className='goodsInfo'>
            <View className='name'>购贝壳W2智能蓝牙耳机手环送等值话费</View>
            <View className='detail'>APP智能操控 智商高扫得干净拖得快 智能路径规划大风压澎湃吸力 小米石头扫地机器人2代拖地机智能家用全自动吸尘器</View>
            <View className='price'>
              <Text className='newPrice'>¥ 1800.00</Text>
              <Text className='oldPrice'>原价 ： 2999.00</Text>
            </View>
            <View className='characteristic'>
              <View className='list'>
                <Image src={icon_tese} className='icon'></Image>
                <Text className='explain'>持久待机</Text>
                <Text className='num'>2000mAh</Text>
              </View>
              <View className='list'>
                <Image src={icon_tese2} className='icon'></Image>
                <Text className='explain'>急速畅玩</Text>
                <Text className='num'>4GB</Text>
              </View>
              <View className='list'>
                <Image src={icon_tese3} className='icon'></Image>
                <Text className='explain'>立体扬声</Text>
                <Text className='num'>7声道</Text>
              </View>
              <View className='list'>
                <Image src={icon_tese4} className='icon'></Image>
                <Text className='explain'>屏幕分辨率</Text>
                <Text className='num'>1600×1600</Text>
              </View>
            </View>
            <View className='discounts'>
              <Text className='discountsLogo'>返</Text>
              <Text className='discountsDet'>每月返券20元，共返9个月</Text>
            </View>
          </View>
          <View className='choose'>
              <Text className='chooseType'>已选</Text>
              <Text className='chooseNum'>扫地机器人   X   1</Text>
              <Image className='nextBtn' src={btnNext}></Image>
          </View>
          <View className='particulars'>
            啊打发士大夫撒发达第三方撒大放送
            打分是打发是打发付费的gas
          </View>
          <View className='footer'>
            <View className='list'>
              <Image className='icon' src={btn_kefu}></Image>
              <Text className='explain'>客服</Text>
            </View>
            <View className='list'>
              <Image className='icon' src={btn_xihuan}></Image>
              <Text className='explain'>喜欢</Text>
            </View>
            <View className='list'>
              <Image className='icon' src={btn_gouwuche}></Image>
              <Text className='explain'>购物车</Text>
            </View>
            <View className='list btnBuy'>
              立即购买
            </View>
          </View>
      </View>
    )
  }
}

