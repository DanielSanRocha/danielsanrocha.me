<template>
  <div class="navtop">
    <a href="/" class="title">Hello, I am Daniel!</a>
    <div class="links">
      <a href="https://github.com/danielsanrocha/" target="_blank" class="link">
        <img src="/github.png" />
        <span>Github</span>
      </a>
    </div>
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
  align-items: center;
  justify-content: center;
  display: flex;
  letter-spacing: 1px;
}

.navtop .title {
  color: white;
  font-size: 60px;
  margin-right: 3vw;
}

.navtop .links {
  height: 60px;
  align-items: flex-end;
  display: flex;
}

.navtop .link {
  color: #555;
  font-weight: 200;
  font-size: 25px;
  display: flex;
  align-items: center;
}

.navtop .link img {
  margin: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #333;
}

.navtop .link:hover {
  color: white;
}

.navtop a {
  text-decoration: none;
}

@media (max-width: 620px) {
  .navtop {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .navtop .links {
    height: 30px;
    display: grid;
    align-items: center;
    justify-content: center;
  }

  .navtop .title {
    font-size: 11vw;
  }
}

@media (max-width: 350px) {
  .navtop .title {
    font-size: 39px;
  }
}
</style>
