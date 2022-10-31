<template>
  <g-row v-if="!loading" cols="1">
    <g-col cols="1">
      <label>Spell {{ name }} Scaling</label>
      <v-row><v-col cols="12" /> </v-row>
    </g-col>
    <g-col cols="1">
      <g-row v-for="(i, k) in scale" :key="k" cols="11">
        <g-col cols="9">
          <make-dice-roll
            ref="diceRoll"
            v-model="i.roll"
            :label="'Level: ' + i.level + ' Dice Roll'"
          />
        </g-col>
        <g-col cols="1" class="d-flex justify-center">
          <v-btn
            tile
            :color="k === copyIndex ? 'secondary' : 'info'"
            class="copy-button-size"
            :disabled="i.roll.length === 0"
            @click.prevent="copy(i.roll, k)"
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
            @click.prevent="paste(k)"
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
  name: 'SpellScaleDice',
  props: {
    startLevel: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: 'Level',
    },
    value: {
      type: Array,
      default() {
        return []
      },
    },
  },
  emits: ['input'],
  data() {
    return {
      scale: [],
      copyRoll: null,
      copyIndex: null,
      loading: false,
    }
  },
  watch: {
    startLevel(n, o) {
      if (n !== o) {
        this.updateScale(n)
      }
    },
    value() {},
  },
  mounted() {
    if (this.startLevel) this.updateScale(this.startLevel)
  },
  methods: {
    copy(roll, index) {
      this.copyRoll = roll
      this.copyIndex = index
    },
    paste(index) {
      this.$refs.diceRoll[index].save(this.copyRoll)
    },
    updateScale(n) {
      this.loading = true
      this.$nextTick(() => {
        const scale = []
        for (let i = n; i <= 20; i++) {
          const found = this.scale.find((s) => (s.level = i))
          if (found) {
            scale.push(found)
          } else {
            scale.push({
              level: i,
              roll: [],
            })
          }
        }
        this.$nextTick(() => {
          this.scale = scale
          this.loading = false
        })
      })
    },
  },
}
</script>

<style lang="sass">
.copy-button-size
  height: 53px !important
</style>
