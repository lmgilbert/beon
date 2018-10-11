<template>
    <div>
        <div class="background container is-desktop" v-if="designerInfoA !== null && designerProjectsA !== null">
            <div class="columns">
                <div class="column is-2">
                    <router-link :to="{ path: 'portfolio/' + designerInfoA.user.id}" append>
                        <img class="user-image has-image-centered is-hidden-tablet-only" v-bind:src="designerInfoA.user.images[230]" /><br>
                        <p class="user-name"> {{ designerInfoA.user.display_name }}</p>
                    </router-link>
                </div>
                <div class="card-container column" v-for='project in designerProjectsA.slice(0, 4)' :key="project.key">
                    <router-link :to="{ path: 'project/' + project.id}" append>
                        <img v-bind:src='project.covers[202]' />
                        <p class="is-hidden-tablet-only">{{ project.name }}</p>
                        <a class="is-hidden-tablet-only" href="#"> View More </a>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="background container" v-if="designerInfoB !== null && designerProjectsB !== null">
            <!-- class container -->
            <div class="columns">
                <div class="column is-2">
                    <router-link :to="{ path: 'portfolio/' + designerInfoB.user.id}" append>
                    <img class="user-image is-hidden-tablet-only has-image-centered" v-bind:src="designerInfoB.user.images[230]" /><br>
                    <p class="user-name"> {{ designerInfoB.user.display_name }}</p>
                    </router-link>
                </div>
                <div class="card-container column" v-for='project in designerProjectsB.slice(0, 4)' :key="project.key">
                    <router-link :to="{ path: 'project/' + project.id}" append>
                    <img v-bind:src='project.covers[202]' />
                    <p class="is-hidden-tablet-only">{{ project.name }}</p>
                    <a class="is-hidden-tablet-only" href="#"> View More </a>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="background container" v-if="designerInfoC !== null && designerProjectsC !== null">
            <!-- class container -->
            <div class="columns">
                <div class="column is-2">
                    <router-link :to="{ path: 'portfolio/' + designerInfoC.user.id}" append>
                    <img class="user-image is-hidden-tablet-only has-image-centered" v-bind:src="designerInfoC.user.images[230]" /><br>
                    <p class="user-name"> {{ designerInfoC.user.display_name }}</p>
                    </router-link>
                </div>
                <div class="card-container column" v-for='project in designerProjectsC.slice(0, 4)' :key="project.key">
                    <router-link :to="{ path: 'project/' + project.id}" append>
                    <img class="hidden-mobile" v-bind:src='project.covers[202]' />
                    <p class="is-hidden-tablet-only hidden-mobile">{{ project.name }}</p>
                    <a class="is-hidden-tablet-only hidden-mobile" href="#"> View More </a>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="background container" v-if="designerInfoD !== null && designerProjectsD !== null">
            <!-- class container -->
            <div class="columns">
                <div class="column is-2">
                    <router-link :to="{ path: 'portfolio/' + designerInfoD.user.id}" append>
                    <img class="user-image is-hidden-tablet-only has-image-centered" v-bind:src="designerInfoD.user.images[230]" /><br>
                    <p class="user-name"> {{ designerInfoD.user.display_name }}</p>
                    </router-link>
                </div>
                <div class="card-container column" v-for='project in designerProjectsD.slice(0, 4)' :key="project.key">
                    <router-link :to="{ path: 'project/' + project.id}" append>
                    <img v-bind:src='project.covers[202]' />
                    <p class="is-hidden-tablet-only">{{ project.name }}</p>
                    <a class="is-hidden-tablet-only" href="#"> View More </a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
// import _ from 'lodash'
window.Vue = Vue

export default {
  name: 'projectCardContainer',
  data () {
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
    }
  },
  methods: {

  },
  mounted: function () {
    let url =
        'https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/'
    let apiKey = '?api_key=' + 'SPWgoDvDXuXxf735SKDCHf5vOU2XXQxq'

    /* repeat the following two blocks of code to add more designers */

    axios
      .get(url + 'zhelieznova' + apiKey)
      .then(response => {
        this.designerInfoA = response.data
        this.apiRequestCompletionCount++
        console.log(response)
      })
      .catch(error => console.log(error.stack))
    axios
      .get(url + 'zhelieznova' + '/projects' + apiKey)
      .then(response => {
        this.designerProjectsA = response.data.projects
        this.apiRequestCompletionCount++
        console.log(response)
      })
      .catch(error => console.log(error.stack))
    axios
      .get(url + 'sashaillusign' + apiKey)
      .then(response => {
        this.designerInfoB = response.data
        this.apiRequestCompletionCount++
      })
      .catch(error => console.log(error.stack))
    axios
      .get(url + 'sashaillusign' + '/projects' + apiKey)
      .then(response => {
        this.designerProjectsB = response.data.projects
        this.apiRequestCompletionCount++
      })
      .catch(error => console.log(error.stack))
    axios
      .get(url + 'arturdenys' + apiKey)
      .then(response => {
        this.designerInfoC = response.data
        this.apiRequestCompletionCount++
      })
      .catch(error => console.log(error.stack))
    axios
      .get(url + 'arturdenys' + '/projects' + apiKey)
      .then(response => {
        this.designerProjectsC = response.data.projects
        this.apiRequestCompletionCount++
      })
      .catch(error => console.log(error.stack))
    axios
      .get(url + 'R_G_Gomina' + apiKey)
      .then(response => {
        this.designerInfoD = response.data
        this.apiRequestCompletionCount++
      })
      .catch(error => console.log(error.stack))

    axios
      .get(url + 'R_G_Gomina' + '/projects' + apiKey)
      .then(response => {
        this.designerProjectsD = response.data.projects
        this.apiRequestCompletionCount++
      })
      .catch(error => console.log(error.stack))
  }
}
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
    background-color: #f7f7f7;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 40px;
    margin-bottom: 60px;
}

.user-image {
    border-radius: 50%;
    width: auto;
}

.column {
    margin-top: auto;
    padding: 0;
    margin-right: 30px;
    margin-top: auto;
    margin-bottom: auto;
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

.is-2 {
    margin-right: 40px;
}

.has-image-centered {
    margin-left: auto;
    margin-right: auto;
    display: block;
}

@media only screen and (max-width: 768px) {
    .column {
        margin-bottom: 30px;
        margin-right: 0;
        /* box-shadow: none; */
    }
    .columns .column:nth-child(2) {
        display: none !important;
    }
}

</style>
