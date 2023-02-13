<script setup lang="ts">
import {useHabery} from "../stores/habery";
import {ref} from "vue";

const habery = useHabery()
const passcode = ref("")

function initialize() {
  habery.initialize(passcode.value)
}


</script>

<template>
  <div id="signin">
    <div class="splash-container">
      <div class="splash">
        <h1 class="splash-head">KOALA KERI Wallet</h1>
        <h3>Enter a new 22 Character Passcode to Get Started</h3>
        <form class="pure-form-stacked">
          <fieldset>
            <legend>Get Started</legend>
            <input type="text" v-model="passcode" placeholder="Passcode" />
            <button type="button" @click="initialize" class="pure-button pure-button-primary">Sign Up</button>
          </fieldset>
        </form>
        <h3>{{ habery.commAid }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
#hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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

a {
  color: #42b983;
}
</style>
