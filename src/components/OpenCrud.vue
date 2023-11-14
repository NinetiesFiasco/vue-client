<template>
  Open CRUD
  <div>
    <button @click="callApi">Test</button> {{ apiDefault }}
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'OpenCrud',
  data() {
    return {
      apiDefault: ''
    }
  },
  methods: {
    async callApi() {
      this.apiDefault = (await api.test.initial()).res
    }
  }
}
</script>