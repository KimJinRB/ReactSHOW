import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Input, Label, Button, Image} from '@tarojs/components'
import './register.css'
import u790 from '../../resource/index/u790.png'

export default class Register extends Component {

  config = {
    navigationBarTitleText: '注册'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  formSubmit = () => {

  }

  render () {
    return (
      <View className='register'>
        <View className='headImg'>
          <Image src={u790}></Image>
        </View>
        <View className='content'>
        <Form onSubmit={this.formSubmit}  >
          <View className='inputBody'>
            <Label>手机号</Label>
            <Input type='number' name='phone' id='' placeholder='请输入手机号'/>
            <Text>×</Text>
          </View>
          <View className='inputBody'>
            <Label>验证码</Label>
            <Input type='number' name='phone' id='' placeholder='请输入验证码'/>
            <Text>获取验证码</Text>
          </View>
          <View className='inputBody'>
            <Label>邀请码</Label>
            <Input type='number' name='phone' id='' placeholder='请输入邀请码'/>
            <Text>×</Text>
          </View>
          <View className='inputBody'>
            <Label>登录密码</Label>
            <Input type='number' name='phone' id='' placeholder='请输入6-12位数字/字母/符号' password />
            <Text>×</Text>
          </View>
          <View className='inputBody'>
            <Label>确认密码</Label>
            <Input type='number' name='phone' id='' placeholder='请再次输入登录密码' password />
            <Text>×</Text>
          </View>
        </Form>
        </View>
      </View>
    )
  }
}

