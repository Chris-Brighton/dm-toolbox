<template>
  <v-form v-model="isValid">
    <grid-row :cols="4" :md="2">
      <grid-col :cols="2">
        <!-- input:Name -->
        <v-text-field
          v-model="spell.name"
          type="text"
          dense
          filled
          class="rounded-0"
        >
          <template #label>
            Name
            <span class="error--text">*</span>
          </template>
        </v-text-field>
      </grid-col>
      <grid-col :cols="1">
        <!-- input:Level -->
        <v-select
          v-model="spell.level"
          dense
          :items="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
          filled
          class="rounded-0"
          @change="updateScale"
        >
          <template #label>
            Level
            <span class="error--text">*</span>
          </template>
        </v-select>
      </grid-col>
      <grid-col :cols="1">
        <!-- input:School -->
        <v-select
          v-model="spell.school"
          label="School"
          dense
          :items="[
            'Abjuration',
            'Conjuration',
            'Divination',
            'Enchantment',
            'Evocation',
            'Illusion',
            'Necromancy',
            'Transmutation',
          ]"
          filled
          class="rounded-0"
        />
      </grid-col>
    </grid-row>

    <grid-row :cols="3" :md="1">
      <grid-col :cols="1">
        <!-- input:Casting Time -->
        <v-text-field
          v-model="spell.castingTime"
          label="Casting Time"
          type="number"
          dense
          filled
          class="rounded-0"
        />
      </grid-col>
      <grid-col :cols="1">
        <!-- input:Casting Type -->
        <v-select
          v-model="spell.castingType"
          label="Casting Duration"
          dense
          :items="castingTypes"
          filled
          class="rounded-0"
          @change="updatedCastingType"
        />
      </grid-col>
      <grid-col :cols="1">
        <!-- input:Reaction Casting Time Description -->
        <v-text-field
          v-model="spell.reactionCastingTimeDescription"
          label="Reaction Casting Time Description"
          type="text"
          dense
          :disabled="disabled.reactionCastingTimeDescription"
          filled
          class="rounded-0"
        />
      </grid-col>
    </grid-row>

    <!-- input:Ritual -->
    <v-checkbox v-model="spell.ritual" color="secondary" dense>
      <template #label>
        Ritual Spell
        <v-tooltip right>
          <template #activator="{ on }">
            <v-icon small color="info" class="ml-1" v-on="on">
              mdi-help-circle
            </v-icon>
          </template>
          Check this box if the spell can be cast as a ritual
        </v-tooltip>
      </template>
    </v-checkbox>

    <div class="d-flex">
      <!-- input:Components -->
      <div class="d-flex flex-column mr-2">
        <span>Components</span>
        <div class="d-flex">
          <v-btn
            fab
            :class="{ grey: !spell.verbal, secondary: spell.verbal }"
            tile
            style="height: 53px; width: 53px"
            @click.prevent="setVerbal"
          >
            v
          </v-btn>
          <v-btn
            fab
            class="mx-2"
            :class="{ grey: !spell.somatic, secondary: spell.somatic }"
            tile
            style="height: 53px; width: 53px"
            @click.prevent="setSomatic"
          >
            s
          </v-btn>
          <v-btn
            fab
            :class="{
              grey: !spell.material,
              secondary: spell.material,
            }"
            tile
            style="height: 53px; width: 53px"
            @click.prevent="setMaterial"
          >
            m
          </v-btn>
        </div>
      </div>
      <!-- input:Material Components Description -->
      <v-text-field
        v-model="spell.materialComponentsDescription"
        label="Material Components Description"
        type="text"
        dense
        :disabled="disabled.materialComponentsDescription"
        filled
        class="rounded-0"
        style="margin-top: 22px"
      />
    </div>

    <g-row cols="5">
      <g-col cols="1">
        <!-- input:Range Type -->
        <v-select
          v-model="spell.rangeType"
          label="Spell Range Type"
          dense
          :items="rangeTypes"
          filled
          class="rounded-0"
          @change="updatedRangeType"
        />
      </g-col>
      <g-col cols="1">
        <!-- input:Range -->
        <v-text-field
          v-model="spell.range"
          label="Spell Range (ft.)"
          type="number"
          dense
          filled
          class="rounded-0"
          :disabled="disabled.range"
        />
      </g-col>
      <g-col cols="1">
        <!-- input:Duration Type-->
        <v-select
          v-model="spell.durationType"
          label="Duration Type"
          dense
          :items="durationTypes"
          filled
          class="rounded-0"
          @change="updatedDurationType"
        />
      </g-col>
      <g-col cols="1">
        <!-- input:Duration -->
        <v-text-field
          v-model="spell.duration"
          label="Duration"
          type="number"
          dense
          filled
          :disabled="disabled.duration"
          class="rounded-0"
        />
      </g-col>
      <g-col cols="1">
        <!-- input:Duration Time -->
        <v-select
          v-model="spell.durationTime"
          label="Duration Time"
          dense
          :items="durationTimes"
          filled
          :disabled="disabled.durationTime"
          class="rounded-0"
        />
      </g-col>
    </g-row>
    <!-- input:Description -->
    <text-editor v-model="spell.description" label="Description" />

    <g-row cols="10">
      <g-col cols="4">
        <!-- input:AOE Type -->
        <v-select
          v-model="spell.aoeType"
          label="Area of Effect Type"
          dense
          filled
          :items="aoeTypes"
          class="rounded-0"
        />
      </g-col>
      <g-col cols="4">
        <!-- input:AOE Size -->
        <v-text-field
          v-model="spell.aoeSize"
          type="text"
          label="Area of Effect Size (Ft.)"
          dense
          filled
          :disabled="spell.aoeType === 'None'"
          class="rounded-0"
        />
      </g-col>
      <g-col cols="2">
        <!-- input:AOE Special -->
        <v-checkbox
          v-model="spell.aoeSpecial"
          label="Area of Effect Special Flag"
          color="secondary"
        />
      </g-col>
    </g-row>

    <g-row>
      <g-col cols="3">
        <!-- input:As Weapon Attack -->
        <v-checkbox
          v-model="spell.asWeaponAttack"
          label="As Part Off A Weapon Attack"
          color="secondary"
        />
      </g-col>
      <g-col cols="3">
        <!-- input:Attack Type -->
        <v-select
          v-model="spell.attackType"
          :label="
            !spell.asWeaponAttack ? 'Attack Type' : 'Affected Weapon Range Type'
          "
          filled
          dense
          class="rounded-0 ml-4"
          :items="['Melee', 'Ranged']"
        />
      </g-col>
    </g-row>

    <g-row>
      <g-col cols="3">
        <v-select
          v-model="spell.saveType"
          :items="saveTypes"
          label="Save Type"
          dense
          filled
          class="rounded-0"
        />
      </g-col>
    </g-row>

    <g-row>
      <g-col cols="4">
        <v-textarea
          v-model="spell.saveSuccess"
          label="Effect on Save Success"
          filled
          dense
          auto-grow
          class="rounded-0"
        />
      </g-col>
      <g-col cols="4">
        <v-textarea
          v-model="spell.saveFail"
          label="Effect on Save Fail"
          filled
          dense
          auto-grow
          class="rounded-0"
        />
      </g-col>
      <g-col cols="4">
        <v-textarea
          v-model="spell.saveMiss"
          label="Effect on Miss"
          filled
          dense
          auto-grow
          class="rounded-0"
        />
      </g-col>
    </g-row>

    <v-radio-group
      v-model="spell.scaleType"
      dense
      row
      hide-details
      class="mb-4"
      @change="updateScale"
    >
      <v-radio color="secondary" label="No Scaling" value="FALSE" />
      <v-radio
        color="secondary"
        label="Character Level Scaling"
        value="Character"
      />
      <v-radio color="secondary" label="Spell Level Scaling" value="Level" />
      <v-radio color="secondary" label="Spell Scale" value="Basic" />
    </v-radio-group>

    <spell-scale-dice
      :scale="spell.scale"
      v-if="spell.scaleType === 'Character' && !updatingScale"
      @update-scale="updateScaleValue"
      name="Character"
    />
    <spell-scale-dice
      :scale="spell.scale"
      name="Level"
      @update-scale="updateScaleValue"
      v-if="spell.scaleType === 'Level' && !updatingScale"
    />

    <spell-scale-static
      :scale="spell.scale"
      v-if="spell.scaleType === 'Basic' && !updatingScale"
      @update-scale="updateScaleValue"
    />
  </v-form>
</template>

<script>
import {
  spellCastingTypes,
  spellRangeTypes,
  spellDurationTypes,
  spellDurationTimes,
  spellAOETypes,
  spellSaveTypes,
} from '~/utils/static/spells'
export default {
  name: 'FormSpell',
  inject: ['appLoading'],
  props: {
    value: {
      type: Object,
      default() {
        return {
          verbal: false,
          somatic: false,
          material: false,
          scale: [],
          scalingType: 'FALSE',
        }
      },
    },
    valid: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['input', 'update:valid'],
  data() {
    return {
      isValid: true,
      updatingScale: false,
      castingTypes: spellCastingTypes,
      rangeTypes: spellRangeTypes,
      durationTypes: spellDurationTypes,
      durationTimes: spellDurationTimes,
      saveTypes: spellSaveTypes,
      aoeTypes: spellAOETypes,
      spell: this.value,
      disabled: {
        reactionCastingTimeDescription: true,
        materialComponentsDescription: true,
        range: true,
        duration: true,
        durationTime: true,
      },
    }
  },
  watch: {
    spell: {
      deep: true,
      handler(value) {
        this.$emit('input', value)
      },
    },
    value: {
      deep: true,
      handler(value) {
        if (JSON.stringify(value) !== JSON.stringify(this.spell)) {
          this.spell = value
          this.runUpdate()
        }
      },
    },
    isValid(valid) {
      this.$emit('update:valid', valid)
    },
  },
  methods: {
    updated(s) {
      console.log('updated', s)
    },
    runUpdate() {
      const { durationType, scalingType, castingType, rangeType } = this.spell
      if (durationType) this.updatedDurationType(durationType)
      if (scalingType) this.updateScalingType(scalingType)
      if (castingType) this.updatedCastingType(castingType)
      if (rangeType) this.updatedRangeType(rangeType)
      this.updateScale()
    },
    updateScale() {
      const { scaleType, level } = this.spell
      console.log('level', level, 'scale', scaleType)
      this.updatingScale = true
      if (scaleType && level >= 0) {
        if (['Level', 'Character'].includes(scaleType)) {
          const scale = []
          for (let i = this.spell.level; i <= 9; i++) {
            scale.push({
              level: i,
              roll: [],
            })
          }
          this.spell.scale = scale
        }
      }
      this.$nextTick(() => {
        this.updatingScale = false
      })
    },
    updateScaleValue(s) {
      console.log('called update')
      this.spell.scale = s
    },
    updatedDurationType(type) {
      const disable = [
        undefined,
        null,
        '',
        'Instantaneous',
        'Until Dispelled',
        'Until Dispelled or Triggered',
      ].includes(type)
      if (disable) {
        delete this.spell.duration
        delete this.spell.durationTime
        this.$nextTick(() => {
          this.disabled.duration = true
          this.disabled.durationTime = true
        })
      } else {
        this.disabled.duration = false
        this.disabled.durationTime = false
      }
    },
    updatedCastingType(type) {
      if (type === 'Reaction') {
        this.disabled.reactionCastingTimeDescription = false
      } else {
        this.disabled.reactionCastingTimeDescription = true
        if (this.spell.reactionCastingTimeDescription)
          delete this.spell.reactionCastingTimeDescription
      }
    },
    updatedRangeType(type) {
      if (type === 'Ranged') {
        this.disabled.range = false
      } else {
        this.disabled.range = true
        if (this.spell.range || this.spell.range === 0) delete this.spell.range
      }
    },
    setVerbal() {
      this.spell.verbal = !this.spell.verbal
    },
    setSomatic() {
      this.spell.somatic = !this.spell.somatic
    },
    setMaterial() {
      this.spell.material = !this.spell.material
      if (this.spell.material) {
        this.disabled.materialComponentsDescription = false
      } else {
        this.disabled.materialComponentsDescription = true
        if (this.spell.materialComponentsDescription)
          delete this.spell.materialComponentsDescription
      }
    },
    getVSM(vsm) {
      if (this.spell[vsm]) {
        return 'secondary'
      }
      return 'grey'
    },
  },
}
</script>
