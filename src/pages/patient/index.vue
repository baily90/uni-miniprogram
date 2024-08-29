<template>
  <BaseNavbar>患者列表</BaseNavbar>
  <uv-button @click="goTo('/pages/patient/detail')">患者详情</uv-button>
</template>

<script setup>
import { ref } from 'vue'

const goTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style lang="scss" scoped>

</style>
