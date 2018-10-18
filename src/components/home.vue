<template>
<!--Banjos code = Home page-->
  <div class="hello">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title2">
          <router-link to="/">
            <img id="hidden-logo" class="hidden-logo is-hidden-desktop is-hidden-tablet" src="../assets/beonLogo.png" />
          </router-link>
        </p>
        <p class="title is-hidden-mobile">bēon</p>
        <p class="subtitle">Dēsign Agēncy</p>
        <p class="subtitle2">Professional Portfolios</p>
        <p class="subtitle3">
          <div class="number is-hidden-mobile">
            <img id="email" src="../assets/white-email.png" />
            <p>bēon@design.co.nz</p>
          </div>
          <div class="number is-hidden-mobile">
            <img id="phone" src="../assets/white-phone.png" />
            <p>03 321 12345</p>
          </div>
        <p class="subtitle4">
          <img id="facebook" class="facebook is-hidden-desktop is-hidden-tablet" src="../assets/facebook.png" />
          <img id="twitter" class="twitter is-hidden-desktop is-hidden-tablet" src="../assets/twitter.png" />
        </p>
      </div>
    </div>
    <div class="Scroll-arrow">
        <img class="arrow" src="../assets/arrow.png">
    </div>
    <!-- card containers -->
    <div class="container card-container">
      <projectCard userID="mdoolaard499f"></projectCard>
    </div>
    <br>
    <div class="container card-container">
      <projectCard userID="northlandscapes"></projectCard>
    </div>
    <br>
    <div class="container card-container">
      <projectCard userID="FraserMacedo"></projectCard>
    </div>
    <br>
    <div class="container card-container">
      <projectCard userID="JARLEHc8f1"></projectCard>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import projectCard from './projectCard'
window.Vue = Vue

export default {
  name: 'home',
  components: { projectCard: projectCard },
  data () {
    return {}
  },

  methods: {},
  mounted () {
    this.$root.$emit('pageChanged', '')
  },
  watch: {
    $route (to, from) {
      if (to.name === '') {
        this.$root.$emit('pageChanged', '')
      }
    }
  }
}
</script>

<style scoped>
.hero-body {
    background-image: url(../assets/Hero-img.jpg);
    background-size: cover;
    height: 700px;
}

.title {
  font-size: 90px;
  font-weight: 350;
  letter-spacing: 15px;
  margin-top: 150px;
}

.subtitle {
  font-size: 18px;
  letter-spacing: 2px;
}

.subtitle2 {
  font-size: 60px;
  font-weight: 200;
  letter-spacing: 5px;
  margin-bottom: 100px;
}

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
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 15px;
  font-size: 40px;
}
h3 {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 1px;
  font-weight: 100;
  font-size: 12px;
}
h4 {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 5px;
  font-size: 30px;
}

.number {
  background-color: transparent;
  color: white;
}

#phone {
  height: 30px;
  width: 30px;
}

#email {
  height: 30px;
  width: 30px;
}

.whiteIcons {
  text-align: center;
  margin: -100px;
}

p {
  color: white;
  margin: 12px;
  font-weight: 400;
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

#app {
  width: 100%;
  height: auto;
}

#facebook {
  height: 38px;
  width: 18px;
  margin-right: 15px;
}

#twitter {
  height: 42px;
  width: 42px;
}

#hidden-logo {
    height: 150px;
  width: 165px;
}
.card-container {
  background-color: #f7f7f7;
  padding: 30px;
}
.project-card {
  background-color: white;
}
.image {
  width: auto;
  height: 100%;
  vertical-align: middle;
}
</style>
