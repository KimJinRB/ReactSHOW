import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Input, Label, Button, Image} from '@tarojs/components'
import './news.css'
import publicFun from '../../public/public'
import btn_infoS1 from '../../resource/news/btn_info_s1.png'
import btn_infoS2 from '../../resource/news/btn_info_s2.png'
import btn_infoS3 from '../../resource/news/btn_info_s3.png'
import btn_info1 from '../../resource/news/btn_info1.png'
import btn_info2 from '../../resource/news/btn_info2.png'
import btn_info3 from '../../resource/news/btn_info3.png'

export default class News extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  config = {
    navigationBarTitleText: '消息'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  navigateTo = e => {
    publicFun.navigateTo(e);
  }
  switchTab = e => {
    publicFun.switchTab(e);
  }
  redirectTo = e => {
    publicFun.redirectTo(e);
  }

  render () {
    return (
      <View className='news'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>消息</View>}
        <View className='head'>
          <View className='tab' data-url='orderNews' onclick={this.navigateTo}> 
            <Image src={btn_info1}></Image>
            <Text className='newsTitle'>订单消息</Text>
          </View>
          <View className='tab' data-url='orderNews' onclick={this.navigateTo}> 
            <Image src={btn_info2}></Image>
            <Text className='newsTitle'>系统消息</Text>
          </View>
          <View className='tab' data-url='orderNews' onclick={this.navigateTo}> 
            <Image src={btn_info3}></Image>
            <Text className='newsTitle'>互动消息</Text>
          </View>
        </View>
        <View className='title'>最新消息</View>
        <View className='content'>
          <View className='list' data-url='orderNews' onclick={this.navigateTo}> 
            <Image src={btn_infoS1}></Image>
            <View  className='newsBox'>
              <Text className='newsTitle'>客服消息</Text>
              <Text className='newsTime'>11-01 23:22</Text>
              <View className='newsDetail'>客服消息客服消息客服消息</View>
            </View>
          </View>
          <View className='list' data-url='allGoods' onclick={this.navigateTo}> 
            <Image src={btn_infoS2}></Image>
            <View  className='newsBox'>
              <Text className='newsTitle'>系统消息</Text>
              <Text className='newsTime'>11-01 23:22</Text>
              <View className='newsDetail'>系统消息系统消息系统消息</View>
            </View>
          </View>
          <View className='list' data-url='orderNewsDet' onclick={this.navigateTo}> 
            <Image src={btn_infoS3}></Image>
            <View  className='newsBox'>
              <Text className='newsTitle'>订单消息</Text>
              <Text className='newsTime'>11-01 23:22</Text>
              <View className='newsDetail'>订单消息订单消息订单消息</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

