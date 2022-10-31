<template>
  <v-card tile elevation="2" class="my-3 mx-6">
    <v-card-title v-if="title || $slots.actions">
      <span v-if="title" class="primary--text"> {{ title }} </span>
      <template v-if="$slots.actions">
        <v-spacer />
        <slot name="cardTitleRight" />
      </template>
    </v-card-title>
    <v-card-subtitle v-if="subText">
      {{ subText }}
    </v-card-subtitle>
    <v-divider />
    <v-card-text>
      <slot> Screen Content </slot>
    </v-card-text>
    <v-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: null },
    subText: { type: String, default: null },
  },
}
</script>