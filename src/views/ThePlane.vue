<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1>Choose Your Plan</h1>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col
        class="d-flex flex-column justify-center"
        v-for="plan in plans"
        :key="plan.name"
        sm="3"
      >
        <div class="d-flex flex-column justify-start">
          <div class="d-flex flex-column align-center">
            <v-img width="145px" src="../assets/Img/Premium.png"></v-img>
          </div>
          <h3 class="my-5 text-center">{{ plan.name }} Plan</h3>
          <ul class="d-flex flex-column justify-start">
            <li class="my-2" v-for="detail in plan.details" :key="detail">
              <v-icon color="btnGreen" class="mr-3">mdi-check</v-icon>
              {{ detail }}
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      plans: [
        {
          name: "Free",
          details: [
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices",
          ],
          price: "Free",
        },
        {
          name: "Standard",
          details: [
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "Yes Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
          ],
          price: "9",
        },
        {
          name: "Premium",
          details: [
            "Unlimited Bandwitch",
            "Encrypted Connection",
            "Yes Traffic Logs",
            "Works on All Devices",
            "Connect Anyware",
            "Get New Features",
          ],
          price: "12",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row:last-child .col {
  width: 330px;
  height: 760px;
  border: 1px solid #dddddd;
  border-radius: 10px;

  &:nth-child(2) {
    margin: 0px 50px;
  }
}
</style>
