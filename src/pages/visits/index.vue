<template>
  <BaseNavbar>巡诊列表</BaseNavbar>
  <uv-button @click="goTo('/pages/mall/apply')">发起新的巡诊</uv-button>
  <uv-button @click="goTo('/pages/visits/detail')">详情</uv-button>
</template>

<script setup>
import { ref } from 'vue'

const goTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style lang="scss" scoped>

</style>
