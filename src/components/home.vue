<template>
  <div class="hello">
    <div class="hero-image">
      <div class="hero">
        <img id="hero-image" src="../assets/Hero.png" />
        <div class="text">
          <h1 class="is-hidden-mobile is-block">bēon</h1>
          <h3 class="is-hidden-mobile">Dēsign Agēncy</h3>
          <h4 class="is-hidden-mobile">Profssional Portfolios</h4>
          <div class="whiteIcons">
            <div class="number is-hidden-mobile"><img id="email" src="../assets/white-email.png" />
              <p>bēon@design.co.nz</p>
            </div>
            <div class="number is-hidden-mobile"><img id="phone" src="../assets/white-phone.png" />
              <p>03 321 12345</p>
            </div>
          </div>
        </div>
        <div class="Scroll-arrow">
          <img class="arrow" src="../assets/arrow.png" />
        </div>
      </div>
    </div>
    <h2></h2>
    <p>{{ designers.zhelieznova.data }}</p>
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
    // ELx4Wb6sGGwWnIwP06LglFqOqeFoFDEM
    // v5rFuoo114eTmVB5dKjaVHsbAaMu11gY
    //  z4OTBPKghzwVWyp60e87u5KkZsxXxhCC
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hero-image {
  width: 100%;
  height: auto;
}
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
  left: 51%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 20px;
}

h3 {
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 0px;
  font-weight: 400;
  font-size: 18px;
}

h4 {
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: 5px;
  font-size: 50px;
  font-weight: 200;
}

.text {
  text-align: center;
}

.number {
  background-color: transparent;
  color: white;
}

#phone {
  height: 40px;
  width: 40px;
}
img {
  width: ;
}

#email {
  height: 40px;
  width: 40px;
}

.whiteIcons {
  text-align: center;
  margin: -100px;
}

p {
  color: white;
  margin: 12px;
}

.phone {
  height: 50px;
  width: 50px;
  margin-top: -50px;
}

.email {
  height: 50px;
  width: 50px;
  margin-top: -50px;
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
</style>
