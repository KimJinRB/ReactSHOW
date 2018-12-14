import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Label, Button, Form } from '@tarojs/components'
import './login.css'
import eye from '../../resource/login/eye.png'
import down from '../../resource/login/down.png'
import head from '../../resource/login/head.png'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  config = {
    navigationBarTitleText: '登录'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='login'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>登录</View>}
        <View className='banner'>
          <Image className='personHead' src={head}></Image>
        </View>
        <View className='personInfo'>
          <Form>
            <View className='box'>
              <Label>手机号</Label><Input placeholder='请输入登录账号' name='phone' type='number' className='push'></Input><Image className='icon' src={down}></Image>
            </View>
            <View className='box'>
              <Label>密码</Label><Input placeholder='请输入登录密码' name='phone' password type='password' className='push'></Input><Image className='icon' src={eye}></Image>
            </View>
          </Form>
          <Button className='submit'>登录</Button>
          <View className='foot'>
            <Text className='forget'>忘记密码？</Text>
            <Text className='regist'>立即注册</Text>
          </View>
        </View>
      </View>
    )
  }
}

