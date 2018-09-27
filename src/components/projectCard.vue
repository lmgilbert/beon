<template>
  <div id="project">
    <h1>test</h1>
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
  components: {
    'comments': comments
  },
  data () {
    return {
      project: null,
      work: null,
      title: null,
      appreciations: null,
      views: null,
      designer: null,
      designerIcon: null,
      occupation: null,
      description: null
    }
  },
  methods: {
    getDisignerProjects: function (userID) {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/projects/' +
            userID +
            '?api_key=UhOrt3HySq95LUrfQWErTpR5KK12oq2Q'
        )
        .then(response => {
          this.project = response
          this.work = response.data.project.covers.original
          this.title = response.data.project.name
          this.appreciations = response.data.project.stats.appreciations
          this.views = response.data.project.stats.views
          this.designer = response.data.project.owners[0].display_name
          this.designerIcon = response.data.project.owners[0].images[276]
          this.occupation = response.data.project.owners[0].occupation
          this.description = response.data.project.description
          this.$forceUpdate()
          console.log(this.project)
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

</style>