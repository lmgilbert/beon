<template>
  <div class="contact">
    <div class="columns">
  <div class="column">
  </div>
  <div class="column">
    <div class="icons-footer">
    <img id="email" src="../assets/email.png"><div class="number"> bēon@design.co.nz</div>
    <img id="phone" src="../assets/phone.png"><div class="number" >03 321 12345</div>
    </div>
  </div>
  <div class="column"> 


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

#phone {
  height: 40px;
  width: 40px;
}
#email {
  height: 40px;
  width: 40px;
}
.icons-footer {
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 30px;
  position: absolute;
}
.number {
  text-decoration: none;
  color: #e15361;
  background-color: white;
  display: inline-block;
}
</style>
