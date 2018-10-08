<template>
  <div id="projectCard" v-if='project !== null'>
      <div class="container-fullhd columns" v-for='row in projects' :key='row.key'>
        <div class="column" v-for="project in row" :key="project.key">
            <img v-bind:src='project.covers.original'/>
        </div>
      </div>
    {{ projects }}
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import comments from './comments'
import _ from 'lodash'; 
// import './../node_modules/bulma/css/bulma.css'

window.Vue = Vue
export default {
  name: 'projectCard',
  data () {
    return {
      projects: null,
      work: null
    }
  },
  methods: {
    getDisignerProjects: function (userID) {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/' + userID +
            '/projects?api_key=PhrFshKN6P31JPijhKsra2Q63cyOqaBZ'
        )
        .then(response => {
          this.projects = _.chunk(response.data.projects, 3)
          this.$forceUpdate()
          console.log(_.chunk(response.data.projects, 3))
        })
        .catch(error => console.log(error.stack))
    }
    // .get("http://api.icndb.com/jokes/random/10")
  },
  mounted () {
    this.getDisignerProjects(this.$route.params.id)
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