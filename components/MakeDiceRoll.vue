<template>
  <v-dialog v-model="show" :max-width="620" class="rounded-0">
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="display"
        hide-details
        :label="label"
        color="primary"
        filled
        dense
        readonly
        class="rounded-0 append-no-margin"
        @click:append="show = !show"
      >
        <template #append-outer>
          <v-btn
            tile
            fab
            :color="valid ? 'green' : 'secondary'"
            class="append-button-size"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-cog</v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </template>
    <v-card tile>
      <v-card-title class="primary--text h2"> Edit Dice Roll </v-card-title>
      <v-divider />
      <v-card-text>
        <div class="d-flex flex-row mt-2">
          <div>
            <h4 class="primary--text">Dice Roll</h4>
            <div class="d-flex flex-row">
              <div>
                <span>Count</span>
                <v-text-field
                  v-model="current.dice.count"
                  class="rounded-0"
                  type="number"
                  style="width: 80px"
                  dense
                  hide-details
                  filled
                />
              </div>
              <div class="mx-1">
                <span>Dice</span>
                <v-select
                  v-model="current.dice.dice"
                  :items="dice"
                  item-value="value"
                  filled
                  dense
                  hide-details
                  class="rounded-0"
                  style="width: 80px"
                >
                  <template #selection="{ item }">
                    <v-icon v-if="item.value !== 100">
                      mdi-dice-{{ item.label }}
                    </v-icon>
                    <template v-if="item.value === 100">{{
                      item.label
                    }}</template>
                  </template>
                  <template #item="{ item }">
                    <v-icon v-if="item.value !== 100">
                      mdi-dice-{{ item.label }}
                    </v-icon>
                    <template v-if="item.value === 100">{{
                      item.label
                    }}</template>
                  </template>
                </v-select>
              </div>
              <div class="d-flex flex-column">
                <span>&nbsp;</span>
                <v-btn
                  color="green"
                  fab
                  tile
                  small
                  style="height: 41px; width: 41px"
                  @click.prevent="addDice"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
          <v-spacer />
          <div>
            <h4 class="primary--text">Modifier</h4>
            <div class="d-flex flex-row">
              <div>
                <span>Type</span>
                <v-select
                  v-model="current.modifier.type"
                  :items="types"
                  item-text="label"
                  item-value="value"
                  filled
                  dense
                  hide-details
                  class="rounded-0"
                  :class="{
                    'thin-select': !hideCustomValue,
                    'wide-select': hideCustomValue,
                  }"
                />
              </div>
              <div class="mx-1">
                <span>{{ hideCustomValue ? '' : 'Value' }}</span>
                <v-text-field
                  v-if="!hideCustomValue"
                  v-model="current.modifier.value"
                  filled
                  dense
                  type="number"
                  hide-details
                  class="rounded-0"
                  style="width: 80px"
                />
              </div>
              <div class="d-flex flex-column">
                <span>&nbsp;</span>
                <v-btn
                  color="green"
                  fab
                  tile
                  small
                  style="height: 41px; width: 41px"
                  @click.prevent="addModifier"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-row flex-wrap align-center">
          <template v-for="(r, index) in internal">
            <dice-pill
              v-if="r.type === 'DICE'"
              :key="index"
              class="mt-2"
              :index="index"
              :dice="{ dice: r.dice, count: r.count }"
              @remove="remove"
            />
            <mod-pill
              v-if="r.type === 'MODIFIER'"
              :key="index"
              class="mt-2"
              :index="index"
              :modifier="{ type: r.modifier, value: r.value }"
              @remove="remove"
            />
            <v-chip
              v-if="index < internal.length - 1"
              :key="'plus-' + index"
              class="mx-2 mt-2 rounded-0"
              label
              small
            >
              <h2>+</h2>
            </v-chip>
          </template>
        </div>
      </v-card-text>
      <v-card-actions class="pa-0 d-flex flex-row">
        <v-btn
          tile
          class="ma-0 py-7"
          style="width: 50%"
          color="error"
          @click="show = false"
        >
          cancel
        </v-btn>
        <v-btn
          tile
          class="ma-0 py-7"
          style="width: 50%"
          color="success"
          @click.prevent="save(null)"
        >
          save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { modifierLookup, diceTypes, modifierTypes } from '~/utils/static/dice'
export default {
  name: 'MakeDiceRoll',
  props: {
    label: {
      type: String,
      default: 'Dice Roll',
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
      show: false,
      valid: false,
      display: '',
      current: {
        dice: {
          count: 1,
          dice: 20,
        },
        modifier: {
          type: 'CUSTOM',
          value: 0,
        },
      },
      internal: [],
      dice: diceTypes,
      types: modifierTypes,
    }
  },
  computed: {
    hideCustomValue() {
      if (this.current.modifier.type === 'CUSTOM') return false
      return true
    },
  },
  watch: {
    show(update) {
      if (update) {
        this.internal = this.value
      }
    },
    value(n, o) {
      if (JSON.stringify(n) !== JSON.stringify(o)) {
        this.internal = n
      }
    },
  },
  mounted() {
    if (Array.isArray(this.value)) {
      this.internal = this.value
    } else {
      this.$emit('input', [])
    }
  },
  methods: {
    makeDisplay() {
      const parts = []
      this.value.forEach(({ type, dice, count, modifier, value }) => {
        if (type === 'DICE') {
          parts.push(`${count} d${dice}`)
        }
        if (type === 'MODIFIER') {
          if (modifier === 'CUSTOM') {
            parts.push(value.toString())
          } else {
            const { display } = modifierLookup.find((l) => l.find === modifier)
            parts.push(display)
          }
        }
      })
      this.display = parts.join(' + ')
    },
    addDice() {
      const { dice, count } = this.current.dice
      this.internal.push({
        type: 'DICE',
        dice,
        count,
      })
      this.current.dice = { dice: 20, count: 1 }
    },
    addModifier() {
      const { type, value } = this.current.modifier
      const roll = {
        type: 'MODIFIER',
        modifier: type,
      }
      if (type === 'CUSTOM') roll.value = value
      this.internal.push(roll)
      this.current.modifier = { type: 'CUSTOM', value: 0 }
    },
    remove(index) {
      this.internal.splice(index, 1)
    },
    save(data = null) {
      if (data) {
        this.internal = data
      }
      this.$emit('input', this.internal)
      this.$nextTick(() => {
        this.makeDisplay()
        this.show = false
      })
    },
  },
}
</script>

<style>
</style>

<style lang="sass">
.append-no-margin
  & > div
    &.v-input__append-outer
      margin: 0 !important
      height: 53px !important
.append-button-size
  height: 53px !important
  width: 53px !important
.wide-select
  width: 280px
.thin-select
  width: 200px
</style>