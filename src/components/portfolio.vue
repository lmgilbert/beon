<template>
  <div class="hello">
    <div id="title-container" class="columns">
      <font-awesome-icon icon="angle-left" class="column is-pulled-right" />
      <h2 class="column is-three-quarters">{{ name }}</h2>
      <font-awesome-icon icon="angle-right" class="column is-pulled-left" />
    </div>
    <div id="portfolio-details" class="columns is-desktop is-variable is-8">
      <div class="column">
        <div class="image-cropper is-pulled-right">
            <img :src="picture" class="rounded" />
        </div>
      </div>
      <div class="column">
        <a :href="behanceurl" id="title-name">{{ fullName }}</a>
        <p>{{ title }}</p>
        <span id="location">
          <font-awesome-icon icon="map-marker-alt" />{{ location }}
        </span>
        <h5>About</h5>
        <p>{{ bio }}</p>
      </div>
      <div class="column" id="contact">
        <a :href="website">{{ website }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
window.Vue = Vue
export default {
  name: 'home',
  data () {
    return {
      designers: [],
      name: null,
      fullName: null,
      title: null,
      location: null,
      website: null,
      picture: null,
      bio: null,
      behanceurl: null
    }
  },

  methods: {
    getDisignerProjects: function (userID) {
      axios.get('https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/' + userID + '?api_key=lvKLHgLoGgeVqc8B6QOzUxRcS2NtbUYX')
        .then(response => {
          this.designers[userID] = response
          this.$forceUpdate()
          this.name = this.designers[userID].data.user.first_name
          this.fullName = this.designers[userID].data.user.display_name
          this.title = this.designers[userID].data.user.company
          this.location = this.designers[userID].data.user.location
          this.website = this.designers[userID].data.user.website
          this.picture = this.designers[userID].data.user.images[230]
          this.bio = this.designers[userID].data.user.sections
          this.behanceurl = this.designers[userID].data.user.url
          console.log(this.designers)
        }).catch(error => console.log(error.stack))
    }
  },

  mounted () {
    this.getDisignerProjects('clairehartley')
  }
}
</script>

<style scoped>
.image-cropper {
    width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
}

img {
    margin: 0 auto;
    height: 100%;
    width: auto;
}
svg {
  display: inline-block;
  margin-right: 5px;
  color: #E15361;
}
#location {
  display: inline-block;
  color: #d1d1d1;
}
p {
  text-align: left;
  font-size: 16px;
}
a {
  text-align: left;
}
#contact a{
  color: #E15361;
  text-decoration: underline;
}
#title-name {
  color: #E15361;
  font-weight: bold;
}
h5 {
  color: black;
  font-weight: bold;
}
#portfolio-details {
  margin-top: 40px;
}
#title-container {
  margin-top: 40px;
}
#title-container svg{
  font-size: 70px;
}
h2 {
  font-weight: bold;
}
</style>
