<template>
  <div>
    <div v-for="(client, key) of clients" :key="key">
      <pre>{{ client }}</pre>
    </div>
    <button @click="read">Read</button>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

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
    ...mapActions({
      read: 'openCrud/read'
    })
  }

}
</script>