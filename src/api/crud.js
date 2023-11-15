import utils from './utils'
const {get, post} = utils

const apiName = 'crud'

const initial = async () => {
  return await get(`${apiName}/test`)
}

const read = async () => {
  return await get(apiName)
}

const create = async (client) => {
  return await post(apiName, client) 
}

export default {initial, create, read}