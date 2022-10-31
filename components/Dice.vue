<template>
  <div
    class="custom-dice-icon"
    :class="{ 'shrink-shape': dice === 8 || dice === 10 }"
  >
    <v-icon :class="classes" :color="color">{{ icon }}</v-icon>
    <span class="white--text custom-dice-icon-text">{{ internal || '?' }}</span>
  </div>
</template>

<script>
export default {
  props: {
    roll: {
      type: Number,
      default: null,
    },
    dice: {
      type: Number,
      default: 20,
    },
    animate: {
      type: Boolean,
      default: true,
    },
    working: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:working'],
  data() {
    return {
      internal: null,
    }
  },
  computed: {
    icon() {
      switch (this.dice) {
        case 4:
          return 'mdi-triangle'
        case 6:
          return 'mdi-square'
        case 8:
          return 'mdi-square'
        case 10:
          return 'mdi-square'
        case 12:
          return 'mdi-pentagon'
        case 20:
          return 'mdi-hexagon'
        default:
          return 'mdi-circle'
      }
    },
    color() {
      switch (this.dice) {
        case 4:
          return 'error'
        case 6:
          return 'success'
        case 8:
          return 'warning'
        case 10:
          return 'info'
        case 12:
          return 'secondary'
        case 20:
          return 'primary'
        default:
          return 'accent'
      }
    },
    classes() {
      return {
        'mdi-rotate-45': this.dice === 8 || this.dice === 10,
      }
    },
  },
  watch: {
    async roll(newRoll) {
      if (newRoll !== this.internal) {
        if (this.animate) await this.rollDice(newRoll)
        else this.internal = newRoll
      }
    },
  },
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    setDice(roll = null) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.internal = roll || this.getRndInteger(1, this.dice)
          resolve()
        }, this.getRndInteger(50, 250))
      })
    },
    async rollDice(roll) {
      this.$emit('update:working', true)
      const changes = this.getRndInteger(5, 20)
      for (let i = 0; i < changes; i++) {
        await this.setDice()
      }
      await this.setDice(roll)
      this.$nextTick(() => {
        this.$emit('update:working', false)
      })
    },
  },
}
</script>

<style lang="sass">
.shrink-shape
  .v-icon
    font-size: 45px !important
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
.custom-dice-icon
  height: 56px !important
  width: 56px !important
  position: relative
.custom-dice-icon
  .v-icon
    font-size: 56px
    position: absolute
  .custom-dice-icon-text
    position: absolute
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
    font-weight: bolder
    font-size: 25px
</style>