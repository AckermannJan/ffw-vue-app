<template>
  <div>
    <WelcomeMsg />
    <v-row
      v-for="(page, index) in pages"
      no-gutters
      :key="index"
      class="page mb-10"
    >
      <v-col
        class="page__img"
        v-if="['lg', 'xl', 'md'].includes($vuetify.breakpoint.name)"
        align-self="center"
      >
        <img :src="page.startBild" alt="Vorschaubild Seite" />
      </v-col>
      <v-col cols="12" md="4" lg="5" class="page__text">
        <h2 class="mb-3">{{ page.post_title }}</h2>
        <p class="page__text--hide">
          {{ page.post_content.substr(0, 250) + "..." }}
        </p>
        <v-btn :to="'/seite/' + page.post_name" color="#af4a45" class="btn"
          >Weiterlesen</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WelcomeMsg from "../components/partials/WelcomeMsg";

export default {
  name: "Home",
  components: { WelcomeMsg },
  computed: {
    ...mapGetters("index", {
      isLoading: "isLoading",
      pages: "pages"
    })
  }
};
</script>

<style scoped lang="scss">
@import "Home";
</style>
