<template>
  <BaseNavbar>交付记录</BaseNavbar>
  <uv-button @click="goTo('/pages/deliver/apply')">发起预约</uv-button>
</template>

<script setup>
import { ref } from 'vue'

const goTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style lang="scss" scoped>

</style>
