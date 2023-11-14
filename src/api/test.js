import apiCall from './api'

const apiName = 'test/'

const initial = async () => {
  return await apiCall(apiName)
}

export default {initial}