<template>
  <v-card tile elevation="2" class="my-3 mx-6">
    <v-card-title>
      <span class="primary--text"> {{ title }} </span>
      <v-spacer />
      <v-btn v-if="createLink" :to="createLink" tile color="primary">
        Create
        <v-icon class="ml-1">mdi-plus-thick</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle v-if="subText">
      {{ subText }}
    </v-card-subtitle>
    <v-divider />
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    subText: {
      type: String,
      default: null,
    },
    createLink: {
      type: String,
      default: null,
    },
    editLink: {
      type: String,
      default: null,
    },
    deleteLink: {
      type: String,
      default: null,
    },
  },
}
</script>