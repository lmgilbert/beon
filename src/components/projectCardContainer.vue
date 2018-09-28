<template>
  <div id="projectCard">
      
      <div class="columns" v-for='row in designers' :key='row.key'>
          working
        <div class="column" v-for="project in row[0]" :key="project.key">
            <img v-bind:src='project.covers.original'/>
        </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'; 
// import './../node_modules/bulma/css/bulma.css'

window.Vue = Vue
export default {
  name: 'projectCardContainer',
  data () {
    return {
      designers: [],
      work: null
    }
  },
  methods: {
    getDisignerProjects: function (userID) {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/' + userID +
            '/projects?api_key=z4OTBPKghzwVWyp60e87u5KkZsxXxhCC'
        )
        .then(response => {
          this.designers[userID] = [response.data.projects]
            console.log(response)
          //this.projects[userID] = response.data.projects
          this.$forceUpdate()
        })
        .catch(error => console.log(error.stack))
    }
    // .get("http://api.icndb.com/jokes/random/10")
  },
  mounted () {
     this.getDisignerProjects("zhelieznova");
    this.getDisignerProjects("arturdenys");
    this.getDisignerProjects("R_G_Gomina");
    this.getDisignerProjects("sashaillusign");
  }
}
</script>

<style scoped>
#projectCard{
    margin: auto;
    width: 80%;
}
img{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
}

</style>