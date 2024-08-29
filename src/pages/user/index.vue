<template>
  <BaseNavbar>个人中心</BaseNavbar>
  个人中心
  <uv-button @click="goTo('/pages/order/mall')">商城订单</uv-button>
  <uv-button @click="goTo('/pages/order/scan')">扫查订单</uv-button>
  <uv-button @click="goTo('/pages/patient/index')">患者管理</uv-button>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'

onLoad(option => {
  console.log('user onLoad option', option)
})
const goTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style lang="scss" scoped>

</style>
