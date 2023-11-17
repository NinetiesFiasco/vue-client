<template>
  <div v-if="clientToEdit">
    <h3>Update client</h3>
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
    <button @click="_update">Update</button>
    <button @click="cancel">Cancel</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'UpdateClient',
  data() {
    return {
      client: null
    }
  },
  mounted() {
    this.client = {...this.clientToEdit};
  },
  computed: {
    ...mapGetters({
      clientToEdit: 'openCrud/clientToEdit'
    }),
    name: {
      get() {return this.client.name},
      set(value) {this.client.name = value}
    },
    comment: {
      get() {return this.client.comment},
      set(value) {this.client.comment = value}
    },
    birthday: {
      get() {return this.client.birthday},
      set(value) {this.client.birthday = value}
    },
    age: {
      get() {return this.client.age},
      set(value) {this.client.age = value}
    }
  },
  methods: {
    ...mapActions({
      update: 'openCrud/update'
    }),
    ...mapMutations({
      setIdToEdit: 'openCrud/setIdToEdit'
    }),
    async _update() {
      this.update(this.client)
    },
    cancel() {
      this.setIdToEdit('')
    }
  },
  watch: {
    clientToEdit(newValue) {
      this.client ={...newValue}
    }
  }
}
</script>
