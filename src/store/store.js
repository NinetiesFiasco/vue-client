import { createStore } from 'vuex'
import openCrud from './openCrud'

const store = createStore({
  modules: {
    openCrud
  }
})

export default store