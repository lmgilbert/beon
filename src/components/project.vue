<template>
  <div class="project">
      <h2>Project</h2>
  </div>
</template>

<script>
import Vue from 'vue'
window.Vue = Vue
export default {
  name: 'project',
  mounted: function() {
    this.$root.$emit("pageChanged", "it works!");
  }
}
</script>

<style scoped>

</style>
