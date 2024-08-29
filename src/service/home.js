import request from '@/utils/request'
export const apiGoods = () => {
  return request({
    url: '/goods',
    method: 'get'
  })
}
