<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <footerbar/>
  </div>
</template>

<script>
import nav from './components/NavBar'
import footerbar from './components/footer'
import home from './components/home'
export default {
  name: 'App',
  components: {
    'home' : home,
    'navbar': nav,
    'footerbar': footerbar
  }
}
</script>

<style>
#app {
  font-family: "Helvetica neue", "Helvetica", "Arial", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-size: 100px;
  font-weight: bold;
}
h2 {
  font-size: 80px;
}
h3{
  font-size: 20px;
  font-weight: bold;
  color: black;
}
p {
  color: #707070;
  font-size: 18px;
}
img {
  width: 100%;
  height: auto;
}
</style>
