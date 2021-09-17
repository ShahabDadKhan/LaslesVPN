<template>
  <v-container
    class="d-flex flex-column justify-center align-center "
    style="height:90vh"
  >
    <v-row align="center" justify="center">
      <v-col>
        <h1>Want anything to be easy with LaslesVPN.</h1>
        <p>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </p>
        <v-btn>Get Started</v-btn>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-img width="500px" src="../assets/Img/Illustration 1.png"></v-img>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" style="width:100%">
      <v-col
        cols="4"
        class="d-flex justify-center align-center"
        v-for="item in info"
        :key="item.text"
      >
        <v-avatar class="mr-7">
          <v-img :src="item.icon"></v-img>
        </v-avatar>
        <div>
          <div class="number-1">{{ item.no }}</div>
          <span> {{ item.text }}</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          icon: require("../assets/Img/Icons/user.png"),
          no: "90+",
          text: "Users",
        },
        {
          icon: require("../assets/Img/Icons/location.png"),
          no: "30+",
          text: "Location",
        },
        {
          icon: require("../assets/Img/Icons/Server.png"),
          no: "50+",
          text: "Servers",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row:last-child {
  // box-shadow: ;
  box-shadow: 0px 25px 80px -80px #0d1025;
}

.row:last-child .col:not(:last-child) {
  border-right: 2px solid #eeeff2;
}
</style>
