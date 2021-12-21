import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
// Se importa las librerías para la gráfica
import Chart from "chart.js";
import Chartkick from "vue-chartkick";
// Se importa la librería de la animación de carga
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
