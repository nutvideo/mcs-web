import request from '@/utils/request'
/**
 * 后面请求都是需要鞋带token
 * @returns
 */
export function findAutoPartsList() {
  return request({
    url: 'system/parts/findAutoPartsList',
    method: 'get'
  })
}

export function findPartsById(id) {
  return request({
    url: 'system/parts/findParts/' + id,
    method: 'get'
  })
}
