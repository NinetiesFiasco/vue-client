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
      const data = await api.main.initial()
      this.answers.express1.initial = data.res
    },
    async callExpressOneAxios() {
      const data = await api.main.axios()
      this.answers.express1.axios = data.res
    },
    async callExpressOneRabbit() {
      const data = await api.main.rabbit()
      this.answers.express1.rabbit = data.res
    },
    async callExpressOneMongo() {
      const data = await api.main.mongo()
      this.answers.express1.mongo = data.res
    },
    async callExpressOneMail() {
      const data = await api.main.mail()
      this.answers.express1.mail = data.res
    },
    async callExpressTwo() {
      const data = await api.test.initial()
      this.answers.express2 = data.res
    }
  }
}
</script>

<style scoped>

</style>
