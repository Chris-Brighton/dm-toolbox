<template>
  <div class="g-col" :style="colFlexWidth" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GCol',
  inject: ['gRow'],
  props: {
    cols: {
      type: [String, Number],
      default: 1,
      validator(cols) {
        cols = parseInt(cols)
        return !isNaN(cols) && cols > 0
      },
    },
    gutter: {
      type: String,
      default: 'default',
      validator(gutter) {
        return ['none', 'default', 'large'].includes(gutter)
      },
    },
  },
  data() {
    return {
      internal: {
        cols: this.cols,
      },
    }
  },
  computed: {
    colFlexWidth() {
      const cols = this.internal.cols
      const { columns, gutter } = this.gRow
      const x = Math.min(parseInt(cols), parseInt(columns))
      let g = 0
      if (gutter === 'default') g = 8
      if (gutter === 'large') g = 24
      const y = parseInt(columns)
      const p = (x / y) * 100
      return {
        flex: `0 0 calc(${p}% - ${g}px)`,
        maxWidth: `calc(${p}% - ${g}px)`,
        width: `calc(${p}% - ${g}px)`,
      }
    },
    classes() {
      const g = this.gRow.gutter
      const c = {
        'g-col-gutters-default': g === 'default',
        'g-col-gutters-none': g === 'none',
        'g-col-gutters-large': g === 'large',
      }
      return c
    },
  },
}
</script>

<style lang="sass">
.row
  .g-col
    width: 100%
    &-gutters-default
      margin: 4px
    &-gutters-large
      margin: 12px
    &-gutters-none
      margin: 0
</style>