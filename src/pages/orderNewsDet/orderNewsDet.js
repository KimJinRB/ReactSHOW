import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Image } from '@tarojs/components'
import './orderNewsDet.css'
import goods from '../../resource/public/banner.png'

export default class OrderNewsDet extends Component {

  config = {
    navigationBarTitleText: '订单消息详情'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='orderNewsDet'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>订单消息详情</View>}
        <View className='content'>
          <View className='goods'>
            <View className='head'>
              <Text className='type'>已签收</Text>
              <Text className='time'>12-12 12:32</Text>
            </View>
            <View className='infoBox'>
              <Image className='banner' src={goods}></Image>
              <View className='info'>
                <View className='name'>购贝壳W2智能小米扫地机器人送等值话费</View>
                <View className='freight'>运费：12元</View>
                <View className='price'>实付款(含运费):   <Text className='payMony'>￥888.88</Text></View>
              </View>
            </View>
          </View>
          <View className='express'>
            <View className='expressName'>申通快递</View>
            <View className='expressPhone'>官方电话 95543</View>
            <View className='expressNumber'>单号：1234567890123<Text className='copy'>复制</Text></View>
          </View>
          <View className='expressDet'>
            <View className='list'>
              <Text className='time'>09-27 8:23</Text>
              <Text className='icon'>收</Text>
              <View className='detail'>                   
                <Text>[收货地址]  北京市朝阳区某某街1100号某某小区1号楼1单元1101</Text>
              </View>
            </View>
            <View className='list'>
              <Text className='time'>09-27 8:23</Text>
              <Text className='icon'>签</Text>
              <View className='detail'>                   
                <View className='status'>已签收</View>                   
                <Text>快件已被莱昂纳多签收，如果有问题请电联业务员：13434344332</Text>                 
              </View>
            </View>
            <View className='list'>
              <Text className='time'>09-27 8:23</Text>
              <Text className='icon accomplish'>派</Text>
              <View className='detail'>
                <View className='status'>派送中</View>                   
                <Text>业务员：13434344332 正在为您派件</Text>                 
              </View>
            </View>
            <View className='list'>
              <Text className='time'>09-27 8:23</Text>
              <Text className='icon accomplish'>运</Text>
              <View className='detail'>                   
                <View className='status'>运输中</View>                   
                <Text>到达目的地网点山东济南市明湖路公司，快件很快就送到您的手中</Text>                 
              </View>
            </View>
            <View className='list'>
              <Text className='time'>09-27 8:23</Text>
              <Text className='icon empty'></Text>
              <View className='detail'>                   
                <Text>快件已经到达济南总站</Text>                 
              </View>
            </View>
            <View className='list'>
              <Text className='time'>09-27 8:23</Text>
              <Text className='icon empty'></Text>
              <View className='detail'>                   
                <Text>快件已在广东总站点汇集</Text>                 
              </View>
            </View>
            <View className='list'>
              <Text className='time'>09-27 8:23</Text>
              <Text className='icon accomplish'>发</Text>
              <View className='detail'>
                <View className='status'>已发货</View>
                <Text>货物已经被快递揽收</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

