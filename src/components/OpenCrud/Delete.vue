<template>
  <div v-if="clientToDelete">
    <h3>Delete client {{ client.name }}</h3>
    <button @click="localDelete">Delete</button>
    <button @click="cancel">Cancel</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'DeleteClient',
  data() {
    return {
      client: null
    }
  },
  mounted() {
    this.client = {...this.clientToDelete};
  },
  computed: {
    ...mapGetters({
      clientToDelete: 'openCrud/clientToDelete'
    })
  },
  methods: {
    ...mapActions({
      _delete: 'openCrud/_delete'
    }),
    ...mapMutations({
      setIdToDelete: 'openCrud/setIdToDelete'
    }),
    async localDelete() {
      this._delete(this.client)
    },
    cancel() {
      this.setIdToDelete('')
    }
  },
  watch: {
    clientToDelete(newValue) {
      this.client ={...newValue}
    }
  }
}
</script>
