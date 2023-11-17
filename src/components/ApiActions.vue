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
import api from '@/api'

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
    async callExpressOne() {
      this.answers.express1.initial = await api.main.initial()      
    },
    async callExpressOneAxios() {
      this.answers.express1.axios = await api.main.axios()
    },
    async callExpressOneRabbit() {
      this.answers.express1.rabbit = await api.main.rabbit()
    },
    async callExpressOneMongo() {
      this.answers.express1.mongo = await api.main.mongo()
    },
    async callExpressOneMail() {
      this.answers.express1.mail = await api.main.mail()
    },
    async callExpressTwo() {
      this.answers.express2 = await api.test.initial()
    }
  }
}
</script>

<style scoped>

</style>
