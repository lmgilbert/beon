<template>
  <div class="hello">
    <div class="hero-image">
      <div class="hero">
        <img src="../assets/Hero.png" />
        <div class="text">
          <h1>bēon</h1>
          <h3>Dēsign Agēncy</h3>
          <h4>Meet Our Designers</h4>
          <div class="whiteIcons">
            <div class="number"><img id="email" src="../assets/white-email.png" />
              <p>bēon@design.nz</p>
            </div>
            <div class="number"><img id="phone" src="../assets/white-phone.png" />
              <p>03 321 12345</p>
            </div>
          </div>
        </div>
        <div class="Scroll-arrow">
          <img class="arrow" src="../assets/arrow.png" />
        </div>
        <h2></h2>
      </div>
    </div>
    <!-- card containers -->
    <div class="container">

      <div class="columns">

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
        </div>

        <div class="column" v-for="project in projects" :key="project.id">
          <div class="card has-text-centered">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="project.covers.original">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ project.name }}
                <br>
                <a>View More</a>
                <br>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

</template>


<script>
import axios from "axios";
import Vue from "vue";
window.Vue = Vue;
import ProjectCardContainer from "@/components/projectCardContainer";

export default {
  name: "home",
  components: { "project-card-container": ProjectCardContainer },
  data() {
    return {
      user: {
        username: "",
        profilePicture: ""
      },
      projects: [],
      apiKey: "z4OTBPKghzwVWyp60e87u5KkZsxXxhCC", //This should be moved to an environment variable in the future //  z4OTBPKghzwVWyp60e87u5KkZsxXxhCC
      numberOfCompletedAPIRequests: 0
    };
  },

  methods: {
    getProjectInfo: function(userID) {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/" +
            userID +
            "/projects?api_key=" +
            this.apiKey
        )
        .then(response => {
          //console.log('POTO');
          //this.projects = response;
          this.projects = response.data.projects.slice(0, 4);
          this.numberOfCompletedAPIRequests++;
          this.$forceUpdate();
          console.log(this.projects);
        })
        .catch(error => console.log(error.stack));
    },

    getUserInfo: function(userID) {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/" +
            userID +
            "?api_key=" +
            this.apiKey
        )
        .then(response => {
          //console.log('PAJARO');
          this.user.username = response.data.user.first_name; //response.data.user.username;
          this.user.profilePicture = response.data.user.images[230];
        })
        .catch(error => console.log(error.stack));
    },

    getCardInfo: function(userID) {
      this.getUserInfo(userID);
      this.getProjectInfo(userID);
    }
  },
  mounted() {
    //project IDs

    //this.getCardInfo('kilianschoenberger');
    this.getCardInfo("s-d-g");
    //this.getCardInfo('ajcaparo');
    //this.getCardInfo('zhelieznova');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  height: 100%;
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
#phone {
  height: 40px;
  width: 40px;
}
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
.phone {
  height: 50px;
  width: 50px;
  margin-top: -50px;
}
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
.card {
  background-color: white;
}
</style>
