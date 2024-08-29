<template>
  <BaseNavbar>首页</BaseNavbar>
  home
  <uv-button @click="goTo('/pages/recharge/index')">充值</uv-button>
  <uv-button @click="goTo('/pages/withdraw/index')">提现</uv-button>
  <uv-button @click="goTo('/pages/store/index')">门店管理</uv-button>
  <uv-button @click="goTo('/pages/visits/index')">巡诊管理</uv-button>
  <uv-button @click="goTo('/pages/income/index')">收益明细</uv-button>
  <uv-button @click="goTo('/pages/withdraw/index')">提现记录</uv-button>
  <uv-button @click="goTo('/pages/recharge/record')">充值点明细</uv-button>
  <uv-button @click="goTo('/pages/deliver/index')">交付预约</uv-button>
</template>
<script setup>
import { ref } from 'vue'
const goTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style lang="scss" scoped>

</style>
