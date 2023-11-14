<template>
  <div>
    <button @click="set">{{label}}</button>
    {{result}}
    <template v-if="isImage">
      <br>
      <img :src="result" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'FakerExample',
  props: {
    setter: {type: Function, defalut: () => {}},
    label: {type: String, default: ''},
    isImage: {type: Boolean, default: false}
  },
  data() {
    return {
      result: ''
    }
  },
  methods: {
    set() {
      this.result = this.setter()
    }
  }
}
</script>