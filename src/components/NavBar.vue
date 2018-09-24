<template>
  <div class="nav">
    <div class="columns">
        <div class="column">
    <img id="logo" src="../assets/beonLogo.png"/>
    
  </div>
      <div class="column">
      <h1></h1>
</div>
    <div class="column">
      
</div>
    <div class="column">
      
</div>
    <div class="column">
       <img id="facebook" src="../assets/facebook.png"/>
        <img id="twitter" src="../assets/twitter.png"/>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo {
  height: 70px;
  width: 80px;
}
#facebook {
  height: 50px;
  width: 30px;
}
#twitter {
  height: 50px;
  width: 50px;
  margin-left: 30px;
}
.nav {
  padding: 30px 30px;
  background-color: #e15361;
}
h1 {
  font-size: 40px;
  color: white;
}
</style>
