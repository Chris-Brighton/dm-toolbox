export const DataTable = () => import('../../components/DataTable.vue' /* webpackChunkName: "components/data-table" */).then(c => wrapFunctional(c.default || c))
export const DataTableScreen = () => import('../../components/DataTableScreen.vue' /* webpackChunkName: "components/data-table-screen" */).then(c => wrapFunctional(c.default || c))
export const DetailsScreen = () => import('../../components/DetailsScreen.vue' /* webpackChunkName: "components/details-screen" */).then(c => wrapFunctional(c.default || c))
export const Dice = () => import('../../components/Dice.vue' /* webpackChunkName: "components/dice" */).then(c => wrapFunctional(c.default || c))
export const DicePill = () => import('../../components/DicePill.vue' /* webpackChunkName: "components/dice-pill" */).then(c => wrapFunctional(c.default || c))
export const GCol = () => import('../../components/GCol.vue' /* webpackChunkName: "components/g-col" */).then(c => wrapFunctional(c.default || c))
export const GRow = () => import('../../components/GRow.vue' /* webpackChunkName: "components/g-row" */).then(c => wrapFunctional(c.default || c))
export const MakeDiceRoll = () => import('../../components/MakeDiceRoll.vue' /* webpackChunkName: "components/make-dice-roll" */).then(c => wrapFunctional(c.default || c))
export const ModPill = () => import('../../components/ModPill.vue' /* webpackChunkName: "components/mod-pill" */).then(c => wrapFunctional(c.default || c))
export const TextEditor = () => import('../../components/TextEditor.vue' /* webpackChunkName: "components/text-editor" */).then(c => wrapFunctional(c.default || c))
export const FormSpell = () => import('../../components/Form/Spell.vue' /* webpackChunkName: "components/form-spell" */).then(c => wrapFunctional(c.default || c))
export const SpellScaleDice = () => import('../../components/SpellScale/Dice.vue' /* webpackChunkName: "components/spell-scale-dice" */).then(c => wrapFunctional(c.default || c))
export const SpellScaleStatic = () => import('../../components/SpellScale/Static.vue' /* webpackChunkName: "components/spell-scale-static" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
