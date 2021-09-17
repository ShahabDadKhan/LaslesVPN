<template>
  <v-app>
    <app-bar />
    <v-main>
      <the-header />
      <second-header />
      <the-plane />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./views/AppBar.vue";
import SecondHeader from "./views/SecondHeader.vue";
import TheHeader from "./views/TheHeader.vue";
import ThePlane from "./views/ThePlane.vue";

export default {
  name: "App",

  components: {
    AppBar,
    TheHeader,
    SecondHeader,
    ThePlane,
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

li {
  list-style: none;
}

main {
  // background-color: #f6f6f6;
  // background-color: #ffffff;
  font-family: Rubik;
}

h1 {
  font: 500 50px/70px Rubik;
  color: $hColor;
  //   body {
  //   font: font-style font-variant font-weight font-size/line-height font-family;
  // }
  // In Use
  // body {
  //   font: italic small-caps normal 13px/150% Arial, Helvetica, sans-serif;
  // }
}

h2 {
  font: 500 35px/50px Rubik;
  color: $hColor;
}

h3 {
  font: 500 18px/30px Rubik;
}

p {
  font: 400 16px/30px Rubik;
  color: $pColor;
}

.v-btn {
  background-color: $btnColor;
  color: white;
  box-shadow: 10px 25px 60px -52px #f53838;
}
</style>
