export default (options) => new Promise((resolve, reject) => {
  uni.request({
    ...options,
    success (res) {
      if (!res || !res.statusCode || res.statusCode !== 200) {
        uni.showToast({
          icon: 'none',
          title: res.message || '接口异常'
        })
        return reject(res.message || '接口异常')
      }
      // 处理消息码
      if (res.data && res.data.code !== 200) {
        uni.showToast({
          icon: 'none',
          title: res.data.msg
        })
        return reject(res.data.msg)
      }
      // 返回消息
      return resolve(res.data.data)
    },
    fail (err) {
      uni.showToast({
        icon: 'none',
        title: err
      })
      return reject(err)
    }
  })
})
