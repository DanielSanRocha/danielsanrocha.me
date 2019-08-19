<template>
  <div class="index-wrapper">
    <h2 class="description">Mathematician, programmer and aspiring bassist.</h2>
    <index />
  </div>
</template>

<script>
import index from "~/components/index.vue";

export default {
  name: "description",
  layout: "index",
  components: { index }
};
</script>

<style @scoped>
.index-wrapper {
  width: 100%;
  max-width: 1200px;
  display: block;
  margin: auto;
}

h2.description {
  color: gray;
  text-align: center;
  font-size: 2.3em;
}
</style>
