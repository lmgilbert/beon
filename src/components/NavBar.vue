<template>
  <div class="nav" v-bind:class="{transparent: isOnHomePage}">
    <div class="container">
      <div class="columns is-desktop is-vcentered">
          <div class="column is-1 is-three-tablet has-text-left">
              <img id="logo" src="../assets/beonLogo.png" />
          </div>
          <div class="column is-8 is-text-centered">
            <h1>

              Frankie's Work (test)
              {{ pageTitle }}
            </h1>
          </div>
          <div class="column has-text-right">
              <img id="facebook" src="../assets/facebook.png" />
              <img id="twitter" src="../assets/twitter.png" />
          </div>      
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      pageTitle: "",
      isOnHomePage: false,
    };
  },
  methods: {
    onPageChange(title) {
      this.pageTitle = title
      this.isOnHomePage = this.$router.currentRoute.name == "home"
    },

  },
  mounted: function() {
    this.isOnHomePage = this.$router.currentRoute.name == "home"
    this.$root.$on("pageChanged", this.onPageChange)
  },
  watch:{
    $route (to, from){
        this.isOnHomePage = to.name == "home"
    }
  } 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: white;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 3px
}
#logo {
  height: 70px;
  width: 80px;
}
#facebook {
  height: 50px;
  width: 30px;
  margin-left: 50px;
}
#twitter {
  height: 50px;
  width: 50px;
  margin-left: 30px;
}
.nav {
  padding: 20px 20px;
  background-color: #e15361;
}

.transparent {
  background-color: rgba(88, 33, 38, 0.5);
  position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
}

h1 {
  font-size: 40px;
  color: white;
}
</style>
