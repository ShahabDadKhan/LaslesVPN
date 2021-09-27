<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-column justify-center align-center text-center">
        <h1 class="mt-16 mb-5" style="width:504.41px;">
          Huge Global Network of Fast VPN
        </h1>
        <p class="mb-7" style="width:555px;">
          See <span> LaslesVPN </span> everywhere to make it easier for you when
          you move locations.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <l-map style="height: 600px" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng"></l-marker>
        </l-map>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159],
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  font-weight: 500;
}
</style>
