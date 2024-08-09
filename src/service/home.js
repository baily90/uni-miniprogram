import request from '@/utils/request'
export const apiGoods = () => {
  return request.get('/goods')
}
