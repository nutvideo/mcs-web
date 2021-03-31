import axios from 'axios'
const service = axios.create({
  baseURL: 'http://localhost:8099', // api 的 base_url
  timeout: 3000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8' // 根据后台的接参数方式前端指定请求头
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default service
