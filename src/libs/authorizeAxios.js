import axios from 'axios'
import { logoutAPI, refreshTokenAPI } from '../apis/apis'

let authorizedAxiosInstance = axios.create()

authorizedAxiosInstance.defaults.timeout = 1000 * 60 * 10

authorizedAxiosInstance.defaults.withCredentials = true

authorizedAxiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

authorizedAxiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.message?.status === 401) {
      logoutAPI().then(() => {
        localStorage.removeItem('userInfo')
        location.href = '/'
      })
    }

    const originalRequest = error.config
    if (error.response?.status === 410 && !originalRequest._retry) {
      originalRequest._retry = true 
      const refreshToken = localStorage.getItem('refreshToken')
      return refreshTokenAPI(refreshToken)
        .then(() => {
          return authorizedAxiosInstance(originalRequest)
        })
        .catch((_err) => {
          logoutAPI().then(() => {
            localStorage.removeItem('userInfo')
            location.href = '/'
          })
          Promise.reject(_err)
        })
    }

    if (error.response?.status !== 410) {
      // console.error('API error: ', error.message)
    }
    return Promise.reject(error)
  }
)

export default authorizedAxiosInstance
