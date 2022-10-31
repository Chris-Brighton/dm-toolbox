<!-- eslint-disable vue/no-v-model-argument -->
<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="py-4 d-flex justify-center flex-column">
        <make-dice-roll v-model="roll" />
        <v-btn class="my-1" color="primary" block tile>primary</v-btn>
        <v-btn class="my-1" color="secondary" block tile>secondary</v-btn>
        <v-btn class="my-1" color="accent" block tile>accent</v-btn>
        <v-btn class="my-1" color="info" block tile>info</v-btn>
        <v-btn class="my-1" color="success" block tile>success</v-btn>
        <v-btn class="my-1" color="warning" block tile>warning</v-btn>
        <v-btn class="my-1" color="error" block tile>error</v-btn>
        <text-editor label="Actions" />
        <div class="d-flex" style="width: 100%; height: 112px">
          <dice :roll="3" :dice="4" />
          <dice :roll="2" :dice="6" />
          <dice :roll="7" :dice="8" />
          <dice :roll="4" :dice="10" />
          <dice :roll="10" :dice="12" />
          <dice :working.sync="working" :roll="diceRoll" :dice="20" />
          <dice :roll="74" :dice="100" />
        </div>
        <code>working: {{ working }}</code>
        <v-btn tile @click.prevent="click">Roll</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>
<!-- <template>
  <div>
    <v-img src="/home.webp" class="home-page-home-img" />
    <div class="home-page-center-box">

    </div>
  </div>
</template> -->

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      roll: [],
      html: '',
      diceRoll: null,
      working: false,
    }
  },
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    click() {
      this.diceRoll = this.getRndInteger(1, 20)
    },
  },
}
</script>

<style lang="sass">
.home-page-center-box
  position: absolute
  top: 50%
  left: 50%
  transform: translateX(-50%) translateY(-100%)
  display: flex
  flex-direction: column

.home-page-home-img
  max-width: 100%
  max-height: calc(100vh - 48px)
  filter: opacity(0.2)
</style>
