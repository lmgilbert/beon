<template>
  <div class="portfolio">
      <h2>Portfolio</h2>
  </div>
</template>

<script>
import Vue from 'vue'
window.Vue = Vue

export default {
  name: 'portfolio',
  mounted: function() {
    this.$root.$emit("pageChanged", "PORTFOLIO");
  },
  watch:{
    $route (to, from){
      if (to.name == "portfolio") {
        this.$root.$emit("pageChanged", "PORTFOLIO");
      }
    }
  } 
}
</script>

<style scoped>

</style>
