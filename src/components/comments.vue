<template>
  <div id="project-comment" class="has-text-left">
    <h4>Comments</h4>
    <div id="comments">
        <div v-for="contents in comment.slice(0,10)" :key="contents.key" class="columns is-mobile" id="comment">
          <div class="column is-1-desktop is-2-tablet is-3-mobile">
            <a v-bind:href="contents.user.url" class="image"><img class="comment-icon is-rounded" v-bind:src="contents.user.images[50]" /></a>
          </div>
          <div class="column is-8-desktop is-8-tablet is-9-mobile">
            <a class="display-name" v-bind:href="contents.user.url">{{contents.user.display_name}}</a>
            <p>{{contents.created_on | moment("dddd, MMMM Do YYYY")}}</p>
            <p>{{contents.comment}}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(require('vue-moment'))
// import './../node_modules/bulma/css/bulma.css'
window.Vue = Vue
export default {
  name: 'project',
  data () {
    return {
      comments: null,
      comment: []
    }
  },
  methods: {
    getDisignerProjects: function (userID) {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/projects/' +
            userID +
            '/comments?api_key=UhOrt3HySq95LUrfQWErTpR5KK12oq2Q'
        )
        .then(response => {
          this.comments = response
          this.comment = response.data.comments
          this.$forceUpdate()
          console.log(this.comments)
        })
        .catch(error => console.log(error.stack))
    }
  },
  mounted () {
    this.getDisignerProjects(this.$route.params.id)
  }
}
</script>
<style scoped>
h2 {
  font-size: 50px;
}
h3{
  font-size: 30px;
}
#bottomPart {
  /* margin-top: 20px;
  margin-bottom: 20px; */
  width: 70%;
  margin-right: auto;
  margin-left: auto;
}
#stats {
  text-align: right;
}
#title {
  text-align: center;
}
.designerIcon {
  border-radius: 50%;
  height: 60px;
  width: 60px;
}
.column{
  text-align: left;
}
.arrow-left, .arrow-right{
  text-align: center;
  display: inline;
  font-size: 40px;
  padding: 0;
}
.titleAndArrow{
  margin: 50px 0;
}
.font-awesome-icon svg{
  margin: 2px;
}
.display-name {
  color: black;
  font-weight: bold;
  font-size: 14px;
}
#comments p{
  font-size: 13px;
}

h4{
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
}
</style>
