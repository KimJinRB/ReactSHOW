import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './setingCenter.css'
import btn_chongzhi1 from '../../resource/recharge/btn_chongzhi1.png'
import btn_chongzhi2 from '../../resource/recharge/btn_chongzhi2.png'
import btn_chongzhi3 from '../../resource/recharge/btn_chongzhi3.png'
import btn_chongzhi4 from '../../resource/recharge/btn_chongzhi4.png'
import btn_chongzhi5 from '../../resource/recharge/btn_chongzhi5.png'
import btn_chongzhi6 from '../../resource/recharge/btn_chongzhi6.png'
import btn_chongzhi7 from '../../resource/recharge/btn_chongzhi7.png'
import btn_chongzhi8 from '../../resource/recharge/btn_chongzhi8.png'
import news from '../../resource/recharge/goods2.png'

export default class SetingCenter extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  config = {
    navigationBarTitleText: '设置中心'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='recharge'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>设置中心</View>}
        <View className='head'>
          <View className='list'>
            <Image src={btn_chongzhi1} className='icon'></Image>
            <Text>话费</Text>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi2} className='icon'></Image>
            <Text>流量</Text>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi3} className='icon'></Image>
            <Text>宽带</Text>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi4} className='icon'></Image>
            <Text>Q币</Text>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi5} className='icon'></Image>
            <Text>水费</Text>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi6} className='icon'></Image>
            <Text>电费</Text>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi7} className='icon'></Image>
            <Text>燃气费</Text>
          </View>
          <View className='list'>
            <Image src={btn_chongzhi8} className='icon'></Image>
            <Text>敬请期待</Text>
          </View>
        </View>
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

