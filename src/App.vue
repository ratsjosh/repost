<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import './assets/mq.sass'

body
  margin: 0

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

main
  text-align: center

header
  margin: 0
  height: 56px
  padding: 0 16px 0 24px
  color: #2c3e50
  span
    display: block
    position: relative
    font-size: 20px
    line-height: 1
    letter-spacing: 0.02em
    font-weight: 400
    box-sizing: border-box
    padding-top: 16px
</style>
