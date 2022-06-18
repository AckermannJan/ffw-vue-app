<template>
  <div>
    <div class="sideBarEntry mb-3" v-if="!isLoading">
      <div class="headline font-weight-bold">Letzter Einsatz</div>
      <div class="sideBarEntry__body">
        <router-link
          class="link"
          :to="'/einsatzabteilung/einsatze/' + latestAlarm.post_name"
          >{{ latestAlarm.post_title }}</router-link
        >
      </div>
    </div>
    <div class="calendar" v-if="!isLoading">
      <div class="headline font-weight-bold">Termine</div>
      <div class="calendar__body">
        <v-row
          class="calendar__entry mb-3"
          v-for="(meeting, index) in nextThreeMeetings"
          :key="index"
        >
          <v-col class="calendar__date">
            <span>{{ meeting.date.timestamp | weekDay }}</span>
            <span>{{ meeting.date.timestamp | numberDay }}</span>
          </v-col>
          <v-col class="calender__info" style="padding: 0; position: relative">
            <div>{{ meeting.post_title }}</div>
            <div class="subtitle-2 calendar__detail-date">
              {{ meeting.date.timestamp | date }}
            </div>
          </v-col>
        </v-row>
        <router-link to="/termine" class="link">Mehr anzeigen...</router-link>
      </div>
    </div>
    <div
      v-for="sideBarPost in sideBarPosts"
      :key="sideBarPost.ID"
      class="sideBarEntry mb-3"
    >
      <div class="headline font-weight-bold">{{ sideBarPost.post_title }}</div>
      <div
        class="sideBarEntry__body sideBarEntry__body--noBg sideBarEntry__body--noPadding"
      />
      <img
        :src="sideBarPost.sideimg"
        :alt="sideBarPost.sideimgalt || 'Bild für ein Event'"
      />
    </div>
    <div class="sideBarEntry mb-3" v-if="!isLoading">
      <router-link
        to="/seite/info-buerger"
        class="headline font-weight-bold link"
        >Infos für Bürger</router-link
      >
      <div
        class="sideBarEntry__body sideBarEntry__body--noBg sideBarEntry__body--noPadding"
      />
    </div>
    <div class="sideBarEntry mb-3" v-if="!isLoading">
      <div class="headline font-weight-bold">Partner der Feuerwehr</div>
      <div class="sideBarEntry__body sideBarEntry__body--noBg">
        <a
          class="link"
          href="https://www.datron.de/de_de/startseite.html"
          target="_blank"
        >
          <img
            src="https://www.stepstone.de/upload_de/logo/D/logoDATRON_AG_60143DE.gif"
            alt="Datrong Logo"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment-timezone";

export default {
  name: "Sidebar",
  filters: {
    date(date) {
      moment.locale("de");
      return (
        moment(parseInt(date) * 1000)
          .utc()
          .format("DD MMMM") +
        " um " +
        moment(parseInt(date) * 1000)
          .utc()
          .format("HH:mm")
      );
    },
    weekDay(date) {
      moment.locale("de");
      return moment(parseInt(date) * 1000)
        .utc()
        .format("dd")
        .toUpperCase();
    },
    numberDay(date) {
      moment.locale("de");
      return moment(parseInt(date) * 1000)
        .utc()
        .format("DD");
    }
  },
  computed: {
    ...mapGetters("sideBar", {
      isLoading: "isLoading",
      sideBarPosts: "sideBarPosts",
      latestAlarm: "latestAlarm",
      nextThreeMeetings: "nextThreeMeetings"
    })
  }
};
</script>

<style scoped lang="scss">
@import "Sidebar";
</style>
