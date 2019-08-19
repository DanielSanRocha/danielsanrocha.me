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

<style scoped>
a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}

ul {
  padding: 0;
  width: 100%;

  height: 24em;
  list-style-type: none;
}

ul li {
  margin-left: 4%;
  width: 44%;
  height: 100%;
  display: inline-flex;
  border: 1px solid gray;
}

@media (max-width: 800px) {
  ul li {
    display: block;
    width: 90%;
    margin: 5% auto;
  }
}

li .container {
  padding: 5%;
}

.container .thumbnail {
  width: 100%;
  height: 16em;
  object-fit: contain;
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
