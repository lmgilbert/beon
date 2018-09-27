<template>
<div class="nav" v-bind:class="{transparent: isOnHomePage}">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-12-mobile is-3-tablet is-2-desktop is-1">
                <div class="columns is-mobile">
                    <div class="column is-7">
                        <img class="image" id="logo" src="../assets/beonLogo.png" />
                    </div>
                    <div class="column is-5 has-text-right is-hidden-tablet is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only">
                        <img id="facebook" src="../assets/facebook.png" />
                        <img id="twitter" src="../assets/twitter.png" />
                    </div>
                </div>
            </div>
            <div class="column has-text-centered">

                <h1>
                  
              {{ pageTitle }}
            </h1>
            </div>
            <div class="column is-hidden-mobile is-12-mobile is-2-tablet is-2-desktop is-1 has-text-centered">
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
max-width: 90px;
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
.nav {
  padding: 30px 20px 20px;
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
