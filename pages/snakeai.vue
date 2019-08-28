<template>
  <div class="snakeai-page-wrapper">
    <snakeai :gridSizeX="6" :gridSizeY="6" />
  </div>
</template>

<script>
import snakeai from "~/components/snakeai.vue";

export default {
  name: "snakeai-page",
  components: { snakeai }
};
</script>

<style scoped>
.snakeai-page-wrapper {
  width: 100%;
  max-width: 1200px;
  display: block;
  margin: auto;
}
</style>
