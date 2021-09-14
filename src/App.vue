<template>
  <v-app>
    <v-main>
      <the-header />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "./views/AppBar.vue";

export default {
  name: "App",

  components: {
    TheHeader,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.v-app-bar {
  color: $primary;
}
</style>
