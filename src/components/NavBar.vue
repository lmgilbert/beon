<template>
  <div class="nav">
    <div class="columns is-mobile is-centered navbar">
      <img id="logo" src="../assets/logo.png"/>
      <p>nav</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  height: 25px;
  color: black;
}
#logo{
  height: 50px;
  width: 50px;
}

</style>
