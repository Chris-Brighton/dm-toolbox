<template>
  <div style="display: block; min-width: 1264px">
    <!-- TABLES -->
    <div class="slide-img-shadow">
      <div
        class="slide-img slide-img-0"
        @mouseover="hover = 0"
        @mouseleave="hover = null"
        :class="{
          'slide-img-push-left': hover !== null && hover < 0,
          'slide-img-active': hover === 0,
        }"
      >
        <v-img src="/loot.jpg" class="slide-v-img" />
        <v-icon class="slide-img-icon">mdi-table-large</v-icon>
        <div
          class="slide-img-text pa-2"
          style="margin-right: 220px"
          @click="$router.history.push('/table')"
        >
          <h3>Tables</h3>
          <v-divider />
          <p class="mt-2">
            Create, edit tables for loot, random encounters, shops. They can be
            static reference tables or randomized tables with automated dice
            rolls.
          </p>
          <v-btn tile color="secondary" class="slide-img-text-btn">
            Manage Tables
          </v-btn>
        </div>
      </div>
    </div>
    <!-- END TABLES -->

    <!-- SPELLS -->
    <div class="slide-img-shadow">
      <div
        class="slide-img slide-img-1"
        @mouseover="hover = 1"
        @mouseleave="hover = null"
        :class="{
          'slide-img-push-left': hover !== null && hover < 1,
          'slide-img-active': hover === 1,
        }"
      >
        <v-img src="/spells.jpeg" class="slide-v-img" />
        <v-icon class="slide-img-icon">mdi-book-open-variant</v-icon>
        <div
          class="slide-img-text pa-2"
          style="margin-right: 220px"
          @click="$router.history.push('/spell')"
        >
          <h3>Spells</h3>
          <v-divider />
          <p class="mt-2">
            Create, edit spells to be attached to monsters.
            <br />
            <em>This feature supports api import</em>
          </p>
          <v-btn tile color="secondary" class="slide-img-text-btn">
            Manage Spells
          </v-btn>
        </div>
      </div>
    </div>
    <!-- END SPELLS -->

    <!-- MONSTERS -->
    <div class="slide-img-shadow">
      <div
        class="slide-img slide-img-2"
        @mouseover="hover = 2"
        @mouseleave="hover = null"
        style="height: calc(100vh - 28px)"
        :class="{
          'slide-img-push-left': hover !== null && hover < 2,
          'slide-img-active': hover === 2,
        }"
      >
        <v-img
          src="/encounter.webp"
          style="margin-top: -20px; height: calc(100% + 60px)"
          class="slide-v-img"
        />
        <v-icon class="slide-img-icon">mdi-skull</v-icon>
        <div
          class="slide-img-text pa-2"
          @click="$router.history.push('/monster')"
        >
          <h3>Monsters</h3>
          <v-divider />
          <p class="mt-2">
            Create, edit monsters to be used in encounters. The monsters feature
            can also be used to create npc's.
            <br />
            <em>This feature supports api import</em>
          </p>
          <v-btn tile color="secondary" class="slide-img-text-btn">
            Manage Monsters
          </v-btn>
        </div>
      </div>
    </div>
    <!-- END MONSTERS -->

    <!-- ENCOUNTERS -->
    <div class="slide-img-shadow">
      <div
        class="slide-img slide-img-3"
        @mouseover="hover = 3"
        @mouseleave="hover = null"
        :class="{
          'slide-img-push-left': hover !== null && hover < 3,
          'slide-img-active': hover === 3,
        }"
      >
        <v-img src="/encounter.jpg" class="slide-v-img" />
        <v-icon class="slide-img-icon">mdi-shield-sword</v-icon>
        <div
          class="slide-img-text pa-2"
          @click="$router.history.push('/encounter')"
        >
          <h3>Encounters</h3>
          <v-divider />
          <p class="mt-2">Create, edit encounters to be used in a campaign.</p>
          <v-btn tile color="secondary" class="slide-img-text-btn">
            Manage Encounters
          </v-btn>
        </div>
      </div>
    </div>
    <!-- END ENCOUNTERS -->

    <!-- CAMPAIGNS -->
    <div class="slide-img-shadow">
      <div
        class="slide-img slide-img-4"
        @mouseover="hover = 4"
        @mouseleave="hover = null"
        :class="{
          'slide-img-push-left': hover !== null && hover < 4,
          'slide-img-active': hover === 4,
        }"
      >
        <v-img src="/campaign.jpg" class="slide-v-img" />
        <v-icon class="slide-img-icon">mdi-map-legend</v-icon>
        <div
          class="slide-img-text pa-2"
          @click="$router.history.push('/campaign')"
        >
          <h3>Campaigns</h3>
          <v-divider />
          <p class="mt-2">
            This section lets you build a campaign. It will allow to link
            players, npc's, random tables, common monsters etc. Once a campaign
            is built you will be able to launch it a play the game
          </p>
          <v-btn tile color="secondary" class="slide-img-text-btn">
            Manage Campaigns
          </v-btn>
        </div>
      </div>
    </div>
    <!-- END CAMPAIGNS -->
  </div>
</template>

<script>
// window.open(
//         '/spell',
//         'Spell',
//         'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=400,height=350'
//       )

export default {
  data() {
    return {
      hover: null,
    }
  },
}
</script>

<style lang="sass">
.slide-img-shadow
  filter: drop-shadow(0px 0px 4px rgba(255,255,255,0.5))
.slide-img
  clip-path: polygon(0 0, 100% 0%, 90% 100%, 0% 100%)
  max-height: calc(100vh - 48px)
  width: 100%
  overflow: hidden
  position: absolute
  top: 0
  left: 0
  transition: all 0.5s ease-out
  .slide-v-img
    width: 100%
    min-height: calc(100vh - 48px)
    -webkit-filter: grayscale(100%)
    -webkit-transition: .5s ease-out
    -moz-filter: grayscale(100%)
    -moz-transition: .5s ease-out
    -o-filter: grayscale(100%)
    -o-transition: .5s ease-out
    filter: grayscale(100%)
.slide-img-icon
  position: absolute !important
  bottom: 4px
  right: 0px
  margin-right: 150px
.slide-img-text
  position: absolute
  top: 50%
  right: 0
  height: 180px
  width: 480px
  background: rgba(0, 0, 0, 0.6)
  box-shadow: 4px 4px 8px 0px rgba(255,255,255,0.5)
  transform: translateY(-50%)
  margin-right: 180px
  transition: all 0.5s ease-out
  opacity: 0
  cursor: pointer
.slide-img-text-btn
  position: absolute
  right: 8px
  bottom: 8px

.slide-img-0
  left: 10vw
  &.slide-img-push-left
    left: -40vw !important
.slide-img-1
  left: 0vw
  &.slide-img-push-left
    left: -50vw !important
.slide-img-2
  left: -10vw
  &.slide-img-push-left
    left: -60vw !important
.slide-img-3
  left: -20vw
  &.slide-img-push-left
    left: -70vw !important
.slide-img-4
  left: -30vw
  &.slide-img-push-left
    left: -80vw !important

.slide-img-active
  .slide-v-img
    -webkit-filter: grayscale(0%)
    -webkit-transition: .5s ease-out
    -moz-filter: grayscale(0%)
    -moz-transition: .5s ease-out
    -o-filter: grayscale(0%)
    -o-transition: .5s ease-out
    filter: grayscale(0%)
  .slide-img-text
    opacity: 1 !important

@media only screen and (max-width: 1264px)
  .slide-img-0,
  .slide-img-1,
  .slide-img-2,
  .slide-img-3
    display: none
  .slide-img-4
    clip-path: unset
    width: 100vw
    left: 0
  .slide-img-icon
    margin-right: 20px
</style>