<template>
  <div class="restacademy-page-wrapper">
    <no-ssr placeholder="Loading...">
      <div class="restacademy-wrapper">
        <rest-academy
          :problemsUrl="['/restacademy_resources/problems/simple_get.yaml','/restacademy_resources/problems/name_register.yaml',]"
          :manualPagesUrl="['/restacademy_resources/manual/about.yaml',' /restacademy_resources/manual/cors.yaml', '/restacademy_resources/manual/all_set.yaml']"
        />
      </div>
    </no-ssr>
  </div>
</template>

<script>
const components = {};

if (process.client) {
  const RestAcademy = require("~/components/RestAcademy/src/RestAcademy.vue");
  components.RestAcademy = RestAcademy.default;
}

export default {
  name: "restacademy-page",
  components
};
</script>

<style scoped>
.restacademy-page-wrapper {
  width: 100%;
  max-width: 1200px;
  display: block;
  margin: auto;
}

.restacademy-wrapper {
  width: 100%;
  height: 500px;
  padding: 10px;
  margin-top: 10px;

  border: 1px solid #cecece;
}
</style>
