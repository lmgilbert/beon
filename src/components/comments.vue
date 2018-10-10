<template>
  <div id="project-comment" class="has-text-left">
    <h4>Comments</h4>
    <div v-if="isLoading" class="image">
      <img src="../assets/lg.dual-ring-loader.gif" id="load" />
    </div>
    <div v-if="!isLoading" id="comments">
      <div v-for="contents in comment.slice(0,10)" :key="contents.key" class="columns is-mobile" id="comment">
        <div class="column is-1-desktop is-2-tablet is-3-mobile">
          <a v-bind:href="contents.user.url" class="image">
            <img class="comment-icon is-rounded" v-bind:src="contents.user.images[50]" />
          </a>
        </div>
        <div class="column is-8-desktop is-8-tablet is-9-mobile">
          <a class="display-name" v-bind:href="contents.user.url">{{ contents.user.display_name }}</a>
          <p id="date">{{ contents.created_on | moment("dddd, MMMM Do YYYY") }}</p>
          <p>{{ contents.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(require('vue-moment'))
window.Vue = Vue
export default {
  name: 'project-comment',
  data () {
    return {
      comments: null,
      comment: [],
      isLoading: true
    }
  },
  methods: {
    getDisignerProjects: function (userID) {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/projects/' +
            userID +
            '/comments?api_key=v5rFuoo114eTmVB5dKjaVHsbAaMu11gY'
        )
        .then(response => {
          this.isLoading = false
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

h3 {
  font-size: 30px;
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

.column {
  text-align: left;
}

#date {
  color: #9b9b9b;
}

.arrow-left, .arrow-right {
  text-align: center;
  display: inline;
  font-size: 40px;
  padding: 0;
}

.titleAndArrow {
  margin: 50px 0;
}

.font-awesome-icon svg {
  margin: 2px;
}

.display-name {
  color: black;
  font-weight: bold;
  font-size: 16px;
}

#comments p {
  font-size: 14px;
}

h4 {
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
}

#load {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
</style>
