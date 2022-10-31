<template>
  <v-app dark :style="cssVars">
    <v-app-bar app dense class="pr-0 hover-root">
      <router-link to="/" class="d-flex align-center home-link" title="Home">
        <v-icon large class="mr-2 d20-icon">mdi-dice-d20</v-icon>
        <v-app-bar-title class="primary--text">
          {{ heading }}
        </v-app-bar-title>
      </router-link>
      <v-spacer />
      <v-btn-toggle
        v-model="section"
        tile
        dense
        class="push-right"
        background-color="transparent"
      >
        <v-btn
          color="grey"
          class="custom-menu-btn"
          style="height: 46px"
          tile
          fab
          large
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-tooltip
          v-for="({ title, to, icon }, k) in items"
          :key="k + title"
          bottom
        >
          <template #activator="{ on, attrs }">
            <v-btn
              :to="to"
              color="accent"
              style="height: 46px"
              tile
              fab
              large
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>{{ icon }}</v-icon>
            </v-btn>
          </template>
          {{ title }}
        </v-tooltip>
      </v-btn-toggle>
    </v-app-bar>
    <v-main>
      <v-container class="pa-0 ma-0" style="max-width: unset">
        <Nuxt />
      </v-container>
    </v-main>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import { navigation } from '~/utils/static/general'
export default {
  name: 'DefaultLayout',
  provide() {
    return {
      appLoading: this.setLoading,
    }
  },
  data() {
    return {
      items: navigation,
      heading: 'D&D Manager',
      section: '',
      loading: false,
    }
  },
  computed: {
    cssVars() {
      const { primary, secondary, accent, info, success, warning, error } =
        this.$vuetify.theme.themes.dark
      return {
        '--v-primary': primary,
        '--v-secondary': secondary,
        '--v-accent': accent,
        '--v-info': info,
        '--v-success': success,
        '--v-warning': warning,
        '--v-error': error,
      }
    },
  },
  methods: {
    stop(event) {
      event.stopPropagation()
    },
    setLoading(loading) {
      this.loading = loading
    },
  },
}
</script>

<style lang="sass">
.home-link
  &:hover
    .d20-icon
      color: var(--v-primary)
.hover-root
  &:hover
    .push-right
      right: 0 !important
    .custom-menu-btn
      opacity: 0
.push-right
  right: -385px
  transition: all 1s ease
.v-dialog
  border-radius: 0
  border: thin solid rgba(255, 255, 255, 0.12)
.v-card__actions
  border-top: thin solid rgba(255, 255, 255, 0.12)
.v-toolbar__content
  padding-right: 0
.nuxt-link-active,
.nuxt-link
  text-decoration: none !important
.custom-menu-btn
  transition: all ease 0.75s
  opacity: 1
a
  color: inherit !important
  text-decoration: none
  &:visited,
  &:active,
  &:focus
    color: inherit !important
    text-decoration: none
.page-enter-active,
.page-leave-active
  transition: opacity 0.5s

.page-enter,
.page-leave-to
  opacity: 0

.toast-box
  border-radius: 0 !important
  font-family: 'Roboto', sans-serif
  letter-spacing: 0.0125em
.v-dialog
  border-radius: 0px !important
</style>
