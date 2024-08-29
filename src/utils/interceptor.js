import { useAppStore } from '@/stores/modules/app'
import { storeToRefs } from 'pinia'

// request拦截器
const requestInterceptor = {
  // 拦截前触发
  invoke (options) {
    options.url = `${import.meta.env.VITE_BASE_URL}${options.url}`
    options.header = {
      ...options.header,
      'source-client': 'miniapp'
    }
    const { token } = storeToRefs(useAppStore())
    if (token.value) {
      options.header.Authorization = `Bear ${token.value}`
    }
  }
}

// 白名单
const whiteList = [
  '/pages/login/index'
  // { pattern: /^\/pages\/list.*/ } // 支持正则表达式
]
// 路由拦截器
const routerInterceptor = {
  invoke (args) {
    const path = args.url.split('?')[0]
    const passFlag = whiteList.some((item) => {
      if (typeof (item) === 'object' && item.pattern) {
        return item.pattern.test(path)
      }
      return path === item
    })
    const { token } = storeToRefs(useAppStore())
    // 不是白名单并且没有token
    if (!passFlag && !token.value) {
      uni.showToast({
        title: '请先登录',
        icon: 'none'
      })
      uni.navigateTo({
        url: `/pages/login/index?redirect=${encodeURIComponent(args.url)}`
      })
      return false
    }
    return args
  }
}

export const addRequestInterceptor = () => {
  uni.addInterceptor('request', requestInterceptor)
  uni.addInterceptor('uploadFile', requestInterceptor)
}

export const addRouterInterceptor = () => {
  const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab']
  // 用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
  list.forEach(item => {
    uni.addInterceptor(item, routerInterceptor)
  })
}
