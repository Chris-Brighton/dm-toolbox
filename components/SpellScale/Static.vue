<template>
  <g-row v-if="!loading" cols="1">
    <g-col cols="1">
      <h3>Spell {{ name }} Scaling</h3>
      <v-row><v-col cols="12" /> </v-row>
    </g-col>
    <g-col cols="1">
      <g-row v-for="(i, k) in internal" :key="k" cols="11">
        <g-col cols="9">
          <span>Level: {{ i.level }}</span>
        </g-col>
        <g-col cols="1" class="d-flex justify-center">
          <v-btn
            tile
            :color="k === copyIndex ? 'secondary' : 'info'"
            class="copy-button-size"
            :disabled="i.modifier === null"
            @click.prevent="copy()"
          >
            copy
            <v-icon right>mdi-content-copy</v-icon>
          </v-btn>
        </g-col>
        <g-col cols="1" class="d-flex justify-center">
          <v-btn
            tile
            color="success"
            :disabled="copyRoll === null"
            class="copy-button-size"
            @click.prevent="paste()"
          >
            paste
            <v-icon right>mdi-content-paste</v-icon>
          </v-btn>
        </g-col>
      </g-row>
    </g-col>
  </g-row>
</template>
<script>
export default {
  name: 'SpellScaleStatic',
  props: {
    name: {
      type: String,
      default: 'Level',
    },
    scale: {
      type: Array,
      default() {
        return []
      },
    },
  },
  emits: ['update-scale'],
  data() {
    return {
      internal: this.scale,
      copyRoll: null,
      copyIndex: null,
      loading: false,
    }
  },
  watch: {
    internal: {
      deep: true,
      handler() {
        this.$emit('update-scale', this.internal)
      },
    },
    scale: {
      deep: true,
      handler(n) {
        console.log('scale watcher')
        this.internal = n
      },
    },
  },
  methods: {
    copy(roll, index) {
      this.copyRoll = roll
      this.copyIndex = index
    },
    paste(index) {
      this.$refs.diceRoll[index].save(this.copyRoll)
    },
  },
}
</script>

<style lang="sass">
.copy-button-size
  height: 53px !important
</style>