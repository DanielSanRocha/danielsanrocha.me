<template>
  <div class="navtop">
    <a href="/">
      <span>Hello, I am Daniel!</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "navtop"
};
</script>

<style scoped>
.navtop {
  background-color: black;
}

.navtop span {
  margin: 4vh 0 0 0;
  display: block;
  color: white;
  font-size: 8vh;
  text-align: center;
}

.navtop a {
  text-decoration: none;
}
</style>
