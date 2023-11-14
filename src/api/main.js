import apiCall from './api'

const apiName = 'main/'

const initial = async () => {
  return await apiCall(apiName)
}

const axios = async () => {
  return await apiCall(`${apiName}axios`)
}

const rabbit = async () => {
  return await apiCall(`${apiName}rabbit`)
}

const mongo = async () => {
  return await apiCall(`${apiName}mongo`)
}

const mail = async () => {
  return await apiCall(`${apiName}mail`)
}

export default {initial, axios, rabbit, mongo, mail}