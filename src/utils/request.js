export default {
  get (url, params) {
    const promise = new Promise((resolve, reject) => {
      uni.request({
        url,
        data: params,
        header: {},
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
    return Promise.resolve(promise)
  },
  post (url, data) {
    const promise = new Promise((resolve, reject) => {
      uni.request({
        method: 'POST',
        url,
        data,
        header: {},
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
    return Promise.resolve(promise)
  }
}
