<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title" @tap="counter.increment()">{{ title }}</text>
      {{counter.count}}
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/modules/counter'
const counter = useCounterStore()
counter.count++

const title = ref(import.meta.env.VITE_BUILD_ENV)

</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
