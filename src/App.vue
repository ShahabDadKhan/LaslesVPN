<template>
  <v-app>
    <app-bar />
    <v-main>
      <the-header />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./views/AppBar.vue";
import TheHeader from "./views/TheHeader.vue";

export default {
  name: "App",

  components: {
    AppBar,
    TheHeader,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.v-app-bar {
  color: $primary;
}
</style>
