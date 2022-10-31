<template>
  <details-screen title="Edit Spell">
    <form-spell v-if="spell" v-model="spell" :valid.sync="valid" />
    <template #actions>
      <v-btn tile color="primary" block @click.prevent="save">save</v-btn>
    </template>
  </details-screen>
</template>

<script>
export default {
  name: 'EditSpellPage',
  inject: ['appLoading'],
  async asyncData({ params, $service }) {
    // eslint-disable-next-line no-unused-vars
    const data = await $service('spell').get(params.id)
    const spell = JSON.parse(data.json)
    spell.id = data.id
    return { spell }
  },
  data() {
    return {
      valid: true,
    }
  },
  methods: {
    async save() {
      this.appLoading(true)
      const { id, name, level, school, description, slug } = this.spell
      const update = {
        id,
        name,
        description,
        level,
        school,
        slug,
        json: JSON.stringify(this.spell),
      }
      const data = await this.$service('spell').update(id, update)
      if (data && data.id) {
        this.$toast.success('Spell Saved')
        this.spell = data
      } else {
        this.$toast.error('Error Saving Spell')
      }
      this.$nextTick(() => {
        this.appLoading(false)
      })
    },
  },
}
</script>