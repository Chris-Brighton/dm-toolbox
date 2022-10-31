<template>
  <v-chip
    close
    close-icon="mdi-close-box"
    color="blue"
    label
    class="rounded-0 black--text"
    @click:close="click"
  >
    <h2 v-if="modifier.type === 'CUSTOM'">{{ text }}</h2>
    <h3 v-if="modifier.type !== 'CUSTOM'">{{ text }}</h3>
  </v-chip>
</template>

<script>
import { modPillLookup } from '~/utils/static/dice'
export default {
  name: 'ModPill',
  props: {
    index: {
      type: Number,
      required: true,
    },
    modifier: {
      type: Object,
      default() {
        return { type: 'CUSTOM', value: 0 }
      },
    },
  },
  emits: ['remove'],
  computed: {
    text() {
      const { type, value } = this.modifier
      if (type === 'CUSTOM') {
        return `+ ${value}`
      }
      const found = modPillLookup.find((m) => m.value === type)
      return `+ ${found.label} ${found.suffix}`
    },
  },
  methods: {
    click() {
      this.$emit('remove', this.index)
    },
  },
}
</script>