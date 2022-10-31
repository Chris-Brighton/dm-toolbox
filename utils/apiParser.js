/* eslint-disable camelcase */
const times = [
  'hour',
  'minute',
  'day',
  'round',
  'hours',
  'minutes',
  'days',
  'rounds',
]
const modMatch = {
  STR: 'Strength',
  DEX: 'Dexterity',
  CON: 'Constitution',
  INT: 'Intelligence',
  WIS: 'Wisdom',
  CHA: 'Charisma',
}

const upperCase = (string) => {
  const words = string.replace(/[0-9]/g, '').trim().split(' ')
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }
  return words.join(' ')
}

const stripNumbers = (string) => {
  return string.replace(/[0-1]/g, '')
}

const stripChars = (string) => {
  return parseInt(string.replace(/[a-z,A-Z]/g, ''))
}

const stripSpace = (string) => {
  return string.replace(/ /g, '')
}

export const parseSpell = (data) => {
  const {
    name,
    level,
    school,
    components,
    casting_time,
    desc,
    material,
    range,
    duration,
    concentration,
    ritual,
    area_of_effect,
    dc,
    index,
  } = data
  const castingTime = stripChars(stripSpace(casting_time))
  const castingType = upperCase(stripNumbers(casting_time).trim())

  const fR = {
    rangeType: null,
    range: null,
  }

  if (['Self', 'Touch', 'Sight', 'Unlimited'].includes(range)) {
    fR.rangeType = range
    fR.range = null
  } else {
    fR.rangeType = 'Ranged'
    fR.range = stripChars(stripSpace(range))
  }

  const fD = {
    durationType: null,
    duration: null,
    durationTime: null,
  }

  const fAOE = {}

  if (area_of_effect && area_of_effect.type) {
    fAOE.aoeType = upperCase(area_of_effect.type)
    fAOE.aoeSize = area_of_effect.size
  }

  const D = duration

  if (concentration) {
    fD.durationType = 'Concentration'
    if (D.includes('hour') || D.includes('hours')) fD.durationTime = 'Hour'
    if (D.includes('minute') || D.includes('minutes'))
      fD.durationTime = 'Minute'
    if (D.includes('day') || D.includes('days')) fD.durationTime = 'Day'
    if (D.includes('round') || D.includes('round')) fD.durationTime = 'Round'
    fD.duration = stripChars(stripSpace(D))
  } else {
    const a = stripNumbers(stripSpace(D)).toLowerCase()
    if (times.includes(a)) {
      fD.durationType = 'Time'
      if (a === 'hour' || a === 'hours') fD.durationTime = 'Hour'
      if (a === 'minute' || a === 'minutes') fD.durationTime = 'Minute'
      if (a === 'day' || a === 'days') fD.durationTime = 'Day'
      if (a === 'round' || a === 'rounds') fD.durationTime = 'Round'
      fD.duration = stripChars(stripSpace(D))
    }

    if (['Instantaneous', 'Special', 'Until dispelled'].includes(duration)) {
      fD.durationType = upperCase(duration)
    }
  }

  const fSave = {}

  if (dc) {
    fSave.saveType = modMatch[dc.dc_type.name]
    if (dc.dc_success) {
      if (dc.dc_success === 'half') {
        fSave.saveSuccess = 'Target creature takes half damage from the spell'
      }
    }
  }

  const spell = {
    name,
    level,
    school: school.name,
    verbal: components.includes('V'),
    somatic: components.includes('S'),
    material: components.includes('M'),
    castingTime,
    castingType,
    description: desc.join('\n\n'),
    materialComponentsDescription: material,
    ...fR,
    ...fD,
    ritual,
    ...fAOE,
    ...fSave,
    slug: index,
  }
  return spell
}
