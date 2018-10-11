<template>
  <div>
    <div v-if="isLoading" class="image">
      <img src="../assets/lg.dual-ring-loader.gif" id="load" />
    </div>
    <div v-if="!isLoading">
      <div id="projectCard" v-if='project !== null'>
          <div class="container-fullhd columns" v-for='row in projects' :key='row.key'>
            <div class="column" v-for="project in row" :key="project.key">
              <router-link :to="{ path: '/project/' + project.id}" append>
                <img v-bind:src='project.covers.original'/>
              </router-link>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
// import comments from './comments'
import _ from 'lodash'

window.Vue = Vue
export default {
  name: 'projectCard',
  data () {
    return {
      projects: null,
      project: [],
      work: null,
      isLoading: true
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
          this.isLoading = false
          this.projects = _.chunk(response.data.projects, 3)
          this.$forceUpdate()
          console.log(_.chunk(response.data.projects, 3))
        })
        .catch(error => console.log(error.stack))
    }
  },
  mounted () {
    this.getDisignerProjects(this.$route.params.id)
  }
}
</script>

<style scoped>
#projectCard {
    margin: auto;
    width: 80%;
}

img {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

img:nth-child(1) {
  margin-top: 100px;
}

#load {
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  box-shadow: none;
}
</style>
