<template>
  <div>
    <div class="background container is-desktop" v-if="designerInfoA !== null && designerProjectsA !== null">
      <!-- class container -->
      <div class="columns">
        <div class="column is-2">
          <img class="user-image" v-bind:src="designerInfoA.user.images[230]" /><br>
          <p class="user-name"> {{ designerInfoA.user.display_name }}</p>
        </div>
        <div class="card-container column" v-for='project in designerProjectsA.slice(0, 4)' :key="project.key">
          <img v-bind:src='project.covers[202]' />
          <p>{{ project.name }}</p>
          <a href="#"> View More </a>
        </div>
      </div>
    </div>
  
  
  
  
    <div class="background container" v-if="designerInfoB !== null && designerProjectsB !== null">
      <!-- class container -->
      <div class="columns">
        <div class="column is-2">
          <img class="user-image" v-bind:src="designerInfoB.user.images[230]" /><br>
          <p class="user-name"> {{ designerInfoB.user.display_name }}</p>
        </div>
        <div class="card-container column" v-for='project in designerProjectsB.slice(0, 4)' :key="project.key">
          <img v-bind:src='project.covers[202]' />
          <p>{{ project.name }}</p>
          <a href="#"> View More </a>
        </div>
      </div>
    </div>
  
  
  
    <div class="background container" v-if="designerInfoC !== null && designerProjectsC !== null">
      <!-- class container -->
      <div class="columns">
        <div class="column is-2">
          <img class="user-image" v-bind:src="designerInfoC.user.images[230]" /><br>
          <p class="user-name"> {{ designerInfoC.user.display_name }}</p>
        </div>
        <div class="card-container column" v-for='project in designerProjectsC.slice(0, 4)' :key="project.key">
          <img v-bind:src='project.covers[202]' />
          <p>{{ project.name }}</p>
          <a href="#"> View More </a>
        </div>
      </div>
    </div>
  
  
  
    <div class="background container" v-if="designerInfoD !== null && designerProjectsD !== null">
      <!-- class container -->
      <div class="columns">
        <div class="column is-2">
          <img class="user-image" v-bind:src="designerInfoD.user.images[230]" /><br>
          <p class="user-name"> {{ designerInfoD.user.display_name }}</p>
        </div>
        <div class="card-container column" v-for='project in designerProjectsD.slice(0, 4)' :key="project.key">
          <img v-bind:src='project.covers[202]' />
          <p>{{ project.name }}</p>
          <a href="#"> View More </a>
        </div>
      </div>
    </div>
  
  
  </div>
</template>

<script>
  import Vue from "vue";
  import axios from "axios";
  import _ from "lodash";
  window.Vue = Vue;
  
  export default {
    name: "projectCardContainer",
    data() {
      return {
        apiRequestCompletionCount: 0,
        /* repeat the two variables and change the letters to add more designers */
        designerInfoA: null,
        designerProjectsA: null,
  
        designerInfoB: null,
        designerProjectsB: null,
  
        designerInfoC: null,
        designerProjectsC: null,
  
        designerInfoD: null,
        designerProjectsD: null
      };
    },
    methods: {
      // ELx4Wb6sGGwWnIwP06LglFqOqeFoFDEM
      // v5rFuoo114eTmVB5dKjaVHsbAaMu11gY
      // z4OTBPKghzwVWyp60e87u5KkZsxXxhCC
      // Kfxa6RCoauPffiqhTUja6Y5QhsxOkvAE
      // SPWgoDvDXuXxf735SKDCHf5vOU2XXQxq
    },
    mounted: function() {
      let url =
        "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/";
      let apiKey = "?api_key=" + "z4OTBPKghzwVWyp60e87u5KkZsxXxhCC";
  
      /* repeat the following two blocks of code to add more designers */
  
      axios
        .get(url + "zhelieznova" + apiKey)
        .then(response => {
          this.designerInfoA = response.data;
          this.apiRequestCompletionCount++;
        })
        .catch(error => console.log(error.stack));
  
      axios
        .get(url + "zhelieznova" + "/projects" + apiKey)
        .then(response => {
          this.designerProjectsA = response.data.projects;
          this.apiRequestCompletionCount++;
        })
        .catch(error => console.log(error.stack));
  
  
  
  
      axios
        .get(url + "stoempstudio" + apiKey)
        .then(response => {
          this.designerInfoB = response.data;
          this.apiRequestCompletionCount++;
        })
        .catch(error => console.log(error.stack));
  
      axios
        .get(url + "stoempstudio" + "/projects" + apiKey)
        .then(response => {
          this.designerProjectsB = response.data.projects;
          this.apiRequestCompletionCount++;
        })
        .catch(error => console.log(error.stack));
  
  
  
  
      axios
        .get(url + "orange_zutto" + apiKey)
        .then(response => {
          this.designerInfoC = response.data;
          this.apiRequestCompletionCount++;
        })
        .catch(error => console.log(error.stack));
  
      axios
        .get(url + "orange_zutto" + "/projects" + apiKey)
        .then(response => {
          this.designerProjectsC = response.data.projects;
          this.apiRequestCompletionCount++;
        })
        .catch(error => console.log(error.stack));
  
  
  
  
      axios
        .get(url + "sashaillusign" + apiKey)
        .then(response => {
          this.designerInfoD = response.data;
          this.apiRequestCompletionCount++;
        })
        .catch(error => console.log(error.stack));
  
      axios
        .get(url + "sashaillusign" + "/projects" + apiKey)
        .then(response => {
          this.designerProjectsD = response.data.projects;
          this.apiRequestCompletionCount++;
        })
        .catch(error => console.log(error.stack));
  
    }
  
  
  
  };
</script>

<style scoped>
  p {
    font-size: 14px;
    text-align: center;
  }
  
  .card-container {
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-right: 45px;
    font-size: 18px;
    background-color: white;
    
  }
  
  #projectCard {
    margin: auto;
    width: 80%;
  }
  
  a {
    color: black;
    font-weight: bold;
  }
  
  .background {
    background-color: #f8f8f8;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 40px;
    margin-bottom: 60px;
  }
  
  .user-image {
    border-radius: 50%;
    width: auto;
    padding: 30px;
  }
  
  .column {
    margin-top: auto;
    padding: 0;
  }
  
  .user {
    display: inline;
  }
  
  .container {
    padding: 60px;
  }
  
  .user-name {
    font-weight: bold;
    color: black;
    font-size: 20px;
  }
  .is-2{
    margin-right: 40px;
  }
</style>