<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title" @tap="counter.increment()">{{ title }}</text>
      {{counter.count}}
    </view>
    <BaseHeader></BaseHeader>
    <uv-swiper :list="list" keyName="image" ></uv-swiper>
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

</script>

<style lang="scss" scoped>

</style>
