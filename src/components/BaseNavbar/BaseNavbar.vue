<template>
  <view class="container-base-navbar" :style="{'background':background, 'height':navbarHeight + 'px'}">
    <view class="header" :style="{ 'height': headerHeight + 'px' }">
      <view class="left">
        <slot name="left">
          <image v-if="isShowBackBtn" class="btn-back" src="./../../assets/icons/icon_back.png" mode="aspectFit" @click="onBackHandle"></image>
        </slot>
      </view>
      <view class="title"><slot>商城</slot></view>
    </view>
  </view>
  <!-- 悬浮导航栏占位 -->
  <view v-if="placeholder" class="navbar-placeholder" :style="{'height':navbarHeight + 'px'}"></view>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/stores/modules/app'
import { storeToRefs } from 'pinia'

const isShowBackBtn = computed(() => getCurrentPages().length > 1) // 当路由栈大于1且外部没传left slot，才显示默认的返回按钮
const appStore = useAppStore()
const { system, capsule } = storeToRefs(appStore)

defineProps({
  background: {
    type: String,
    default: '#ffffff'
  },
  // 导航高度占位
  placeholder: {
    type: Boolean,
    default: true
  }
})
const navbarHeight = computed(() => (capsule.value.top - system.value.statusBarHeight) * 2 + capsule.value.height + system.value.statusBarHeight)
const headerHeight = computed(() => (capsule.value.top - system.value.statusBarHeight) * 2 + capsule.value.height)

const onBackHandle = () => {
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.container-base-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  .header {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    .left {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 10px;
      .btn-back {
        width: 24px;
        height: 24px;
      }
    }
    .title {
      position: absolute;
      top: 0;
      left: 50%;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateX(-50%);
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
