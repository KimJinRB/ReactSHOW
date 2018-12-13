import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Input, Label, Button, Image} from '@tarojs/components'
import './messageDetail.css'
import banner from '../../resource/public/banner.png'

export default class MessageDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  config = {
    navigationBarTitleText: '资讯详情'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='messageDetail'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>资讯详情</View>}
        <View className='content'>
          <View className='articleTitle'>楼市信贷政策又一轮大范围收紧 从紧期至少6-9个月</View>
          <View className='articleTime'>2018-11-30 06:42:40   21世纪经济报道 </View>
          <View className='articleBanner'><Image src={banner}></Image></View>
          <View className='articleDetail'>
            <Text className='paragraph'>
                11月28日晚间上海发布调控加码的通知，认房又认贷的措施打击了一众改善性需求的购房者。此前的25日，天津已经发出深化楼市调控的通知。这是继杭州、深圳、武汉调控加码后新一轮城市调控加压行动。短短两个月，楼市调控经历了三次集体行动。本次的津沪接力，集中在限贷措施上，年关将至，多家银行也“心照不宣”放缓放贷速度，这些都将有效抑制需求。
            </Text>
            <Text className='paragraph'>
               11月28日晚间，上海、天津突然发布楼市调控政策，全面提高购房首付比例。该消息虽因深夜发布而令人意外，但考虑到近期多地收紧楼市调控的举措，又在意料之中。
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

