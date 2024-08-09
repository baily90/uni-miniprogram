<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title" @tap="counter.increment()">{{ title }}</text>
      {{counter.count}}
    </view>
    <BaseHeader></BaseHeader>
    <uv-swiper :list="list" keyName="image" ></uv-swiper>
    <uv-button @click="onLoginHandle">登录</uv-button>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/modules/counter'
import request from '@/utils/request'

const init = async () => {
  try {
    await request.get('/xxx', { a: 1 })
  } catch (error) {

  }
}
init()

const counter = useCounterStore()
counter.count++

const list = ref([{
  image: 'https://cdn.uviewui.com/uview/resources/video.mp4',
  title: '丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由',
  poster: 'https://cdn.uviewui.com/uview/swiper/swiper1.png'
}, {
  image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
  title: '明月几时有？把酒问青天'
}, {
  image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
  title: '不知天上宫阙，今夕是何年'
}])

const title = ref(import.meta.env.VITE_BUILD_ENV)

const onLoginHandle = () => {
  uni.login({
    provider: 'weixin',
    onlyAuthorize: true, // 微信登录仅请求授权认证
    success: (res) => {
      const { code } = res
      console.log(code)

    // 客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
    // uni.request({
    //   url: 'https://www.example.com/loginByWeixin', // 仅为示例，并非真实接口地址。
    //   data: {
    //       code: event.code
    //   },
    //   success: (res) => {
    //       // 获得token完成登录
    //     uni.setStorageSync('token', res.token)
    //   }
    // })
    }
  })
}

</script>

<style lang="scss" scoped>

</style>
