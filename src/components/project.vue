<template>
  <div id="project">
    <div v-if="isLoading" class="image">
      <img src="../assets/lg.dual-ring-loader.gif" id="load" />
    </div>
    <div v-if="!isLoading">
      <div id="bottomPart">
        <h2 id="title" class="has-text-left" :style="dynamicStyle">{{ title }}</h2>
        <img v-bind:src='work'/>
        <div id="stats">
          <font-awesome-icon class="svg" icon="heart" />{{ appreciations }}
          <font-awesome-icon class="svg" icon="eye" />{{ views }}
        </div>
        <br>
        <div class="columns is-mobile">
          <div class="column is-1-desktop is-2-tablet is-3-mobile image">
            <img class="is-rounded" v-bind:src='designerIcon' />
          </div>
          <div class="column is-8-desktop is-7-tablet is-8-mobile" id="designerInfo">
            <h3>{{ designer }}</h3>
            <p id="created">{{ created | moment("dddd, MMMM Do YYYY") }}</p>
            <p id="description"> {{ description }}</p>
          </div>
        </div>
        <hr>
        <comments />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import comments from './comments'
Vue.use(require('vue-moment'))
window.Vue = Vue
export default {
  name: 'project',
  components: {
    comments: comments
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
      description: null,
      created: null,
      firstname: null,
      r: null,
      g: null,
      b: null,
      isLoading: true
    }
  },
  computed: {
    dynamicStyle () {
      let luminence = this.r + this.g + this.b
      if (luminence > 450) {
        return {
          color: `rgb(0, 0, 0)`
        }
      }
      return {
        color: `rgb(${this.r}, ${this.g}, ${this.b})`
      }
    }
  },
  methods: {
    getDisignerProjects: function (userID) {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/projects/' +
            userID +
            '?api_key=v5rFuoo114eTmVB5dKjaVHsbAaMu11gY'
        )
        .then(response => {
          this.isLoading = false
          this.project = response
          this.work = response.data.project.covers.original
          this.title = response.data.project.name
          this.appreciations = response.data.project.stats.appreciations
          this.views = response.data.project.stats.views
          this.designer = response.data.project.owners[0].display_name
          this.firstname = response.data.project.owners[0].first_name
          this.designerIcon = response.data.project.owners[0].images[276]
          this.occupation = response.data.project.owners[0].occupation
          this.description = response.data.project.description
          this.created = response.data.project.published_on
          this.r = response.data.project.colors[0].r
          this.g = response.data.project.colors[0].g
          this.b = response.data.project.colors[0].b
          this.$forceUpdate()
        })
        .catch(error => console.log(error.stack)
        )
    }
  }
}
</script>
<style scoped>
h2 {
  font-size: 50px;
}

h3 {
  font-size: 30px;
}

#bottomPart {
  width: 70%;
  margin-right: auto;
  margin-left: auto;
}

#stats {
  text-align: right;
}

#title {
  text-transform: capitalize;
  margin: 40px 0px 10px 10px;
  font-weight: bold;
}

.designerIcon {
  border-radius: 50%;
  height: 60px;
  width: 60px;
}
.column {
  text-align: left;
}

#created {
  font-size: 14px;
  color: #9b9b9b;
}

#description {
  font-size: 14px;
}

.arrow-left,
.arrow-right {
  text-align: center;
  display: inline;
  font-size: 40px;
  color: #df5563;
}

.arrow {
  color: #df5563;
}

.arrow:hover {
  color: black;
}

.svg {
  margin: 0 10px;
}

hr {
  margin: 40px auto;
  color: #8080801a;
}

#load {
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
</style>
