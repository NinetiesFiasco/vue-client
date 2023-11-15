<template>
  <div>
    Open CRUD
    <div>
      <button @click="callApi">Test</button> {{ apiDefault }}
    </div>
    <Create />
    <Read />
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Create from './Create.vue'
import Read from './Read.vue'

export default {
  name: 'OpenCrud',
  components: {
    Create, Read
  },
  computed: {
    ...mapState({
      apiDefault: state => state.openCrud.apiDefault
    })
  },
  methods: {
    ...mapActions({
      initial: 'openCrud/initial'
    }),
    async callApi() {
      this.initial()
    }
  }
}
</script>