<template>
  <header>
    <h1>Big problem</h1>
  </header>
  <div class="flexer">
    <nav>
      <Menu />
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
body {
  margin: 0px;
}
header {
  height: 200px;
  background: #eeeeee;
}
header h1 {
  margin: 0px;  
  padding: 50px 0px 0px 150px;
}
div.flexer {
  display: flex;
}
nav {
  width: 250px;
  background: #dddddd;
}
main {
  background: #cccccc;
  width: calc(100vw - 250px);
  min-height: calc(100vh - 200px);
}
</style>
