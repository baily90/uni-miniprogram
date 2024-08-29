<template>
  <BaseNavbar>万家医园</BaseNavbar>
  商城首页
  <uv-button @click="goTo('/pages/mall/detail')">去详情</uv-button>
</template>

<script setup>
import { ref } from 'vue'

const goTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style lang="scss" scoped>

</style>
