<template>
  <v-container class="pa-16 my-6">
    <v-row justify="space-between">
      <v-col cols="12" sm="12" md="6" class="d-flex justify-center">
        <v-img max-width="500px" src="../assets/Img/Illustration 2.png"></v-img>
      </v-col>
      <v-col cols="12" sm="12" md="5" class="d-flex flex-column justify-center">
        <h2>We Provide Many Features You Can Use</h2>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul>
          <li v-for="link in links" :key="link">
            <v-icon color="btnGreen" class="mr-3">mdi-check-circle</v-icon
            >{{ link }}
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      links: [
        "Powerfull online protection.",
        "Internet without borders.",
        "Supercharged VPN",
        "No specific time limits.",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  padding: 5px 0px;
}
li {
  // list-style: none;
  padding: 7.5px;
}
</style>
