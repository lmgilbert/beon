<template>
  <div id="project-comment" class="columns">
    <h3 class="column">comments</h3>
    <div id="comments" class="column">
        <div v-for="contents in comment" :key="contents">
            <img class="comment-icon" />
            <p class="display-name">{{contents.user.display_name}}</p>
            <p>{{contents.created_on | moment("dddd, MMMM Do YYYY")}}</p>
            <p>{{contents.comment}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(require('vue-moment'));
// import './../node_modules/bulma/css/bulma.css'
window.Vue = Vue
export default {
  name: 'project',
  data () {
    return {
      comments: null,
      comment: null,
      photo: null
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
    this.getDisignerProjects('70403283')
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
.comment-icon {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}
</style>
