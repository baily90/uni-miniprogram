<template>
  <view class="container-user">
    个人中心
    <uv-button text="跳转" @click="go"></uv-button>
  </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'

onLoad(option => {
  console.log('user onLoad option', option)
})
const go = () => {
  uni.navigateTo({
    url: '/pages/index/index'
  })
}
</script>

<style lang="scss" scoped>

</style>
