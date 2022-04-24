import { $http } from '@/libs/http/$http.js'
import { Toast } from 'vant'

export const request = function(req, toast = true) {
  return new Promise((resolve, reject) => {
    $http(req).then(res => {
      // 成功请求
      if ((res.meta && res.meta.code === 0) || res.code === 200) {
        resolve(res)
      } else {
        if (!toast) {
          reject(res.message || message || 'Error')
          return
        }

        const exception = (res.data && res.data.exception)
        const message = (res.meta && res.meta.message)
        Toast.fail(exception || res.message || message)
        reject(res.message || message || 'Error')
      }
    }).catch((err) => {
      Toast.fail('系统错误，请稍后再试')
      reject(err)
    })
  })
}
