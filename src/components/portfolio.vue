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
    this.$root.$emit("pageChanged", this.designers.name + "zhelieznova");
  }
}
</script>

<style scoped>

</style>
