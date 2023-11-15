import api from '@/api'

export default {
  namespaced: true,
  state: {
    apiDefault: '',
    newClient: {
      name: '',
      comment: '',
      birthday: '',
      age: 0
    },
    clients: []
  },
  mutations: {
    setApiDefault: (state, value) => {
      state.apiDefault = value 
    },
    setName: (state, value) => {
      state.newClient.name = value
    },
    setComment: (state, value) => {
      state.newClient.comment = value
    },
    setBirthday: (state, value) => {
      state.newClient.birthday = value
    },
    setAge: (state, value) => {
      state.newClient.age = value
    },
    setClients: (state, value) => {
      state.clients = value
    }
  },
  actions: {
    async initial({commit}) {
      const data = await api.crud.initial()
      commit('setApiDefault', data.res)
    },
    async create({state}) {
      await api.crud.create(state.newClient)
    },
    async read({commit}) {
      const clients = await api.crud.read()
      commit('setClients', clients)
    }
  },
  getters: {

  }
}