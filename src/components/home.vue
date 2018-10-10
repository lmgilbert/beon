<template>
    <div class="hello">
        <div class="hero-image">
            <div class="hero">
                <img src="../assets/Hero.png" />
                <div class="text">
                    <h1>bēon</h1>
                    <h3>Dēsign Agēncy</h3>
                    <h4>Profssional Portfolios</h4>
                    <div class="whiteIcons">
                        <div class="number"><img id="email" src="../assets/white-email.png" />
                            <p>bēon@design.co.nz</p>
                        </div>
                        <div class="number"><img id="phone" src="../assets/white-phone.png" />
                            <p>03 321 12345</p>
                        </div>
                    </div>
                </div>
                <div class="Scroll-arrow">
                    <img class="arrow" src="../assets/arrow.png" />
                </div>
                <project-card-container />
            </div>
        </div>
    </div>
</template>


<script>
    import axios from "axios";
    import Vue from "vue";
    import projectCardContainer from "./projectCardContainer";
    window.Vue = Vue;
    export default {
        name: "home",
        components: {
            "project-card-container": projectCardContainer
        },
        data() {
            return {
                designers: [],
                apiRequestComplete: false
            };
        },
    
        methods: {
            // ELx4Wb6sGGwWnIwP06LglFqOqeFoFDEM
            // v5rFuoo114eTmVB5dKjaVHsbAaMu11gY
            //  z4OTBPKghzwVWyp60e87u5KkZsxXxhCC
            // Kfxa6RCoauPffiqhTUja6Y5QhsxOkvAE
            // SPWgoDvDXuXxf735SKDCHf5vOU2XXQxq
        },
    
        mounted() {
    
    
            this.$root.$emit("pageChanged", "");
    
        }
    };
</script>

<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    h1 {
        position: absolute;
        top: 30%;
        left: 51%;
        transform: translate(-50%, -50%);
        color: white;
        letter-spacing: 20px;
    }
    
    h3 {
        position: absolute;
        top: 38%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        letter-spacing: 0px;
        font-weight: 400;
        font-size: 18px;
    }
    
    h4 {
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        letter-spacing: 5px;
        font-size: 50px;
        font-weight: 200;
    }
    
    .number {
        background-color: transparent;
        color: white;
    }
    
    #phone {
        height: 40px;
        width: 40px;
    }
    
    #email {
        height: 40px;
        width: 40px;
    }
    
    .whiteIcons {
        text-align: center;
        margin: -100px;
    }
    
    p {
        color: white;
        margin: 12px;
    }
    
    .phone {
        height: 50px;
        width: 50px;
        margin-top: -50px;
    }
    
    .email {
        height: 50px;
        width: 50px;
        margin-top: -50px;
    }
    
    .hero-icon {
        margin-bottom: 50px;
    }
    
    .Scroll-arrow {
        padding-bottom: 50px;
        padding: 50px 20px 50px;
        text-align: center;
    }
    
    .arrow {
        height: 50px;
        width: 50px;
    }
    
    .container {
        background-color: #f7f7f7;
        padding: 30px;
    }
</style>
