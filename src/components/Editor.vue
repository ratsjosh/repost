<template>
  <div id="quill-editor">
    <slot name="toolbar"></slot>
    <div id="editor"
         ref="editor"></div>
  </div>
</template>

<script>
import _Quill from 'quill'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import defaultOptions from '../../services/quill.options'
const Quill = window.Quill || _Quill

export default {
  data () {
    return {
      _content: '',
      defaultOptions
    }
  },
  props: {
    content: String,
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  mounted () {
    this.initialize()
  },
  methods: {
    initialize () {
      if (this.$el) {
        // Options
        this._options = Object.assign({}, this.defaultOptions, this.options)

        // Instance
        this.quill = new Quill(this.$refs.editor, this._options)
        this.quill.enable(false)

        // Set editor content
        if (this.value || this.content) {
          this.quill.pasteHTML(this.value || this.content)
        }

        // Disabled editor
        if (!this.disabled) {
          this.quill.enable(true)
        }

        // Update model if text changes
        this.quill.on('text-change', (delta, oldDelta, source) => {
          let html = this.$refs.editor.children[0].innerHTML
          const quill = this.quill
          const text = this.quill.getText()
          if (html === '<p><br></p>') html = ''
          this._content = html
          this.$emit('input', this._content)
          this.$emit('change', { html, text, quill })
        })

        // Emit ready event
        this.$emit('ready', this.quill)
      }
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  margin: 24px 0;
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
  color: #35495e;
}

#app {
  height: 100%;
}

#editor {
  height: 300px;
}
</style>

