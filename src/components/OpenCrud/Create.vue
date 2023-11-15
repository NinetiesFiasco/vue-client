<template>
  <div>
    <h3>Add new client</h3>
    <table>
      <tr>
        <td>name</td>
        <td><input v-model="name" /></td>
      </tr>
      <tr>
        <td>comment</td>
        <td><input v-model="comment"></td>
      </tr>
      <tr>
        <td>birthday</td>
        <td><input type="date" v-model="birthday"></td>
      </tr>
      <tr>
        <td>age</td>
        <td><input v-model="age"></td>
      </tr>
    </table>
    <button @click="_create">Create</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'CreateClient',
  computed: {
    ...mapState({
      newClient: state => state.openCrud.newClient
    }),
    name: {
      get() {return this.newClient.name},
      set(value) {this.setName(value)}
    },
    comment: {
      get() {return this.newClient.comment},
      set(value) {this.setComment(value)}
    },
    birthday: {
      get() {return this.newClient.birthday},
      set(value) {this.setBirthday(value)}
    },
    age: {
      get() {return this.newClient.age},
      set(value) {this.setAge(value)}
    }
  },
  methods: {
    ...mapMutations({
      setName: 'openCrud/setName',
      setComment: 'openCrud/setComment',
      setBirthday: 'openCrud/setBirthday',
      setAge: 'openCrud/setAge'
    }),
    ...mapActions({
      create: 'openCrud/create'
    }),
    async _create() {
      this.create()
    }
  }
}
</script>
