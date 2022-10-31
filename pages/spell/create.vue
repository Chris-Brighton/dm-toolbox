<template>
  <details-screen
    title="Create Spell"
    sub-text="Yon can enter all the information from scratch or select a spell and attempt to import the data"
  >
    <div class="d-flex mb-6">
      <v-autocomplete
        v-model="selectedSpell"
        :items="spells"
        item-text="name"
        item-value="index"
        label="Select Spell To Import"
        class="rounded-0"
        filled
        dense
        hide-details
        clearable
      />
      <v-btn
        small
        x-large
        tile
        :disabled="!selectedSpell"
        style="height: 53px"
        color="primary"
        @click.prevent="fetchSpell"
      >
        Import
      </v-btn>
    </div>
    <form-spell v-model="spell" :valid.sync="valid" />
    <template #actions>
      <v-btn tile block color="success" x-large @click.prevent="create">
        create
      </v-btn>
    </template>
  </details-screen>
</template>

<script>
import { parseSpell } from '~/utils/apiParser'

export default {
  name: 'CreateSpellPage',
  inject: ['appLoading'],
  async asyncData({ $axios }) {
    const { data } = await $axios.get('https://www.dnd5eapi.co/api/spells')
    return { spells: data.results }
  },
  data() {
    return {
      valid: false,
      spell: {
        verbal: false,
        somatic: false,
        material: false,
      },
      selectedSpell: null,
    }
  },
  methods: {
    async fetchSpell() {
      this.appLoading(true)
      const { data } = await this.$axios.get(
        'https://www.dnd5eapi.co/api/spells/' + this.selectedSpell
      )
      this.spell = parseSpell(data)
      this.$nextTick(() => {
        this.appLoading(false)
      })
    },
    create() {
      this.appLoading(true)
      this.$nextTick(async () => {
        const create = {
          name: this.spell.name,
          description: this.spell.description,
          slug: this.spell.slug,
          level: this.spell.level,
          school: this.spell.school,
          json: JSON.stringify(this.spell),
        }
        const data = await this.$service('spell').create(create)
        this.$nextTick(() => {
          if (data && data.id) {
            this.$router.push('/spell')
          } else {
            this.$toast.error('Error Creating Spell')
          }
          this.appLoading(false)
        })
      })
    },
  },
}
</script>