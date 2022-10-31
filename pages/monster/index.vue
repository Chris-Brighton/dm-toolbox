<template>
  <data-table-screen title="Monsters" create-link="/monster/create">
    <data-table :headers="headers" service="monster" update="/monster">
      <template #col-description="{ value }">
        <div v-html="value" />
      </template>
    </data-table>
  </data-table-screen>
</template>

<script>
export default {
  name: 'MonsterListPage',
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'CR', value: 'cr' },
        { text: 'Type ', value: 'type' },
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