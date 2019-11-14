<template>
  <ul class="index">
    <indexItem
      v-for="link in links"
      v-bind:key="link.id"
      :title="link.title"
      :description="link.description"
      :thumbnail_src="link.thumbnail_src"
      :link="link.ref"
      :openInNewTab="link.openInNewTab"
    />
  </ul>
</template>

<script>
import indexItem from "./index-item";

export default {
  name: "index",
  components: { indexItem },
  props: ["links"]
};
</script>

<style scoped>
ul li {
  margin-left: 4%;
  margin-top: 4%;
  width: 44%;
  max-width: 528px;
  min-width: 400px;
  height: 100%;
  display: inline-flex;
  border: 1px solid gray;
}

ul {
  padding: 0;
  width: 100%;

  height: 24em;
  list-style-type: none;
}

@media (max-width: 1100px) {
  ul li {
    display: block;
    width: 90%;
    max-width: 528px;
    min-width: 400px;
    margin: 5% auto;
  }
}
</style>
