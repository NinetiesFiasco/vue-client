<template>
  <div>
    <FakerExample
      label="Name"
      :setter="faker.person.fullName"
    />
    <FakerExample
      label="Email"
      :setter="faker.internet.email"
    />
    <FakerExample
      label="UUID"
      :setter="faker.string.uuid"
    />
    <FakerExample
      label="Avatar"
      :setter="faker.image.avatar"
      :isImage="true"
    />
  </div>
</template>

<script>
import { faker } from '@faker-js/faker'
import FakerExample from './FakerExample.vue'

export default {
  name: 'BigFaker',
  components: {
    FakerExample
  },
  data() {
    return {
      //faker,
      data: {}
    }
  },
  computed: {
    faker() {
      return faker
    }
  },
  methods: {
    rndName() {
      this.data.name = faker.person.fullName()
    },
    rndEmail() {
      this.data.email = faker.internet.email()
    },
    rndUuid() {
      this.data.uuid = faker.string.uuid()
    },
    rndAvatar() {
      this.data.avatar = faker.image.avatar()
    }
  }
}
</script>
