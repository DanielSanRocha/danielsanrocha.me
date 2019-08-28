<template>
  <div class="curriculum-wrapper">
    <index :links="links" />
  </div>
</template>

<script>
import index from "~/components/index.vue";

export default {
  name: "curriculum-page",
  components: { index },
  data: function() {
    return {
      links: [
        {
          id: 1,
          ref: "https://danielsanrocha.github.io/Curriculum/cv.pdf",
          title: "Versão em Português",
          description: "",
          thumbnail_src: "/thumbnails/curriculum.png",
          openInNewTab: true
        }
      ]
    };
  }
};
</script>

<style @scoped>
.curriculum-wrapper {
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
