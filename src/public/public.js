import Taro, { Component } from '@tarojs/taro'
export const publicFun = {
    navigateTo (e) {
        Taro.navigateTo({
            url:'/pages/' + e.currentTarget.dataset.url + '/' + e.currentTarget.dataset.url,           
        });
    },
    switchTab (e) {
        Taro.switchTab({
            url: '/pages/' + e.currentTarget.dataset.url + '/' + e.currentTarget.dataset.url,
        })
    },
    redirectTo (e) {
        Taro.redirectTo({
            url: '/pages/' + e.currentTarget.dataset.url + '/' + e.currentTarget.dataset.url,
        })
    }
};

export default publicFun