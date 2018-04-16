<template>
  <div id="app">
    <div class="columns is-gapless">
      <div class="column">
        <div id="verse">
          <h1 class="title is-2"><u>Daily Verse</u></h1>
          <div id="verse-container">
            <h1 class="title is-4 is-spaced">
              "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full."
            </h1>
            <h2 class="subtitle is-6">
              John 10:10 (NIV)
            </h2>
          </div>
        </div>
      </div>
      <div class="column is-three-fifths">
        <editor id="editor">

        </editor>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from './Editor.vue'
export default {
  components: {
    Editor
  }
}
</script>

<style lang="sass" scoped>
#verse-container
  width: 80%
  margin: 50px auto

#verse-container .subtitle:before
  content: "- "

#editor,
#verse
    @media screen and (min-width: 768px)
      padding: 50px 20px
</style>