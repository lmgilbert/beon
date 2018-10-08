<template>
  <div id="projectCard">
    asdfasdf
    {{ designerInfo }}
      <h1 v-for="designer in designerInfo" v-bind:key="designer.key">
        test
      </h1>
  </div>
        <!-- {{ designers }} -->
        <!--
        <img class="user-image" v-bind:src="designerInfo.orange_zutto.data.user.images[230]"/>
        <p> {{ designerInfo.orange_zutto.data.user.display_name }}</p>
            <div class="card-container" v-for='project in row.slice(0, 4)' :key="project.key">
              
              <img v-bind:src='project.covers[202]'/>
              <p>{{ project.name }}</p>
              <a href="#"> View More </a> 
            </div>
        </div>
      </div>
      -->

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'

window.Vue = Vue
export default {
  name: 'projectCardContainer',
  props: ["designerInfo"],
  data () {
    return {
      designers: {"test": "ugh"},
      work: null
    }
  },
  methods: {
    
    getDisignerProjects: (userID) => {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/' + userID +
            '/projects?api_key=SPWgoDvDXuXxf735SKDCHf5vOU2XXQxq'
        )
        .then(
          response => {
          if (!(userID in this.designerInfo)) {
            this.designerInfo[userID] = {};
          }
          this.designerInfo[userID]["projectData"] = response.data.projects
          console.log("this one");
          console.log(this.designerInfo);
          this.$forceUpdate();
        })
        .catch(error => console.log(error.stack))
    }
  },
  mounted () {

     var mainObject = {};
    var promises = [];
    var apiKey = "SPWgoDvDXuXxf735SKDCHf5vOU2XXQxq";
    var userIDs = [{url: "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/", id: "zhelieznova", type: "userInfo"}, 
                   {url: "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/", id: "stoempstudio", type: "userInfo"}, 
                   {url: "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/", id: "orange_zutto", type: "userInfo"}, 
                   {url: "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/", id: "sashaillusign", type: "userInfo"},
                   {url: "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/", id: "zhelieznova/projects", type: "projectInfo"}, 
                   {url: "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/", id: "stoempstudio/projects", type: "projectInfo"}, 
                   {url: "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/", id: "orange_zutto/projects", type: "projectInfo"}, 
                   {url: "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/", id: "sashaillusign/projects", type: "projectInfo"}]


    userIDs.forEach(function(singleElement) {
      promises.push(axios
        .get(
          singleElement +
            "?api_key=" + apiKey
        ));
    });

    axios.all(promises).then((response) => {
      response.forEach((requestResponse) => {
          this.designers[requestResponse.data.user.username] = requestResponse.data;
      });
      this.$forceUpdate();
      this.apiRequestComplete = true;
    });
  }
}
</script>

<style scoped>
p{
  font-size: 14px;
}
.card-container{
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-right: 40px;
  font-size: 18px;
  background-color: white;
}
#projectCard{
    margin: auto;
    width: 80%;
}
a{
  color: black;
  font-weight: bold;
}
.background{
  background-color: #f8f8f8;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  margin-bottom: 100px;
}
.user-image{
  border-radius: 50%;
  width: auto;
}
</style>