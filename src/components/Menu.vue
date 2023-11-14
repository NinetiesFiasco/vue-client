<template>
  <div class="menu">
    <router-link to="/">Main</router-link>
    <router-link to="/info">Info</router-link>
    <router-link to="/api">API</router-link>
    <router-link to="/faker">Faker</router-link>
  </div>
</template>

<script>
export default {
  name: 'BigMenu'
}
</script>

<style>
.menu > * {
  display: block;
}
</style>