import utils from './utils'

const apiName = 'test/'

const initial = async () => {
  return await utils.get(apiName)
}

export default {initial}