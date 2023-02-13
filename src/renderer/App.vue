<script setup lang="ts">
import {useConfig} from "./stores/config";
import SignIn from "./components/SignIn.vue"
import SignUp from "./components/SignUp.vue"

const config = useConfig()

</script>

<template>
  <div id="app">
    <div class="header">
      <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a class="pure-menu-heading" href="">KOALA</a>

        <ul class="pure-menu-list">
          <li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Home</a></li>
          <li v-if="config.registered" class="pure-menu-item"><router-link to="/signIn" class="pure-menu-link">Sign In</router-link></li>
          <li v-else class="pure-menu-item"><router-link to="/signUp" class="pure-menu-link">Sign Up</router-link></li>
        </ul>
      </div>
    </div>
    <div class="pure-g">
      <div class="pure-u-1-5" />
      <div class="pure-u-3-5">
        <SignIn v-if="config.registered" />
        <SignUp v-else />
      </div>
      <div class="pure-u-1-5" />
    </div>

  </div>
</template>