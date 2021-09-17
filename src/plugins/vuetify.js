import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#b0bec5",
        textColor: "#575757",
        btnColor: "#f53838",
        btnGreen: "#2FAB73",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});
