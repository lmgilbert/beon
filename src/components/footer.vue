<template>
  <div class="">
    <div class="columns is-mobile is-centered navbar">
    <div class="columns">
      <div class="column">
      </div>
        <div class="column">
            <p style="float: left;"><img id="email" src="../assets/email.png"/></p>
            <p>ProDesign@bēon.co.nz</p>
        </div>
        <div class="column">
            <p style="float: left;"><img id="phone" src="../assets/phone.png"/></p>
            <p>03 321 12345</p>
        </div>
      <div class="column">
      </div>
    <div class="column">
        <img id="facebook" src="../assets/facebook.png"/>
        <img id="twitter" src="../assets/twitter.png"/>
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
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  height: 25px;
  color: black;
}
#phone {
  height: 40px;
  width: 40px;
}
#email {
  height: 40px;
  width: 40px;
}
p {
  color: #e15361;
}
</style>
