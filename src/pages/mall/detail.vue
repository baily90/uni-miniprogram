<template>
  <BaseNavbar>商品详情</BaseNavbar>
  <uv-button @click="goTo('/pages/mall/apply')">去预约</uv-button>
</template>

<script setup>
import { ref } from 'vue'

const goTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style lang="scss" scoped>

</style>
