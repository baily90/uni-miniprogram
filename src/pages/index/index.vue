<template>
  <BaseNavbar :placeholder="false">
    测试页
  </BaseNavbar>
  <mescroll-body :top="pxToRpx(navbarHeight, system.screenWidth)"  @init="mescrollInit" @down="downCallback" @up="upCallback">
    <view class="content">
      <image class="logo" src="/static/logo.png"></image>
      <text @tap="counter.increment()">{{ buildEnv }}</text>
      {{counter.count}}
      <uv-swiper :list="list" keyName="image" ></uv-swiper>
      <uv-button @click="onLoginHandle">登录</uv-button>
    </view>
  </mescroll-body>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/modules/counter'
import { onPageScroll, onReachBottom, onShareAppMessage } from '@dcloudio/uni-app'
import useMescroll from '@/uni_modules/mescroll-uni/hooks/useMescroll.js'
import { apiGoods } from '@/service/home.js'
import { useAppStore } from '@/stores/modules/app'
import { storeToRefs } from 'pinia'
import { pxToRpx } from '@/utils/tools.js'

const appStore = useAppStore()
const { system, capsule } = storeToRefs(appStore)

const navbarHeight = computed(() => (capsule.value.top - system.value.statusBarHeight) * 2 + capsule.value.height + system.value.statusBarHeight)

// 数据列表
const goods = ref([])

// 调用mescroll的hook (注: mescroll-uni不用传onPageScroll,onReachBottom, 而mescroll-body必传)
const {
  mescrollInit,
  downCallback,
  getMescroll
} = useMescroll(onPageScroll, onReachBottom)

// 上拉加载的回调: 其中num:当前页 从1开始, size:每页数据条数,默认10
const upCallback = (mescroll) => {
  apiGoods(mescroll.num, mescroll.size).then(res => {
    console.log('res', res)

    const curPageData = res.list || [] // 当前页数据
    if (mescroll.num === 1) goods.value = [] // 第一页需手动制空列表
    goods.value = goods.value.concat(curPageData) // 追加新数据
    // 联网成功的回调,隐藏下拉刷新和上拉加载的状态;
    // mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;

    // 方法一(推荐): 后台接口有返回列表的总页数 totalPage
    // mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

    // 方法二(推荐): 后台接口有返回列表的总数据量 totalSize
    // mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)

    // 方法三(推荐): 您有其他方式知道是否有下一页 hasNext
    // mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)

    // 方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据.
    mescroll.endSuccess(curPageData.length) // 请求成功, 结束加载
  }).catch(e => {
    console.log('err', e)
    mescroll.endErr() // 请求失败, 结束加载
  })
}

// 某些情况下手动重置列表的方法
// getMescroll().resetUpScroll()

// 测试设置分享信息
onShareAppMessage((option) => {
  console.log('home index onShareAppMessage option', option)
  return {
    title: 'this is title',
    path: '/pages/user/index?test=111',
    imageUrl: 'https://media.gettyimages.com/id/526705622/zh/%E7%85%A7%E7%89%87/karst-mountains-and-river-li-in-guilin-guangxi-region-of-china.jpg?s=612x612&w=0&k=20&c=2ck4uENTFhgV9ngYHUGPFIQPefBrII6Z6RU2gCQr-mE=',
    content: 'this is content',
    desc: 'this is desc',
    bgImgUrl: 'https://pic.616pic.com/bg_w1180/00/00/32/kpmg3R46Q2.jpg'
  }
})

const counter = useCounterStore()
counter.count++

const list = ref([{
  image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
  title: '明月几时有？把酒问青天'
}, {
  image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
  title: '不知天上宫阙，今夕是何年'
}])

const buildEnv = ref(import.meta.env.VITE_BUILD_ENV)

const onLoginHandle = () => {
  uni.login({
    provider: 'weixin',
    onlyAuthorize: true, // 微信登录仅请求授权认证
    success (res) {
      const { code } = res
      console.log(code)

    // 客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
    // uni.request({
    //   url: 'https://www.example.com/loginByWeixin', // 仅为示例，并非真实接口地址。
    //   data: {
    //       code: event.code
    //   },
    //   success: (res) => {
    //       // 获得token完成登录
    //     uni.setStorageSync('token', res.token)
    //   }
    // })
    }
  })
  uni.getUserProfile({
    desc: 'ceshi',
    success (res) {
      console.log(res)
    },
    fail (e) {
      console.log(e)
    }
  })
}

</script>

<style lang="scss" scoped>

</style>
