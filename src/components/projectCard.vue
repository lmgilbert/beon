<template>
  <div class="hello">
    <!-- card containers -->

      <div class="columns">

        <!--
        <div class="column">
          <div id="card">
            <div class="card-content">
              <figure class="image is-50x50">
                <img class="is-rounded" :src="user.profilePicture">
              </figure>
            </div>
            <footer class="">
              <div class="card-footer-item">{{ user.username }}</div>
            </footer>
          </div>
        </div> -->

        <div class="column">
          <div class="has-text-centered">
            <div class="card-content">
              <figure class="image is-50x50">
                <img class="is-rounded" :src="user.profilePicture">
              </figure>
            </div>
            <div class="">
              <div class="content bold-link">
                {{ user.username }}
              </div>
            </div>
          </div>
        </div>

        <div class="column" v-for="project in projects" :key="project.id">
          <div class="card has-text-centered">
            <div class="card-image">
              <figure class="image is-3by2">
                <img class="projectImg" :src="project.covers.original">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ project.name }}
                <br>
                <a class="bold-link">View More</a>
              </div>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
window.Vue = Vue

export default {
  name: 'projectCard',
  props: { userID: '' },
  components: {},
  data () {
    return {
      user: {
        username: '',
        profilePicture: ''
      },
      projects: [],
      apiKey: 'z4OTBPKghzwVWyp60e87u5KkZsxXxhCC', // "v5rFuoo114eTmVB5dKjaVHsbAaMu11gY", //This should be moved to an environment variable in the future //  z4OTBPKghzwVWyp60e87u5KkZsxXxhCC
      numberOfCompletedAPIRequests: 0
    }
  },

  methods: {
    getProjectInfo: function (userID) {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/' +
            userID +
            '/projects?api_key=' +
            this.apiKey
        )
        .then(response => {
          this.projects = response.data.projects.slice(0, 4)
          this.numberOfCompletedAPIRequests++
          this.$forceUpdate()
          console.log(this.projects)
        })
        .catch(error => console.log(error.stack))
    },

    getUserInfo: function (userID) {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/' +
            userID +
            '?api_key=' +
            this.apiKey
        )
        .then(response => {
          this.user.username = response.data.user.first_name // response.data.user.username;
          this.user.profilePicture = response.data.user.images[115]
        })
        .catch(error => console.log(error.stack))
    },

    getCardInfo: function (userID) {
      this.getUserInfo(userID)
      this.getProjectInfo(userID)
    }
  },
  mounted () {
    this.getCardInfo(this.userID)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  height: 220px;
  background-color: white;
}
.projectImg{
  width: 100%;
  object-fit: cover;
}

h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h1 {
  position: absolute;
  top: 30%;
  left: 51%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 20px;
}
h3 {
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 0px;
  font-weight: 400;
  font-size: 18px;
}
h4 {
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 5px;
  font-size: 50px;
  font-weight: 200;
}
.number {
  background-color: transparent;
  color: white;
}
#phone,
#email {
  height: 40px;
  width: 40px;
}

.whiteIcons {
  text-align: center;
  margin: -100px;
}
p {
  color: white;
  margin: 12px;
}
.phone,
.email {
  height: 50px;
  width: 50px;
  margin-top: -50px;
}
.hero-icon {
  margin-bottom: 50px;
}
.Scroll-arrow {
  padding-bottom: 50px;
  padding: 50px 20px 50px;
  text-align: center;
}
.arrow {
  height: 50px;
  width: 50px;
}
.container {
  background-color: #f7f7f7;
  padding: 30px;
}
.content {
  font-size: 12px;
}
.bold-link {
  font-weight: bold;
  color: #000;
}
</style>
