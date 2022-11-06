<template>
  <div class="grid-col" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  inject: ['getColumns'],
  props: {
    cols: {
      type: [Number, String],
      default: 1,
      validator(v) {
        return !isNaN(v)
      },
    },
  },
  data() {
    return {
      columns: parseInt(this.cols),
      style: {
        gridColumnEnd: `span ${Math.min(
          this.getColumns(),
          parseInt(this.cols)
        )}`,
      },
    }
  },
  mounted() {
    if (window) {
      this.updateStyle()
      window.addEventListener('resize', this.updateStyle)
    }
  },
  watch: {
    cols(v) {
      this.columns = parseInt(v)
      this.updateStyle()
    },
  },
  methods: {
    updateStyle() {
      const { columns } = this
      const parent = this.getColumns()
      const style = {
        gridColumnEnd: `span ${Math.min(columns, parent)}`,
      }
      this.style = style
    },
  },
}
</script>

<style lang="sass">
</style>