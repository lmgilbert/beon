<template>
  <div class="hello">
    <h2>b&emacr;on</h2>
    <p>{{ designers.clairehartley.data }}</p>
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
      designers: []
    }
  },

  methods: {
    //  lvKLHgLoGgeVqc8B6QOzUxRcS2NtbUYX, UhOrt3HySq95LUrfQWErTpR5KK12oq2Q
    getDisignerProjects: function (userID) {
      axios.get('https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/' + userID + '?api_key=lvKLHgLoGgeVqc8B6QOzUxRcS2NtbUYX')
        .then(response => {
          this.designers[userID] = response
          this.$forceUpdate()
          console.log(this.designers)
        }).catch(error => console.log(error.stack))
    }
  },

  mounted () {
    this.getDisignerProjects('eldiablo')
    this.getDisignerProjects('NodYoung')
    this.getDisignerProjects('clairehartley')
    this.getDisignerProjects('erikmusin')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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

</style>
