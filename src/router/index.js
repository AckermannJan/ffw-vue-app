import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Page from "../views/Page";
import Kindergruppen from "../views/Kindergruppen";
import Technik from "../views/Technik";
import singleAlarm from "../views/alarms/singleAlarm";
import alarmTable from "../views/alarms/alarmTable";
import Termine from "../views/Termine";
import Archive from "../views/Archive";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/seite/:pageSlug",
    name: "Page",
    component: Page
  },
  {
    path: "/termine",
    name: "Termine",
    component: Termine
  },
  {
    path: "/archiv",
    name: "Archive",
    component: Archive
  },
  {
    path: "/kindergruppen",
    name: "Kindergruppen",
    component: Kindergruppen
  },
  {
    path: "/kindergruppen/wichtelwehr",
    name: "Wichtelwehr",
    redirect: { path: "/kindergruppen/wichtelwehr/info" }
  },
  {
    path: "/kindergruppen/wichtelwehr/:pageSlug",
    name: "WichtelwehrSeiten",
    component: Page
  },
  {
    path: "/kindergruppen/jugendfeuerwehr",
    name: "Jugendfeuerwehr",
    redirect: { path: "/kindergruppen/jugendfeuerwehr/info-2" }
  },
  {
    path: "/kindergruppen/jugendfeuerwehr/:pageSlug",
    name: "JugendfeuerwehrSeiten",
    component: Page
  },
  {
    path: "/technik",
    name: "Technik",
    component: Technik
  },
  {
    path: "/technik/:pageSlug",
    name: "Technik-Gerät",
    component: Page
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: Page,
    props: { slug: "kontakt" }
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: Page,
    props: { slug: "impressum" }
  },
  {
    path: "/einsatzabteilung",
    name: "Einsatzabteilung",
    component: Page,
    props: { slug: "einsatzabteilung" }
  },
  {
    path: "/einsatzabteilung/dienstplan",
    name: "EinsatzabteilungDienstplan",
    component: Page,
    props: { slug: "dienstplan" }
  },
  {
    path: "/einsatzabteilung/einsatze",
    name: "Einsätze",
    component: alarmTable
  },
  {
    path: "/einsatzabteilung/einsatze/:pageSlug",
    name: "Einsatz",
    component: singleAlarm
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
