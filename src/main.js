import Vue from "vue";
import App from "./App.vue";
import NestedSelect from "@/components/nested-select";

Vue.use(NestedSelect);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
