<template>
  <div id="project">
    <!-- {{ project }} -->
      <h2 id="title">{{title}}</h2>
      <img v-bind:src='work'/>
      <div id="stats">
        <font-awesome-icon icon="heart" />{{ appreciations }}
        <font-awesome-icon icon="eye" />{{ views }}
      </div>
      <img class="designerIcon" v-bind:src='designerIcon'/>
      <div id="designerInfo">
        <p>{{designer}}</p>
        <p>balabalan</p>
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
window.Vue = Vue;
export default {
  name: "project",
  data() {
    return {
      project: null,
      work: null,
      title: null,
      appreciations: null,
      views: null,
      designer: null,
      designerIcon: null
    };
  },
  methods: {
    getDisignerProjects: function(userID) {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/projects/" +
            userID +
            "?api_key=UhOrt3HySq95LUrfQWErTpR5KK12oq2Q"
        )
        .then(response => {
          this.project = response;
          this.work = response.data.project.covers.original;
          this.title = response.data.project.name;
          this.appreciations = response.data.project.stats.appreciations;
          this.views = response.data.project.stats.views;
          this.designer = response.data.project.owners[0].display_name;
          this.designerIcon = response.data.project.owners[0].images[276];
          this.$forceUpdate();
          console.log(this.project);
        })
        .catch(error => console.log(error.stack));
    }
  },
  mounted() {
    this.getDisignerProjects("70355407");
  }
};
</script>

<style scoped>
h2 {
  font-size: 50px;
}
#project {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
}
#stats {
  text-align: right;
}
#title {
  text-align: left;
}
.designerIcon {
  border-radius: 50%;
  height: 60px;
  width: 60px;
}
#designerInfo {
  display: inline-block;
}
</style>
