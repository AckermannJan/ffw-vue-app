<template>
  <v-app id="my-app">
    <v-dialog v-model="dialog" width="700">
      <v-card>
        <v-card-title class="headline grey lighten-2 text-center" primary-title>
          <div class="text-center" style="width: 100%">
            1880 – 2020<br />
            Die Feuerwehr Traisa wird dieses Jahr 140 Jahre alt!
          </div>
        </v-card-title>

        <v-card-text>
          <p class="mt-5">
            <i><b>Wenn’s drauf ankommt…</b></i> Egal mit welchen
            Herausforderungen wir uns konfrontiert sehen – die Lösung ist immer
            das Miteinander. Wir wissen: Gemeinschaft, Verlässlichkeit und
            Bereitschaft dem Nächsten zu helfen, sind die Basis der Feuerwehren.
            Unsere Freizeit für Ihre Sicherheit. Unterstützen Sie diese
            ehrenamtliche Arbeit und werden Sie Mitglied im Feuerwehrverein für
            12€ im Jahr.
          </p>
          <p>
            <i><b>Wenn’s drauf ankommt…</b></i> Ihre Feuerwehr Traisa – 140
            Jahre ehrenamtlich für Sie da!
          </p>
          <p>
            Leider kann aufgrund der aktuellen Lage in diesem Jahr sowohl das
            Gerätehausfest als auch unser Johannisfeuer nicht stattfinden.
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#af4a45" text @click="dialog = false">
            Weiter zur Homepage
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <transition name="fade">
      <v-overlay :value="isLoading" class="overlay" v-if="isLoading">
        <div class="welcomeLoader">
          <img
            src="https://seeklogo.com/images/F/feuerwehr-loschen-bergen-retten-logo-039F98CA40-seeklogo.com.png"
            alt="Retten Löschen Bergen Schützen"
          />
          <p class="welcomeLoader__headline">
            Unsere Freizeit für Ihre Sicherheit -<br />
            Seit 140 Jahren
          </p>
          <p class="welcomeLoader__text">
            Wir freuen uns, dass Sie den Weg auf unsere Webseite gefunden
            haben.<br />
            Schauen Sie sich um und entdecken Sie die Vielfalt der Feuerwehr
            Traisa.
          </p>
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </div>
      </v-overlay>
    </transition>

    <transition name="fade">
      <app-header v-if="!isLoading" />
    </transition>
    <transition name="fade">
      <v-container fluid class="mb-8" v-if="!isLoading">
        <v-row justify="center">
          <v-col xl="2" lg="4" md="4" cols="12" order-md="1" order="2">
            <Sidebar />
          </v-col>
          <v-col xl="5" lg="5" md="7" cols="12" order-md="2" order="1">
            <router-view :key="$route.path"></router-view>
          </v-col>
        </v-row>
      </v-container>
    </transition>
    <transition name="fade">
      <app-footer v-if="!isLoading" />
    </transition>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";
import Sidebar from "./components/partials/Sidebar";

export default {
  data() {
    return {
      showLoader: true,
      dialog: false
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "index/isLoading",
      loadingProgress: "loadingProgress"
    }),

    loaderStyle() {
      return `width: ${this.loadingProgress}%;`;
    }
  },
  mounted() {
    if (window.localStorage.getItem("showLayer")) {
      this.dialog = false;
    } else {
      this.dialog = true;
      window.localStorage.setItem("showLayer", false);
    }
  },
  components: {
    Sidebar,
    appHeader: Header,
    appFooter: Footer
  },
  metaInfo: {
    title: "Feuerwehr Mühltal Traisa",
    htmlAttrs: {
      lang: "de"
    },
    meta: [
      { charset: "utf-8" },
      { name: "robots", content: "INDEX, FOLLOW" },
      {
        name: "description",
        content:
          "Offizielle Homepage der Freiwilligen Feuerwehr Mühltal-Traisa. Auf dieser Seite finden Sie Informationen über die Feuerwehr Traisa."
      },
      {
        name: "author",
        content: "Freiwillige Feuerwehr Mühltal Traisa."
      },
      {
        name: "keywords",
        content:
          "feuer,feuerwehr,feuerwache,traisa,mühltal,muehltal,wache,aua,ortsteil,brand,ff," +
          "fw,ffw,post,bma,ölsput,lf,tlf,hlf,rtw,feuerwehrmann,dienst,freiwillig,freiwillige," +
          "ehrenamtlich,immer,da,darmstadt,muehltal,gemeinde,mtf,mtw,löschfahrzeug,löschgruppenfahrzeug," +
          "einsatz,einsätze,fft,ffwt,traase,traisa"
      }
    ]
  }
};
</script>

<style lang="scss">
@import "App";
</style>
