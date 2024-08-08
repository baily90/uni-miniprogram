import { useAppStore } from '@/stores/modules/app'
import { storeToRefs } from 'pinia'

// request拦截器
const requestInterceptor = {
  // 拦截前触发
  invoke (args) {
    args.url = `${import.meta.env.VITE_BASE_URL}${args.url}`
    args.header = {
      ...args.header,
      'source-client': 'miniapp'
    }
    const { token } = storeToRefs(useAppStore())
    if (token.value) {
      args.header.Authorization = token.value
    }
  },
  // 成功回调拦截
  success (args) {
    // 处理http状态码
    if (!args || !args.statusCode || args.statusCode !== 200) {
      uni.showToast({
        icon: 'none',
        title: args.message
      })
      return Promise.reject(args.message || '接口异常')
    }
    // 处理消息码
    if (args.data && args.data.code !== 200) {
      uni.showToast({
        icon: 'none',
        title: '数据异常: ' + args.data.msg
      })
      return Promise.reject(args.data.msg)
    }
    // 返回消息
    return Promise.resolve(args.data.data)
  },
  fail (err) {
    uni.showToast({
      icon: 'none',
      title: '请求异常: ' + err.errMsg
    })
  }
}

// 白名单
const whiteList = [
  '/', // 注意入口页必须直接写 '/'
  { pattern: /^\/pages\/list.*/ }, // 支持正则表达式
  '/pages/grid/grid',
  { pattern: /^\/pages\/login\/*/ }
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
      // uni.navigateTo({
      //   url: '/pages/login/login'
      // })
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
