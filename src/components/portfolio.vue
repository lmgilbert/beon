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
    this.$root.$emit("pageChanged", this.designers.name + "arturdenys");
    this.$root.$emit("pageChanged", this.designers.name + "R_G_Gomina");
    this.$root.$emit("pageChanged", this.designers.name + "sashaillusign");
  }
}
</script>

<style scoped>

</style>
