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
        <a :href="behanceurl">{{ fullName }}</a>
        <span><font-awesome-icon icon="faMapMarkerAlt" /></span>
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
          this.picture = this.designers[userID].data.user.images[115]
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
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
}

img {
    margin: 0 auto;
    height: 100%;
    width: auto;
}
</style>
