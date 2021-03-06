import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.css'

class App extends Component {

  config = {
    pages: [
      'pages/recharge/recharge',
      'pages/myOrder/myOrder',
      'pages/index/index',
      'pages/forgetPassword/forgetPassword',
      'pages/login/login',
      'pages/banner/banner',
      'pages/rechargePhone/rechargePhone',
      'pages/goodsDetail/goodsDetail',
      'pages/logistics/logistics',
      'pages/orderNewsDet/orderNewsDet',
      'pages/activate/activate',
      'pages/orderSure/orderSure',
      'pages/orderDetail/orderDetail',
      'pages/messageDetail/messageDetail',
      'pages/orderNews/orderNews',
      'pages/setingCenter/setingCenter',
      'pages/coupon/coupon',
      
      'pages/rechargeRecord/rechargeRecord',
      'pages/personInfo/personInfo',
      'pages/settingUp/settingUp',
      'pages/my/my',
      
      'pages/register/register',
      'pages/news/news',
      'pages/newsDetail/newsDetail',
      'pages/search/search',
      'pages/productActivation/productActivation',
      'pages/myCollect/myCollect',
      'pages/myInvite/myInvite',
      'pages/myPurchased/myPurchased',
      'pages/myRecharge/myRecharge',
      'pages/allGoods/allGoods'
    ],
	"debug": true,
	"tabBar": {
      "backgroundColor": "#ffffff",
      "borderStyle": "#466577",
      "color": "#7E7E7E",
      "border-top":"1px solid #eeeeee",
      "selectedColor": "#14B3FF",
      "list": [
        {
          "pagePath": "pages/index/index",
          "text": "首页",
          "iconPath": "resource/tabBar/btn_bot1_export.png",
          "selectedIconPath": "resource/tabBar/btn_bot1_over.png"
        },
        {
          "pagePath": "pages/recharge/recharge",
          "text": "发现",
          "iconPath": "resource/tabBar/btn_bot2_export.png",
          "selectedIconPath": "resource/tabBar/btn_bot2_over.png"
        },
        {
          "pagePath": "pages/news/news",
          "text": "消息",
          "iconPath": "resource/tabBar/btn_bot3_export.png",
          "selectedIconPath": "resource/tabBar/btn_bot3_over.png"
        },
        {
          "pagePath": "pages/my/my",
          "text": "我的",
          "iconPath": "resource/tabBar/btn_bot4_export.png",
          "selectedIconPath": "resource/tabBar/btn_bot4_over.png"
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
