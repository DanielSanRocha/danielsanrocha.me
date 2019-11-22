<template>
  <div id="app">
    <navtop id="navtop" />
    <div class="wrapper">
      <nuxt id="content" />
    </div>
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
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  font-family: "Roboto";
}

#navtop {
  margin: 0;
  position: absolute;
  height: 120px;
  width: 100%;
  top: 0em;
}

.wrapper {
  display: flex;
  position: relative;
  width: 100%;
  top: 15vh;
}

.home-page {
  margin-top: 5%;
}

.home-page img {
  width: 5em;
  height: 5em;
}
</style>
