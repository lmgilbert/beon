<template>
  <div id="projectCard">
    
        <div class="column is-3"  v-for="project in projects.data.projects" :key="project.key">
            <img v-bind:src='project.covers.original'/>
        </div>
    {{ project }}
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import comments from './comments'
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
          this.projects = response
          this.$forceUpdate()
          console.log(this.projects)
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
    display: inline !important;
    margin: 0
}
</style>