import axios from "axios"
import { store } from "@/redux/store"

export const BUILD_TYPE_LOCAL = 1
export const BUILD_TYPE_STAGING = 2
export const BUILD_TYPE_PRE_PROD = 3
export const BUILD_TYPE_LIVE = 4

const LOCAL_IP = "http://192.168.111.126:8005"
const STAGING_IP = "https://salesapi.leorainfotech.in"
const PRE_PROD_IP = "https://mepp.leorainfotech.in"
const LIVE_IP = "https://mockeazyprimary.leorainfotech.in"

export const BUILD_TYPE = BUILD_TYPE_STAGING

const serverMap = {
  [BUILD_TYPE_LOCAL]: LOCAL_IP,
  [BUILD_TYPE_STAGING]: STAGING_IP,
  [BUILD_TYPE_LIVE]: LIVE_IP,
  [BUILD_TYPE_PRE_PROD]: PRE_PROD_IP,
}

export const SERVER = serverMap[BUILD_TYPE] ?? STAGING_IP

const axiosApi = axios.create({
  baseURL: SERVER,
})

axios.interceptors.request.use((config) => {
  return config
})

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

const getHeaders = () => {
  /**
   * get value
   */
  const token = store.getState().app.token

  try {
    if (token) {
      return { Authorization: "Token " + token }
    } else {
      return {}
    }
  } catch {
    return {}
  }
}

export async function get(url, config) {
  const response = await axiosApi.get(url, {
    ...config,
    headers: getHeaders(),
  })
  return response.data
}

export async function post(url, data, config) {
  const baseUrl = axios.create({
    baseURL: SERVER,
    timeout: 240000, // 4 minutes
  })
  const headers = { ...getHeaders() }
  const response = await baseUrl.post(url, data, {
    ...config,
    headers,
  })
  return response.data
}

export async function postHeader(url, data, config) {
  const headers = { ...getHeaders() }

  const response = await axiosApi.post(url, data, {
    ...config,
    headers,
  })
  return response
}
