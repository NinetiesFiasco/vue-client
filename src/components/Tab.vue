<template>
  <div class="hello">
    <table>
      <tr>
        <td>Express 1</td>
        <td><button @click="callExpressOne">Call</button></td>
        <td>{{ answers.express1.initial }}</td>
      </tr>
      <tr>
        <td>Express 2</td>
        <td><button @click="callExpressTwo">Call</button></td>
        <td>{{ answers.express2 }}</td>
      </tr>
      <tr>
        <td>Express 1<br>cross axios query</td>
        <td><button @click="callExpressOneAxios">Call</button></td>
        <td>{{ answers.express1.axios }}</td>
      </tr>
      <tr>
        <td>Express 1<br>cross rabbitMQ query</td>
        <td><button @click="callExpressOneRabbit">Call</button></td>
        <td>{{ answers.express1.rabbit }}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyTab',
  data() {
    return {
      answers: {
        express1: {
          initial: '',
          axios: '',
          rabbit: ''
        },
        express2: '',
      }
    }
  },
  methods: {
    async callExpressOne() {
      const response = await fetch('http://localhost:3500/express1')
      this.answers.express1.initial = await response.text()
    },
    async callExpressTwo() {
      const response = await fetch('http://localhost:3500/express2')
      this.answers.express2 = await response.text()
    },
    async callExpressOneAxios() {
      const response = await fetch('http://localhost:3500/express1/axios')
      this.answers.express1.axios = await response.text()
    },
    async callExpressOneRabbit() {
      const response = await fetch('http://localhost:3500/express1/rabbit')
      this.answers.express1.rabbit = await response.text()
    }
  }
}
</script>

<style scoped>
</style>
