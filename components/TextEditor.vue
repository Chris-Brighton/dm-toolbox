<template>
  <v-card
    dense
    :style="style"
    tile
    flat
    class="text-editor mb-4"
    :class="{ 'text-editor-active': active }"
  >
    <v-card-title
      v-if="label"
      class="pa-0"
      :class="{ 'primary--text': active }"
      >{{ label }}</v-card-title
    >
    <v-card-text
      class="pa-0 text-background"
      :class="{ 'text-background-active': active }"
    >
      <client-only>
        <VueEditor
          :id="id"
          v-model="html"
          :editor-toolbar="toolbar"
          @blur="blur"
          @focus="focus"
        />
      </client-only>
    </v-card-text>
  </v-card>
</template>

<script>
import uuid from 'uniqid'
const editorToolbar = [
  [{ header: [false, 1, 2, 3, 4, 5, 6] }],
  ['bold', 'italic', 'underline'],
  ['blockquote'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],
  ['link'],
  ['clean'],
]
const id = uuid()

export default {
  name: 'TextEditor',
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
    height: {
      type: [String, Number],
      default: 256,
    },
    width: {
      type: [String, Number],
      default: '100%',
    },
  },
  emits: ['input'],
  data() {
    return {
      id,
      html: this.value,
      active: false,
      toolbar: editorToolbar,
    }
  },
  computed: {
    style() {
      const height =
        typeof this.height === 'number' ? `${this.height}px` : this.height
      const width =
        typeof this.width === 'number' ? `${this.width}px` : this.width
      return { minHeight: height, width }
    },
  },
  watch: {
    value(n, o) {
      if (n !== o) this.html = n
    },
    html(n, o) {
      if (n !== 0) this.$emit('input', this.html)
    },
  },
  methods: {
    focus() {
      this.active = true
    },
    blur() {
      this.active = false
      this.$emit('input', this.html)
    },
  },
}
</script>

<style lang="sass">
.text-background-active
  background: rgba(255, 255, 255, 0.08) !important

.text-background
  background: rgba(255, 255, 255, 0.08)
  transition: all 0.3s ease

.text-editor
  &:hover
    .text-background
      background: rgba(255, 255, 255, 0.16)

.quillWrapper,
.ql-toolbar,
.ql-container
  border: none !important

.ql-editor
  border-top: 1px solid rgba(255, 255, 255, 0.7) !important
  border-left: none !important
  border-right: none !important
  border-bottom: none !important

.text-editor
  border-bottom: 1px solid rgba(255, 255, 255, 0.7) !important
  transition: border-color .3s ease

.text-editor-active
  border-bottom: 1px solid var(--v-primary) !important

.ql-stroke
  fill: none !important
  stroke: #fff !important

.ql-formats > button:hover .ql-stroke
  stroke: var(--v-primary) !important

.ql-snow .ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button:focus,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow.ql-toolbar button:focus,
.ql-snow.ql-toolbar button:hover,
.ql-picker-label .ql-active,
.ql-selected,
.ql-picker-item:hover,
.ql-picker:hover .ql-picker-label:before
  color: var(--v-primary) !important

.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke
  stroke: var(--v-primary) !important

.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill
  fill: var(--v-primary) !important

.ql-picker-options
  background-color: #121212 !important
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options
  border-color: #121212 !important
.ql-picker-label,
.ql-picker-item
  color: #fff
</style>