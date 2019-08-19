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
</style>
