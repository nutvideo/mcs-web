import request from '@/utils/request'
/**
 * 后面请求都是需要鞋带token
 * @returns
 */
export function findUserList() {
  return request({
    url: 'system/user',
    method: 'get'
  })
}
