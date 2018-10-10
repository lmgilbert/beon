<template>
    <div class="hello">
        <div class="hero-body">
            <div class="container has-text-centered">
               <p class="title2">
                 <router-link to="/">
                    <img id="hidden-logo" class="hidden-logo is-hidden-desktop is-hidden-tablet" src="../assets/beonLogo.png" />
                </router-link>
                </p>
                <p class="title is-hidden-mobile">
                    bēon
                </p>
                <p class="subtitle">
                    Dēsign Agēncy
                </p>
                <p class="subtitle2">
                    Professional Portfolios
                </p>
                <p class="subtitle3">
                    <div class="number is-hidden-mobile"><img id="email" src="../assets/white-email.png" />
                        <p>bēon@design.co.nz</p>
                    </div>
                    <div class="number is-hidden-mobile"><img id="phone" src="../assets/white-phone.png" />
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
        <p v-if='numberOfCompletedAPIRequests == 4'>{{ designers.zhelieznova.data }}</p>
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
      numberOfCompletedAPIRequests: 0
    }
  },

  methods: {
    // ELx4Wb6sGGwWnIwP06LglFqOqeFoFDEM
    // v5rFuoo114eTmVB5dKjaVHsbAaMu11gY
    // z4OTBPKghzwVWyp60e87u5KkZsxXxhCC
    // Kfxa6RCoauPffiqhTUja6Y5QhsxOkvAE
    // SPWgoDvDXuXxf735SKDCHf5vOU2XXQxq
    getDisignerProjects: function (userID) {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/' +
            userID +
            '?api_key=SPWgoDvDXuXxf735SKDCHf5vOU2XXQxq'
        )
        .then(response => {
          this.designers[userID] = response
          this.$forceUpdate()
          this.numberOfCompletedAPIRequests++
          console.log(this.designers)
        })
        .catch(error => console.log(error.stack))
    }
  },

  mounted () {
    this.getDisignerProjects('zhelieznova')
    this.getDisignerProjects('arturdenys')
    this.getDisignerProjects('R_G_Gomina')
    this.getDisignerProjects('sashaillusign')
    this.$root.$emit('pageChanged', '')
    /*  axios.get('https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/users/eldiablo?api_key=UhOrt3HySq95LUrfQWErTpR5KK12oq2Q')
      .then(response => {
        console.log(response)
      }).catch(error => console.log(error.stack)) */
  }
}
</script>

<style scoped>
.hero-body {
    background-image: url(../assets/Hero.png);
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
</style>
