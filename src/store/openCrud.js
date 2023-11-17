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
    idToEdit: '',
    idToDelete: '',
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
    },
    setIdToEdit: (state, value) => {
      state.idToEdit = value
    },
    setIdToDelete: (state, value) => {
      state.idToDelete = value
    }
  },
  actions: {
    async initial({commit}) {
      const data = await api.crud.initial()
      commit('setApiDefault', data)
    },
    async create({state}) {
      await api.crud.create(state.newClient)
    },
    async read({commit}) {
      const clients = await api.crud.read()
      commit('setClients', clients)
    },
    async update({commit}, client) {
      commit('setIdToEdit', '')
      await api.crud.update(client)
    },
    async _delete({commit}, client) {
      commit('setIdToDelete', '')
      await api.crud._delete(client)
    }
  },
  getters: {
    clientToEdit: (state) => state.clients.find(o => o._id === state.idToEdit),
    clientToDelete: (state) => state.clients.find(o => o._id === state.idToDelete)
  }
}