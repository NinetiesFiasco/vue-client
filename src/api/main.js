import utils from './utils'

const apiName = 'main/'

const initial = async () => {
  return await utils.get(apiName)
}

const axios = async () => {
  return await utils.get(`${apiName}axios`)
}

const rabbit = async () => {
  return await utils.get(`${apiName}rabbit`)
}

const mongo = async () => {
  return await utils.get(`${apiName}mongo`)
}

const mail = async () => {
  return await utils.get(`${apiName}mail`)
}

export default {initial, axios, rabbit, mongo, mail}