<template>
  <view class="container-user">
    个人中心
    <uv-button text="跳转" @click="go"></uv-button>
  </view>
</template>

<script setup>
const go = () => {
  uni.navigateTo({
    url: '/pages/index/index'
  })
}
</script>

<style lang="scss" scoped>

</style>
