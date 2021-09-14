<template>
  <v-app-bar flat absolute class="white mt-6">
    <v-container>
      <v-row>
        <v-col cols="2">
          <!-- <v-btn> -->
          <router-link>
            <v-img
              width="150px"
              height="36.23px"
              src="../assets/Logo.png"
            ></v-img>
          </router-link>
          <!-- </v-btn> -->
        </v-col>
        <v-col class="d-flex justify-center" cols="7">
          <v-btn text tile v-for="name in btnNames" :key="name">
            {{ name }}
          </v-btn>
        </v-col>
        <v-col cols="3">
          <router-link class="mr-6">
            Sign In
          </router-link>
          <v-btn rounded outlined>
            Sign Up
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      btnNames: ["About", "Features", "Pricing", "Testimonials", "Help"],
    };
  },
};
</script>

<style></style>
