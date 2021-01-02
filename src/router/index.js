import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Page from "../views/Page";
import Kindergruppen from "../views/kindergruppen/Index";
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

function getRoutesList(routes, pre) {
  return routes.reduce((array, route) => {
    const path = `${pre}${route.path}`;

    if (route.path !== "*") {
      array.push(path);
    }

    if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

    return array;
  }, []);
}

function getRoutesXML() {
  const list = getRoutesList(
    router.options.routes,
    "https://www.ff-traisa.info"
  )
    .map(route => `<url><loc>${route}</loc></url>`)
    .join("\r\n");
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${list}
  </urlset>`;
}

console.log(getRoutesXML());
