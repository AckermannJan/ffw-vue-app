<template>
  <Report>
    <template v-slot:headline>
      Technik
    </template>
    <template v-slot:content style="text-overflow: ellipsis;">
      <h2>Fahrzeuge</h2>
      <v-row>
        <v-col>
          <router-link to="/technik/kdow" style="text-decoration: none">
            <div class="item">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/cars/kdow.jpg"
                  alt="KDOW"
                />
              </div>
              <div class="item__name">KDOW</div>
            </div>
          </router-link>
        </v-col>
        <v-col>
          <router-link to="/technik/mtf" style="text-decoration: none">
            <div class="item">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/uploads/2016/08/Vorsschaukleinnn.png"
                  alt="MTF"
                />
              </div>
              <div class="item__name">MTF</div>
            </div>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link to="/technik/lf-106" style="text-decoration: none">
            <div class="item">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/cars/lf106.jpg"
                  alt="LF 10/6"
                />
              </div>
              <div class="item__name">LF 10/6</div>
            </div>
          </router-link>
        </v-col>
        <v-col>
          <router-link to="/technik/lf-86" style="text-decoration: none">
            <div class="item">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/cars/lf86.jpg"
                  alt="LF 8/6"
                />
              </div>
              <div class="item__name">LF 8/6</div>
            </div>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link to="/technik/anhaenger" style="text-decoration: none">
            <div class="item">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/cars/anhaenger.jpg"
                  alt="Anhänger"
                />
              </div>
              <div class="item__name">Anhänger</div>
            </div>
          </router-link>
        </v-col>
        <v-col>
          <router-link to="/technik/rettungsboot" style="text-decoration: none">
            <div class="item">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/uploads/2019/06/Bild-Boot.png"
                  alt="Boot"
                />
              </div>
              <div class="item__name">Rettungsboot</div>
            </div>
          </router-link>
        </v-col>
      </v-row>
      <h2>Sondergeräte</h2>
      <v-row>
        <v-col>
          <router-link
            to="/technik/waermebildkamera"
            style="text-decoration: none"
          >
            <div class="item item--small">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/sonder/warmebildkam2.jpg"
                  alt="Wärmebildkamera"
                />
              </div>
              <div class="item__name">Wärmebildkamera</div>
            </div>
          </router-link>
        </v-col>
        <v-col>
          <router-link
            to="/technik/atemschutzueberwachung"
            style="text-decoration: none"
          >
            <div class="item item--small">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/sonder/asuberwach.jpg"
                  alt="Atemschutzüberwachung"
                />
              </div>
              <div class="item__name">Atemschutzüberwachung</div>
            </div>
          </router-link>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <router-link
            to="/technik/schleifkorbtrage"
            style="text-decoration: none"
          >
            <div class="item item--small">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/sonder/trage.jpg"
                  alt="Schleifkorbtrage"
                />
              </div>
              <div class="item__name">Schleifkorbtrage</div>
            </div>
          </router-link>
        </v-col>
        <v-col>
          <router-link to="/technik/spineboard" style="text-decoration: none">
            <div class="item item--small">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/sonder/spineboard.jpg"
                  alt="Spineboard"
                />
              </div>
              <div class="item__name">Spineboard</div>
            </div>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link
            to="/technik/hochdruckfeuerloeschgeraet"
            style="text-decoration: none"
          >
            <div class="item item--small">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/sonder/feuerlocher.jpg"
                  alt="Hochdruckfeuerlöschgerät"
                />
              </div>
              <div class="item__name">Hochdruckfeuerlöschgerät</div>
            </div>
          </router-link>
        </v-col>
        <v-col>
          <router-link
            to="/technik/kaminkehrwerkzeug"
            style="text-decoration: none"
          >
            <div class="item item--small">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/sonder/kaminkehr.jpg"
                  alt="Kaminkehrwerkzeug"
                />
              </div>
              <div class="item__name">Kaminkehrwerkzeug</div>
            </div>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link
            to="/technik/rettungsrucksack"
            style="text-decoration: none"
          >
            <div class="item item--small">
              <div class="item__img"></div>
              <div class="item__name">Rettungsrucksack</div>
            </div>
          </router-link>
        </v-col>
        <v-col>
          <router-link
            to="/technik/tragkraftspritze"
            style="text-decoration: none"
          >
            <div class="item item--small">
              <div class="item__img"></div>
              <div class="item__name">Tragkraftspritze</div>
            </div>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link to="/technik/sprungretter" style="text-decoration: none">
            <div class="item item--small">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/sonder/sprung.jpg"
                  alt="Sprungretter"
                />
              </div>
              <div class="item__name">Sprungretter</div>
            </div>
          </router-link>
        </v-col>
        <v-col>
          <router-link
            to="/technik/hoehensicherungssatz"
            style="text-decoration: none"
          >
            <div class="item item--small">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/sonder/hohensich.jpg"
                  alt="Höhensicherungssatz"
                />
              </div>
              <div class="item__name">Höhensicherungssatz</div>
            </div>
          </router-link>
        </v-col>
      </v-row>
      <h2>Feuerwehrhaus</h2>

      <v-row>
        <v-col cols="12" sm="6">
          <router-link
            to="/technik/feuerwehrhaus"
            style="text-decoration: none"
          >
            <div class="item item--small">
              <div class="item__img">
                <img
                  src="https://wordpress.feuerwehr-traisa.de/wp-content/themes/FFW/imgs/fwhaus-aussen.jpg"
                  alt="Feuerwehrhaus"
                />
              </div>
              <div class="item__name">Feuerwehrhaus</div>
            </div>
          </router-link>
        </v-col>
      </v-row>
    </template>
  </Report>
</template>

<script>
import Report from "../components/partials/Report/Report";
export default {
  name: "Technik",
  components: { Report },
  metaInfo() {
    return {
      title: "Feuerwehr Mühltal Traisa | Technik",
      meta: [
        {
          name: "title",
          content: "Feuerwehr Mühltal Traisa | Technik"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.item {
  text-overflow: ellipsis;
  overflow: hidden;
  &__img {
    border-radius: 90px;
    overflow: hidden;
    height: 90px;
    width: 90px;
    border: solid 5px rgba(175, 74, 69, 0.4);
    background-color: #fff;
    float: left;
    img {
      height: 60px;
      margin-top: 10px;
    }
  }
  &__name {
    font-size: 1.25rem;
    font-weight: bold;
    padding-top: 25px;
    margin-left: 95px;
    color: black;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &--small {
    .item__img {
      border-radius: 75px;
      height: 65px;
      width: 65px;
      img {
        height: 60px;
        margin-top: 0;
      }
    }
    .item__name {
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
