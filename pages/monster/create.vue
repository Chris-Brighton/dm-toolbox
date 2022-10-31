<template>
  <details-screen
    title="Create Monster"
    sub-text="Yon can enter all the information from scratch or select a monster and attempt to import the data"
  >
    <div class="d-flex mb-6">
      <v-autocomplete
        v-model="selectedMonster"
        :items="monsters"
        item-text="name"
        item-value="index"
        label="Select Monster To Import"
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
        :disabled="!selectedMonster"
        style="height: 53px"
        color="primary"
        @click.prevent="fetchMonster"
      >
        Import
      </v-btn>
    </div>
    <template #actions>
      <v-btn tile block color="success" x-large @click.prevent="create">
        create
      </v-btn>
    </template>
  </details-screen>
</template>

<script>
export default {
  name: 'CreateMonsterPage',
  inject: ['appLoading'],
  async asyncData({ $axios }) {
    const { data } = await $axios.get('https://www.dnd5eapi.co/api/monsters')
    return { monsters: data.results }
  },
  data() {
    return {
      selectedMonster: null,
      imported: null,
    }
  },
  methods: {
    async fetchMonster() {
      this.appLoading(true)
      const { data } = await this.$axios.get(
        'https://www.dnd5eapi.co/api/monsters/' + this.selectedMonster
      )
      this.imported = data
      this.$nextTick(() => {
        this.appLoading(false)
      })
    },
  },
}
</script>