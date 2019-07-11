<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
    <NestedSelect :config="this.config" />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import NestedSelect from "./components/nested-select.vue";

export default {
  name: "app",
  components: {
    //HelloWorld
    NestedSelect
  },
  data() {
    return {
      config: {
        parent: {
          url: "http://localhost:3000/pais",
          label: "Pais:",
          childs: [
            {
              id: 1,
              uri: "http://localhost:3000/estado",
              label: "Ciudad"
            },
            {
              id: 2,
              uri: "http://localhost:3000/ciudad",
              label: "Estado",
              return: true
            }
          ]
        }
      }
    };
  }
};
</script>
