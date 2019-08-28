<template>
  <div class="index-wrapper">
    <h2 class="description">Mathematician, programmer and aspiring bassist.</h2>
    <index :links="links" />
  </div>
</template>

<script>
import index from "~/components/index.vue";

export default {
  name: "index-page",
  components: { index },
  data: function() {
    return {
      links: [
        {
          id: 1,
          ref: "/snakeai",
          title: "SnakeAI",
          description:
            "A application of reinforcement learning for constructing a AI to play snake.",
          thumbnail_src: "/thumbnails/snakeai.png"
        },
        {
          id: 2,
          ref: "/curriculum",
          title: "Curriculum Vitae",
          description: "My curriculum =)",
          thumbnail_src: "/thumbnails/curriculum.png"
        }
      ]
    };
  }
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
