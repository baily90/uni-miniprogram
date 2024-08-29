<template>
  <BaseNavbar>交付预约</BaseNavbar>
  <uv-button @click="goTo('/pages/deliver/detail')">提交预约</uv-button>
</template>

<script setup>
import { ref } from 'vue'

const goTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style lang="scss" scoped>

</style>
