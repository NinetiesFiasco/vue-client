import utils from './utils'
const {get, post, put, _delete} = utils

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

const update = async (client) => {
  return await put(`${apiName}/${client._id}`, client)
}

const apiDelete = async (client) => {
  return await _delete(`${apiName}/${client._id}`)
}

export default {initial, create, read, update, _delete: apiDelete}