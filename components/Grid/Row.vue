<template>
  <div :style="style" class="grid-row">
    <slot />
  </div>
</template>

<script>
export default {
  provide() {
    return {
      getColumns: this.getColumns,
    }
  },
  props: {
    cols: {
      type: [Number, String],
      default: 12,
      validator(v) {
        return !isNaN(v)
      },
    },
    sm: {
      type: [Number, String],
      default: 12,
      validator(v) {
        return !isNaN(v)
      },
    },
    md: {
      type: [Number, String],
      default: 12,
      validator(v) {
        return !isNaN(v)
      },
    },
    gutter: {
      type: [Number, String],
      default: 8,
      validator(v) {
        return !isNaN(v)
      },
    },
  },
  data() {
    return {
      columns: parseInt(this.cols),
      small: parseInt(this.sm),
      medium: parseInt(this.md),
      padding: parseInt(this.gutter),
      current: parseInt(this.cols),
      width: null,
      style: {
        '--max-cols': parseInt(this.cols),
        '--gap': parseInt(this.gutter).toString() + 'px',
      },
    }
  },
  mounted() {
    if (window) {
      this.init()
    }
  },
  watch: {
    cols(v) {
      this.columns = parseInt(v)
      this.updateStyle()
    },
    sm(v) {
      this.small = parseInt(v)
      this.updateStyle()
    },
    md(v) {
      this.medium = parseInt(v)
      this.updateStyle()
    },
    gutter(v) {
      this.padding = parseInt(v)
      this.updateStyle()
    },
    width() {
      this.updateStyle()
    },
  },
  methods: {
    init() {
      this.width =
        window.innerWidth - 1 - this.$vuetify.breakpoint.scrollBarWidth
      window.addEventListener('resize', () => {
        this.width =
          window.innerWidth - 1 - this.$vuetify.breakpoint.scrollBarWidth
      })
      this.$nextTick(() => {
        this.updateStyle()
      })
    },
    getColumns() {
      return this.current
    },
    updateStyle() {
      const { width, columns, small, medium, padding } = this
      const style = {
        '--max-cols': null,
        '--gap': null,
      }
      if (width < 601) {
        style['--max-cols'] = 1
        this.current = 1
      } else if (width < 960) {
        const smallMin = Math.min(columns, Math.min(small, medium))
        style['--max-cols'] = smallMin
        this.current = smallMin
      } else if (width < 1264) {
        const mediumMin = Math.min(columns, Math.min(medium, columns))
        style['--max-cols'] = mediumMin
        this.current = mediumMin
      } else {
        style['--max-cols'] = columns
        this.current = columns
      }
      style['--gap'] = `${padding}px`
      this.style = style
    },
  },
}
</script>

<style lang="sass">
@mixin grid-cols($max, $gap)
  --max-cols: #{$max}
  --gap: #{$gap}
  gap: var(--gap) var(--gap)
  grid-template-columns: repeat(auto-fit, calc( (100% - (var(--gap) * var(--max-cols))) / var(--max-cols) ))
.grid-row
  display: grid
  @include grid-cols(12, 8px)
</style>