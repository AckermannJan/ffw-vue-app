<template>
  <div>
    <v-row
      v-if="['lg', 'xl', 'md'].includes($vuetify.breakpoint.name)"
      no-gutters
      style="margin-bottom: -7px;background-color: gray;"
    >
      <carousel
        v-if="$forceUpdate"
        style="cursor:pointer;"
        :perPage="5"
        :paginationEnabled="false"
        autoplay
      >
        <slide v-for="img in headerImgs" :key="img">
          <v-row
            no-gutters
            justify="center"
            align="center"
            style="height: 100%"
          >
            <v-col>
              <img :src="img" alt="Einsatz Bild" />
            </v-col>
          </v-row>
        </slide>
      </carousel>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <Report>
          <template v-slot:headline>
            Einsätze
            <v-menu offset-y open-on-hover>
              <template v-slot:activator="{ on }">
                <div v-on="on" style="display: inline-block; cursor: pointer">
                  {{ selectedYear
                  }}<v-icon large color="#fff">mdi-chevron-down</v-icon>
                </div>
              </template>
              <v-list>
                <v-list-item
                  v-for="year in selectableYears"
                  @click="() => selectYear(year)"
                  :key="year"
                >
                  <v-list-item-title> {{ year }} </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
          <template v-slot:content>
            <div v-if="!isLoading">
              <router-link
                :to="'einsatze/' + alarm.post_name"
                v-for="(alarm, index) in alarms"
                :key="index"
                class="removeLink"
              >
                <v-row>
                  <v-col cols="1">
                    <v-icon
                      color="#fff"
                      class="circle"
                      v-if="alarm.einsatzicon === '1'"
                      >mdi-fire</v-icon
                    >
                    <v-icon
                      color="#fff"
                      class="circle"
                      v-if="alarm.einsatzicon === '2'"
                      >mdi-hammer</v-icon
                    >
                    <v-icon
                      color="#fff"
                      class="circle"
                      v-if="alarm.einsatzicon === '3'"
                      >mdi-alarm-bell</v-icon
                    >
                    <v-icon
                      color="#fff"
                      class="circle"
                      v-if="alarm.einsatzicon === '4'"
                      >mdi-binoculars</v-icon
                    >
                  </v-col>
                  <v-col class="ml-3" style="overflow: hidden"
                    ><b>{{ alarm.post_title }}</b></v-col
                  >
                  <v-col
                    cols="2"
                    v-if="['lg', 'xl', 'md'].includes($vuetify.breakpoint.name)"
                    ><b>{{
                      alarm.alarmierungszeitpunkt.timestamp | date
                    }}</b></v-col
                  >
                </v-row>
              </router-link>
            </div>
            <div v-else>
              <v-row align="center" v-for="index in 10" :key="index">
                <v-col cols="1">
                  <v-skeleton-loader
                    type="image"
                    style="height: 40px"
                  ></v-skeleton-loader>
                </v-col>
                <v-col>
                  <v-skeleton-loader type="text"></v-skeleton-loader>
                </v-col>
                <v-col cols="2">
                  <v-skeleton-loader type="text"></v-skeleton-loader>
                </v-col>
              </v-row>
            </div>
          </template>
        </Report>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Report from "../../components/partials/Report/Report";
import { Carousel, Slide } from "vue-carousel";
import moment from "moment";

export default {
  name: "alarmTable",
  components: { Report, Carousel, Slide },
  filters: {
    date(date) {
      moment.locale("de");
      return moment(parseInt(date) * 1000).format("DD.MM.YYYY");
    }
  },
  computed: {
    ...mapGetters("alarms", {
      alarms: "alarms",
      isLoading: "isLoading"
    })
  },
  data() {
    return {
      selectedYear: 2022,
      selectableYears: [
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022"
      ],
      headerImgs: [
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/EinsatzDiashow/Feuer-Traisa-1.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/EinsatzDiashow/141215_NdRamstadt25.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/EinsatzDiashow/IMG_7142_1.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/2019/06/einsatzBilder3.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/EinsatzDiashow/P1040713.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/2019/06/einsatzBilder2.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/EinsatzDiashow/bild.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/2018/02/27654892_476679959394230_2229347177982024964_n-wpcf_870x653.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/EinsatzDiashow/Feuer-2.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/EinsatzDiashow/P1030367.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/EinsatzDiashow/123474476484.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/EinsatzDiashow/e0702014008.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/EinsatzDiashow/P1030760.jpg",
        "https://wordpress.feuerwehr-traisa.de/wp-content/uploads/EinsatzDiashow/P1040561.jpg"
      ]
    };
  },
  mounted() {
    this.getAllAlarmsFromYear(this.selectedYear);
  },
  methods: {
    ...mapActions("alarms", {
      getAllAlarmsFromYear: "getAllAlarmsFromYear"
    }),
    selectYear(year) {
      this.selectedYear = year;
      this.getAllAlarmsFromYear(year);
    }
  },
  metaInfo() {
    return {
      title: "Feuerwehr Mühltal Traisa | Einsätze",
      meta: [
        {
          name: "title",
          content: "Feuerwehr Mühltal Traisa | Einsätze"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.circle {
  height: 30px;
  width: 30px;
  border-radius: 80px;
  box-shadow: 0 0 0 6px rgba(175, 74, 69, 0.4);
  overflow: hidden;
}
.removeLink {
  color: #000;
  text-decoration: none;
}
</style>
