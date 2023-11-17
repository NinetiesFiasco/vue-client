<template>
  <div>
    <div v-for="(client, key) of clients" :key="key">
      <pre>{{ client }}</pre>
      <button @click="setIdToDelete(client._id)">delete</button>
      <button @click="setIdToEdit(client._id)">update</button>
    </div>
    <button @click="read">Read</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'ReadClient',
  mounted() {
    this.read()
  },
  computed: {
    ...mapState({
      clients: state => state.openCrud.clients
    })
  },
  methods: {
    ...mapMutations({
      setIdToDelete: 'openCrud/setIdToDelete',
      setIdToEdit: 'openCrud/setIdToEdit'
    }),
    ...mapActions({
      read: 'openCrud/read'
    })
  }

}
</script>