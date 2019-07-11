<template>
  <div>
    <div>
      {{ this.config.parent.label }}
      <select @change="changeSelect('parent')">
        <option value="">-Seleccione-</option>
        <option v-for="data in this.parentData" :key="data.id" :value="data.id">
          {{ data.value }}
        </option>
      </select>
    </div>
    {{ this.arrayData }}
    <!--<div v-for="(child, i) in this.config.parent.childs" :key="i">
      {{ child.label }}
      <select @change="changeSelect('child')">
        <option value="">-Seleccione-</option>
        <option v-for="(child, i) in this.arrayData[0]" :key="i">
          {{ child.value }}
        </option>
      </select>
    </div>-->
  </div>
</template>
<script>
import axios from "axios";
// import Vue from "vue";
export default {
  name: "nesterd-select",
  props: {
    config: Object
  },
  data() {
    return {
      parentData: null,
      currentChild: 0,
      arrayData: new Array(this.config.parent.childs.length)
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    this.loadSelect(this.config.parent.url).then(response => {
      this.parentData = response.data;
    });
  },
  mounted() {
    console.log(this.arrayData.length);
    console.log(this.config.parent.childs[0]);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  methods: {
    loadSelect(uri) {
      return axios.get(uri);
    },
    changeSelect(type) {
      const value = event.target.value;
      console.log(type + value);
      if (type === "parent") {
        this.loadSelect(this.config.parent.childs[this.currentChild].uri).then(
          response => {
            this.arrayData[this.currentChild] = response.data;
            // Vue.set(this.items, this.currentChild, response.data);
            console.log(this.arrayData[this.currentChild]);
            console.log(this.arrayData[this.currentChild]);
          }
        );
      } else {
        console.log("ELSE");
      }
    }
  }
};
</script>
