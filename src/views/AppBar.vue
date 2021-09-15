<template>
  <div>
    <v-app-bar flat absolute app class="white mt-6">
      <v-container>
        <v-row>
          <v-col cols="2">
            <router-link>
              <v-img
                width="150px"
                height="36.23px"
                src="../assets/Logo.png"
              ></v-img>
            </router-link>
          </v-col>
          <v-col class="d-flex justify-center" cols="7">
            <v-btn text tile v-for="name in btnNames" :key="name">
              {{ name }}
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn text tile>
              Sign In
            </v-btn>
            <v-btn rounded outlined>
              Sign Up
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
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
