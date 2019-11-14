<template>
  <li>
    <a :href="link" :target="openInNewTab ? '_blank' : ''">
      <div class="container">
        <img class="thumbnail" :src="thumbnail_src" />
        <span class="title">{{ title }}</span>
        <span class="description">{{ description }}</span>
      </div>
    </a>
  </li>
</template>


<script>
export default {
  name: "index-item",
  props: ["title", "description", "thumbnail_src", "link", "openInNewTab"]
};
</script>

<style scoped>
a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}

.container {
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