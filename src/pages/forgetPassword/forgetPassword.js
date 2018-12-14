import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input, Label, Button, Form} from '@tarojs/components'
import './forgetPassword.css'
import eye from '../../resource/login/eye.png'
import close from '../../resource/login/close.png'
import head from '../../resource/login/head.png'

export default class ForgetPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  config = {
    navigationBarTitleText: '忘记密码'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='login forget'>
        {process.env.TARO_ENV === 'h5' && <View className='header'>忘记密码</View>}
        <View className='banner'>
          <Image className='personHead' src={head}></Image>
        </View>
        <View className='personInfo'>
          <Form>
            <View className='box'>
              <Label>手机号</Label><Input placeholder='请输入手机号' name='phone' type='number' className='push'></Input><Image className='icon' src={close}></Image>
            </View>
            <View className='box'>
              <Label>验证码</Label><Input placeholder='请输入验证码' name='phone' type='number' className='push'></Input><Text className='getCode'>获取验证码</Text>
            </View>
            <View className='box'>
              <Label>新密码</Label><Input placeholder='请输入6-12位数字/字母/符号' name='phone' password type='password' className='push'></Input><Image className='icon' src={eye}></Image>
            </View>
            <View className='box'>
              <Label>重复密码</Label><Input placeholder='请再次输入登录密码' name='phone' password type='password' className='push'></Input><Image className='icon' src={eye}></Image>
            </View>
          </Form>
          <Button className='btnForget submit'>完成</Button>
        </View>
      </View>
    )
  }
}

