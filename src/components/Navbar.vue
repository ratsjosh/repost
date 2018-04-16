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
                <a class="navbar-item"
                   href="#">
                    Home
                </a>
                <a class="navbar-item"
                   href="#">
                    About
                </a>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <p class="control">
                        <a class="button is-primary"
                           href="#">
                            <span>Login</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      showNav: false
    }
  }
}
</script>

<style scoped>

</style>