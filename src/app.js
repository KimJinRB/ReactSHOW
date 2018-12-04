import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.css'

class App extends Component {

  config = {
    pages: [
      'pages/register/register',
      'pages/index/index',
      'pages/my/my',
      'pages/news/news',
      'pages/recharge/recharge',
      'pages/newsDetail/newsDetail',
      'pages/activity/activity',
      'pages/goodsList/goodsList',
      'pages/goodsDetail/goodsDetail',
      'pages/search/search',
      'pages/productActivation/productActivation',
      'pages/myCollect/myCollect',
      'pages/myInvite/myInvite',
      'pages/myOrder/myOrder',
      'pages/myPurchased/myPurchased',
      'pages/myRecharge/myRecharge',
      'pages/login/login',
      'pages/forgetPassword/forgetPassword',
      'pages/banner/banner'
    ],
    "debug": true,
    "tabBar": {
      "backgroundColor": "#44ff77",
      "borderStyle": "#466577",
      "color": "#90A8B7",
      "selectedColor": "#ffffff",
      "list": [
        {
          "pagePath": "pages/index/index",
          "text": "首页",
          "iconPath": "resource/tabBar/tabIndex.png",
          "selectedIconPath": "resource/tabBar/tabIndexC.png"
        },
        {
          "pagePath": "pages/recharge/recharge",
          "text": "充值",
          "iconPath": "resource/tabBar/tabRecharge.png",
          "selectedIconPath": "resource/tabBar/tabRechargeC.png"
        },
        {
          "pagePath": "pages/news/news",
          "text": "消息",
          "iconPath": "resource/tabBar/tabNews.png",
          "selectedIconPath": "resource/tabBar/tabNewsC.png"
        },
        {
          "pagePath": "pages/my/my",
          "text": "我的",
          "iconPath": "resource/tabBar/tabMy.png",
          "selectedIconPath": "resource/tabBar/tabMyC.png"
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
