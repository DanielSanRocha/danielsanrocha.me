<template>
  <div id="app">
    <navtop id="navtop" />
    <div class="wrapper">
      <nuxt id="content" />
    </div>
    <div id="footer"></div>
  </div>
</template>

<script>
import navtop from "~/components/navtop.vue";

export default {
  components: { navtop }
};
</script>

<style @scoped>
body {
  margin: 0;
  padding: 0;
  position: relative;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  font-family: "Roboto";
}

#app {
  display: flex;
  flex-direction: column;
}

#navtop {
  margin: 0;
  height: 120px;
  width: 100%;
  top: 0em;
}

.wrapper {
  display: flex;
  width: 100%;
}

.home-page {
  margin-top: 5%;
}

.home-page img {
  width: 5em;
  height: 5em;
}

#footer {
  height: 10px;
  background-color: white;
}
</style>
