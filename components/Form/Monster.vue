<template>
  <v-form v-model="isValid">
    <grid-row :cols="4" :md="3">
      <grid-col :cols="3">
        <!-- input:Name -->
        <v-text-field
          v-model="monster.name"
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
      <grid-col :cols="1" :md="3" :sm="3">
        <!-- input:Level -->
        <v-select
          v-model="monster.type"
          dense
          :items="[]"
          filled
          class="rounded-0"
          @change="updateScale"
        >
          <template #label>
            Type
            <span class="error--text">*</span>
          </template>
        </v-select>
      </grid-col>
    </grid-row>
    <grid-row :cols="4" :md="2">
      <grid-col>
        <v-select filled class="rounded-0" label="Size"></v-select>
      </grid-col>
      <grid-col>
        <v-select
          filled
          class="rounded-0"
          label="Swarm Monster Type"
        ></v-select>
      </grid-col>
      <grid-col>
        <v-select filled class="rounded-0" label="Alignment"></v-select>
      </grid-col>
      <grid-col>
        <v-select filled class="rounded-0" label="Challenge Rating"></v-select>
      </grid-col>
    </grid-row>
    <grid-row :cols="2" :md="1">
      <grid-col> <text-editor label="Special Traits Description" /> </grid-col>
      <grid-col> <text-editor label="Actions Description" /> </grid-col>
    </grid-row>
    <grid-row :cols="2" :md="1">
      <grid-col> <text-editor label="Reactions Description" /> </grid-col>
      <grid-col>
        <text-editor label="Monster Characteristics Description" />
      </grid-col>
    </grid-row>
    <g-row :cols="1">
      <g-col>
        <text-editor label="Bonus Actions Description" />
      </g-col>
    </g-row>
    <grid-row :cols="2" :md="1">
      <grid-col class="d-flex flex-column">
        <v-checkbox label="Is Legendary" />
        <text-editor label="Legendary Actions Description" />
      </grid-col>
      <grid-col class="d-flex flex-column">
        <v-checkbox label="Is Mythic" />
        <text-editor label="Mythic Actions Description" />
      </grid-col>
    </grid-row>
    <g-row :cols="1">
      <g-col class="d-flex flex-column">
        <v-checkbox label="Has Lair" />
        <text-editor label="Lair and Lair Actions Description" />
      </g-col>
    </g-row>
    <grid-row :cols="4" :md="2">
      <grid-col>
        <v-text-field filled class="rounded-0" label="Armour Class" />
      </grid-col>
      <grid-col>
        <v-text-field filled class="rounded-0" label="Armor Class Type" />
      </grid-col>
      <grid-col>
        <v-text-field filled class="rounded-0" label="Passive Perception" />
      </grid-col>
      <grid-col>
        <v-text-field filled label="Hit Points Die Count" />
      </grid-col>
    </grid-row>
    <grid-row :cols="3" :md="1">
      <grid-col>
        <v-select filled class="rounded-0" label="Hit Points Die Value" />
      </grid-col>
      <grid-col>
        <v-text-field filled class="rounded-0" label="Hit Points Modifier" />
      </grid-col>
      <grid-col>
        <v-text-field filled class="rounded-0" label="Average Hit Points" />
      </grid-col>
    </grid-row>
    <grid-row :cols="6" :md="3">
      <grid-col>
        <v-text-field filled class="rounded-0" label="Strength Score" />
      </grid-col>
      <grid-col>
        <v-text-field filled class="rounded-0" label="Dexterity Score" />
      </grid-col>
      <grid-col>
        <v-text-field filled class="rounded-0" label="Constitution Score" />
      </grid-col>
      <grid-col>
        <v-text-field filled class="rounded-0" label="Intelligence Score" />
      </grid-col>
      <grid-col>
        <v-text-field filled class="rounded-0" label="Wisdom Score" />
      </grid-col>
      <grid-col>
        <v-text-field filled class="rounded-0" label="Charisma Score" />
      </grid-col>
    </grid-row>
    <grid-row :cols="4" :md="2">
      <grid-col>
        <v-select filled class="rounded-0" label="Saving Throw Proficiencies" />
      </grid-col>
      <grid-col>
        <v-text-field filled class="rounded-0" label="Damage Adjustments" />
      </grid-col>
      <grid-col>
        <v-select filled class="rounded-0" label="Condition Immunities" />
      </grid-col>
      <grid-col>
        <v-select filled class="rounded-0" label="Monster Environments" />
      </grid-col>
    </grid-row>
  </v-form>
</template>

<script>
import TextEditor from '../TextEditor.vue'
export default {
  components: { TextEditor },
  name: 'FormMonster',
  inject: ['appLoading'],
  props: {
    value: {
      type: Object,
      default() {
        return {}
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
      isValid: false,
      monster: this.value,
    }
  },
  watch: {
    monster: {
      deep: true,
      handler(value) {
        this.$emit('input', value)
      },
    },
    value: {
      deep: true,
      handler(value) {
        if (JSON.stringify(value) !== JSON.stringify(this.monster)) {
          this.monster = value
          // this.runUpdate()
        }
      },
    },
    isValid(valid) {
      this.$emit('update:valid', valid)
    },
  },
}
</script>