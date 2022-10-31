<template>
  <v-chip
    close
    close-icon="mdi-close-box"
    color="blue"
    label
    class="rounded-0 black--text"
    @click:close="click"
  >
    <h2>{{ count }}</h2>
    <v-icon>{{ icon }}</v-icon>
  </v-chip>
</template>

<script>
export default {
  name: 'DicePill',
  props: {
    index: {
      type: Number,
      required: true,
    },
    dice: {
      type: Object,
      default() {
        return { dice: 20, count: 1 }
      },
    },
  },
  emits: ['remove'],
  computed: {
    icon() {
      return `mdi-dice-d${this.dice.dice.toString()}`
    },
    count() {
      return this.dice.count
    },
  },
  methods: {
    click() {
      this.$emit('remove', this.index)
    },
  },
}
</script>