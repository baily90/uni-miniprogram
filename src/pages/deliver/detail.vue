<template>
  <BaseNavbar>交付详情</BaseNavbar>
  <uv-button @click="goTo('/pages/deliver/apply')">修改</uv-button>
</template>

<script setup>
import { ref } from 'vue'

const goTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style lang="scss" scoped>

</style>
