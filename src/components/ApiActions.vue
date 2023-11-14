<template>
  <div class="hello">
    <table>
      <thead>
        <tr><th colspan="3">API Auth</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Default GET</td>
          <td>
            <button @click="callExpressOne">Call</button>
            <button @click="answers.express1.initial=''">Clear</button>
          </td>
          <td>{{ answers.express1.initial }}</td>
        </tr>
        <tr>
          <td>Cross axios query</td>
          <td>
            <button @click="callExpressOneAxios">Call</button>
            <button @click="answers.express1.axios=''">Clear</button>
          </td>
          <td>{{ answers.express1.axios }}</td>
        </tr>
        <tr>
          <td>rabbitMQ RPC</td>
          <td>
            <button @click="callExpressOneRabbit">Call</button>
            <button @click="answers.express1.rabbit=''">Clear</button>
          </td>
          <td>{{ answers.express1.rabbit }}</td>
        </tr>
        <tr>
          <td>Mongo</td>
          <td>
            <button @click="callExpressOneMongo">Call</button>
            <button @click="answers.express1.mongo=''">Clear</button>
          </td>
          <td>{{ answers.express1.mongo }}</td>
        </tr>
        <tr>
          <td>Mail</td>
          <td>
            <button @click="callExpressOneMail">Call</button>
            <button @click="answers.express1.mail=''">Clear</button>
          </td>
          <td>{{ answers.express1.mail }}</td>
        </tr>
      </tbody>
    </table>

    <table>
      <thead>
        <tr><th colspan="3">API Test</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Default GET</td>
          <td>
            <button @click="callExpressTwo">Call</button>
            <button @click="answers.express2 = ''">Clear</button>
          </td>
          <td>{{ answers.express2 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

const API = 'http://localhost:3500/api'

export default {
  name: 'MyTab',
  data() {
    return {
      answers: {
        express1: {
          initial: '',
          axios: '',
          rabbit: '',
          mongo: '',
          mail: ''
        },
        express2: '',
      }
    }
  },
  methods: {
    callExpressOne() {
      this.fetchAuth(`${API}/auth`, 'initial')  
    },
    callExpressOneAxios() {
      this.fetchAuth(`${API}/auth/axios`, 'axios')
    },
    async callExpressOneRabbit() {
      this.fetchAuth(`${API}/auth/rabbit`, 'rabbit')
    },
    async callExpressOneMongo() {
      this.fetchAuth(`${API}/auth/mongo`, 'mongo')
    },
    async callExpressOneMail() {
      this.fetchAuth(`${API}/auth/mail`, 'mail')
    },
    async fetchAuth(url, resField) {
      const response = await fetch(url)
      this.answers.express1[resField] = await response.text()
    },
    async callExpressTwo() {
      const response = await fetch(`${API}/test`)
      this.answers.express2 = await response.text()
    }
    
  }
}
</script>

<style scoped>

</style>
