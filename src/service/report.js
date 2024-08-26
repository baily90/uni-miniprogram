import request from '@/utils/request'
import API from './api'
export const getReportList = (data) => {
  return request.post(API.reportList, data)
}
