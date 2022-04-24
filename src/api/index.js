import { request } from './request.js'

// 公积金服务个人信息首页展示
export const fundHomePage = function(data) {
  return request({
    url: '/h5/fund/fundHomePage',
    method: 'post',
    data
  })
}

// 公积金服务账户明细展示
export const accountDetails = function(data) {
  return request({
    url: '/h5/fund/accountDetails',
    method: 'post',
    data
  })
}

// 公积金服务贷款进度查询
export const loanProgressQuery = function(data) {
  return request({
    url: '/h5/fund/loanProgressQuery',
    method: 'post',
    data
  })
}

// 公积金服务贷款查询列表
export const loanQuery = function(data) {
  return request({
    url: '/h5/fund/loanQuery',
    method: 'post',
    data
  })
}

// 公积金服务贷款查询列表明细
export const LoanDetails = function(data) {
  return request({
    url: '/h5/fund/LoanDetails',
    method: 'post',
    data
  })
}

// 公积金服务贷款查询还款明细查询
export const repaymentDetails = function(data) {
  return request({
    url: '/h5/fund/repaymentDetails',
    method: 'post',
    data
  })
}

// 公积金服务发送短信验证码
export const sendMessage = function(data) {
  return request({
    url: '/h5/fund/sendMessage',
    method: 'post',
    data
  })
}

// 公积金服务退休提取
export const retireExtract = function(data) {
  return request({
    url: '/h5/fund/retireExtract',
    method: 'post',
    data
  }, false)
}

// 人脸
export const faceDistinguish = function(data) {
  const { personToken, toonType } = data
  const { supplierCode, encryptionType, photo } = data
  return request({
    url: '/h5/fund/faceDistinguish',
    method: 'post',
    data: {
      supplierCode,
      photo,
      encryptionType
    },
    headers: {
      personToken,
      toonType
    }
  }, false)
}

// isFaceCheck
export const isFaceCheck = function(data) {
  return request({
    url: '/h5/fund/isFaceCheck',
    method: 'post',
    data
  })
}
