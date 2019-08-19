<template>
  <snakeai :gridSizeX="6" :gridSizeY="6" />
</template>

<script>
import snakeai from "~/components/snakeai.vue";

export default {
  name: "curriculum",
  components: { snakeai }
};
</script>

<style scoped>
</style>
