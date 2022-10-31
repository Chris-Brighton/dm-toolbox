<!-- eslint-disable vue/v-slot-style -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <data-table-screen title="Spells" create-link="/spell/create">
    <data-table :headers="headers" service="spell" update="/spell">
      <template #col-description="{ value }">
        <div v-html="value" />
      </template>
    </data-table>
  </data-table-screen>
</template>

<script>
export default {
  name: 'SpellListPage',
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Level', value: 'level' },
        { text: 'School ', value: 'school' },
        {
          text: 'Description',
          value: 'description',
          sortable: false,
          maxWidth: 500,
        },
      ],
    }
  },
}
</script>