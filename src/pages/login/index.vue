<template>
  <view class="container-login">
    <BaseNavbar :showDefaultBack="false">登录</BaseNavbar>
    login
    <uv-button @click="onLoginHandle">登录</uv-button>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/modules/app'

const { token } = storeToRefs(useAppStore())
const redirectUrl = ref('/pages/home/index')

onLoad(option => {
  console.log('login onLoad option', option)
  if (option.redirect) {
    redirectUrl.value = decodeURIComponent(option.redirect)
  }
})

const onLoginHandle = () => {
  token.value = 123
  uni.redirectTo({
    url: redirectUrl.value
  })
}

</script>

<style lang="scss" scoped>

</style>
