<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item"
               href="#">
                <h1 class="title">Repost</h1>
            </a>
            <div class="navbar-burger burger"
                 @click="showNav = !showNav"
                 data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample"
             class="navbar-menu"
             :class="{ 'is-active': showNav }">
            <div class="navbar-start">
                <router-link class="navbar-item" to="Home">Home</router-link>
                <router-link class="navbar-item" to="Post">Journal</router-link>
                <router-link class="navbar-item" to="/">About</router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <p class="control">
                        <button class="button is-primary"
                                v-show="!isLoggedIn()"
                                @click="handleLogin()">Log In</button>
                    </p>
                </div>
                <div class="navbar-item">
                    <p class="control">
                        <button class="button is-danger"
                                v-show="isLoggedIn()"
                                @click="handleLogout()">Log out</button>
                    </p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { isLoggedIn, login, logout } from '../../services/utils/auth'
export default {
  name: 'Navbar',
  data () {
    return {
      showNav: false
    }
  },
  methods: {
    handleLogin () {
      login()
    },
    handleLogout () {
      logout()
    },
    isLoggedIn () {
      return isLoggedIn()
    }
  }
}
</script>

<style scoped>

</style>