<template>
  <BaseNavbar>门店管理</BaseNavbar>
  <uv-button @click="goTo('/pages/store/form')">新增、编辑</uv-button>
  <uv-button @click="goTo('/pages/store/detail')">详情</uv-button>
</template>

<script setup>
import { ref } from 'vue'

const goTo = (url) => {
  uni.navigateTo({ url })
}
</script>

<style lang="scss" scoped>

</style>
