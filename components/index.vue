<template>
  <ul class="index">
    <li v-bind:key="link.id" v-for="link in links">
      <a :href="link.ref">
        <div class="container">
          <img class="thumbnail" :src="link.thumbnail_src" />
          <span class="title">{{ link.title }}</span>
          <span class="description">{{ link.description }}</span>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "index",
  data: function() {
    return {
      links: [
        {
          id: 1,
          ref: "/snakeai",
          title: "SnakeAI",
          description: "Descrição",
          thumbnail_src: "/thumbnails/thumbnail.jpg"
        },
        {
          id: 2,
          ref: "/curriculum",
          title: "Curriculum Vitae",
          description: "My curriculum =)",
          thumbnail_src: "/thumbnails/thumbnail.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0% 4% 0% 4%;
  width: 92%;
  list-style-type: none;
}

ul li {
  width: 50%;
  display: inline-block;
}

@media (max-width: 650px) {
  ul li {
    display: block;
    width: 100%;
  }
}

li .container {
  padding: 5%;
}

.container .thumbnail {
  width: 100%;
  height: 5em;
  overflow: hidden;
}

.container .title,
.index .description {
  color: gray;
  display: block;
}

.container .title {
  font-size: 2em;
  text-align: center;
  border-bottom: 1px solid black;
}

.container .description {
  font-size: 1em;
  text-align: center;
}
</style>
