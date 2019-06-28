<template>
  <div id="app">
    <h1 class="hello-world">Hello World!</h1>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  @import './assets/reset.css';
  #app {
    padding: 50px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .hello-world {
    margin: 50px 0;
  }
</style>
