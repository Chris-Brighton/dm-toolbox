<template>
  <div class="row" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GRow',
  provide() {
    return {
      gRow: {
        ...this.getData,
      },
    }
  },
  props: {
    cols: {
      type: [String, Number],
      default: 12,
      validator(cols) {
        cols = parseInt(cols)
        return !isNaN(cols)
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
  computed: {
    classes() {
      const g = this.gutter
      const c = {
        'row-gutters-default': g === 'default',
        'row-gutters-none': g === 'none',
        'row-gutters-large': g === 'large',
      }
      return c
    },
    getData() {
      return {
        columns: this.cols,
        gutter: this.gutter,
      }
    },
  },
}
</script>

<style lang="sass">
.row
  &-gutters-default
    margin: -4px !important
    padding: 2px 0 !important
  &-gutters-large
    margin: -12px !important
    padding: 6px 0 !important
  &-gutters-none
    margin: 0 !important
</style>