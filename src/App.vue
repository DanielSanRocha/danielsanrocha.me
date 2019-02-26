<template>
  <div id="app">
    <navtop id="navtop"/>
    <div class="wrapper">
      <router-view id="router-view"/>
      <index/>
    </div>
  </div>
</template>

<script>
import index from './components/index.vue'
import navtop from './components/navtop.vue'

export default {
  components: {index, navtop},
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}

#navtop {
  margin: 0;
  position: absolute;
  height: 15%;
  width: 100%;
  top: 0px;
}

.wrapper {
  position: absolute;
  width: 100%;
  top: 15%;
}
</style>
