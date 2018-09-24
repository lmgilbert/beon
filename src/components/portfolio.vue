<template>
  <div class="hello">
    <div id="title-container">
      <h2>{{ name }}</h2>
    </div>
    <div id="portfolio-details" class="columns is-desktop">
      <div class="column">
        <div class="image-cropper">
            <img :src="picture" class="rounded" />
        </div>
      </div>
      <div class="column">
        <a :href="behanceurl" id="title-name">{{ fullName }}</a>
        <p>{{ title }}</p>
        <div style="location">
          <font-awesome-icon icon="map-marker-alt" />
          <p>{{ location }}</p>
        </div>
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
}
#location {
  display: inline-block;
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
  color: black;
  text-decoration: underline;
  font-weight: bold;
}
h5 {
  color: black;
  font-weight: bold;
}
</style>
