<template>
  <div class="hello">
    <div class="hero-image">
      <div class="hero">
        <img src="../assets/Hero.png"/>
          <div class="text">
            <h1>bēon</h1>
            <h3>Design agency</h3>
            <h4>Meet our designers</h4>
                <img class="email" src="../assets/white-email.png"/>
          <img class="phone" src="../assets/white-phone.png"/>
          </div>

        </div>
      <div class="Scroll-arrow">
        <img class="arrow" src="../assets/arrow.png"/>

      </div>
      <div class="container">
    <div class="columns">
      <div class="column">
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>

</div>
      </div>
      <div class="column">
       <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>

      <div class="media-content">
        <p class="title is-4">John Smith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>

</div>
      </div>
      <div class="column">
       <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>
</div>
      </div>
      <div class="column">
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">      
      <div class="media-left"> </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
      </div>
    </div>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>
</div>
      </div>
    </div>

    </div>

    </div>
      <h2></h2>
      <p>{{ designers.zhelieznova.data }}</p>
   </div>

   
</template>


<script>
import axios from "axios";
import Vue from "vue";
window.Vue = Vue;
export default {
  name: "home",
  data() {
    return {
      designers: []
    };
  },

  methods: {
    // ELx4Wb6sGGwWnIwP06LglFqOqeFoFDEM
    // v5rFuoo114eTmVB5dKjaVHsbAaMu11gY
    //  z4OTBPKghzwVWyp60e87u5KkZsxXxhCC
    // Kfxa6RCoauPffiqhTUja6Y5QhsxOkvAE
    getDisignerProjects: function(userID) {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/" +
            userID +
            "?api_key=Kfxa6RCoauPffiqhTUja6Y5QhsxOkvAE"
        )
        .then(response => {
          this.designers[userID] = response;
          this.$forceUpdate();
          console.log(this.designers);
        })
        .catch(error => console.log(error.stack));
    }
  },

  mounted() {
    this.getDisignerProjects("zhelieznova");
    this.getDisignerProjects("arturdenys");
    this.getDisignerProjects("R_G_Gomina");
    this.getDisignerProjects("sashaillusign");
    this.$root.$emit("pageChanged", "");
    /*  axios.get('https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/eldiablo?api_key=UhOrt3HySq95LUrfQWErTpR5KK12oq2Q')
    .then(response => {
      console.log(response)
    }).catch(error => console.log(error.stack)) */
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  letter-spacing: 20px;
}
h3 {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 0px;
  font-weight: 400;
}
h4 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 5px;
  font-size: 50px;
  font-weight: 200;
}
.phone {
  height: 50px;
  width: 50px;
}
.email {
  height: 50px;
  width: 50px;
}
.Scroll-arrow {
  padding: 5px;
  padding-bottom: 50px;
}
.arrow {
  height: 50px;
  width: 50px;
}
</style>
