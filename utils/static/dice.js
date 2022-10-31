export const modifierLookup = [
  { find: 'LEVEL', display: 'Level' },
  { find: 'CLASS-LEVEL', display: 'Class Level' },
  { find: 'PROFICIENCY', display: 'Prof Bonus' },
  { find: 'STR', display: 'Str Mod' },
  { find: 'DEX', display: 'Dex Mod' },
  { find: 'CON', display: 'Con Mod' },
  { find: 'INT', display: 'Int Mod' },
  { find: 'WIS', display: 'Wis Mod' },
  { find: 'CHA', display: 'Cha Mod' },
]

export const diceTypes = [
  { label: 'd4', value: 4 },
  { label: 'd6', value: 6 },
  { label: 'd8', value: 8 },
  { label: 'd10', value: 10 },
  { label: 'd12', value: 12 },
  { label: 'd20', value: 20 },
  { label: 'd100', value: 100 },
]

export const modifierTypes = [
  { label: 'Custom', value: 'CUSTOM' },
  { label: 'Level', value: 'LEVEL' },
  { label: 'Class Level', value: 'CLASS-LEVEL' },
  { label: 'Proficiency ', value: 'PROFICIENCY' },
  { label: 'Strength', value: 'STR' },
  { label: 'Dexterity', value: 'DEX' },
  { label: 'Constitution', value: 'CON' },
  { label: 'Intelligence', value: 'INT' },
  { label: 'Wisdom', value: 'WIS' },
  { label: 'Charisma', value: 'CHA' },
  { label: 'Spellcasting Modifier', value: 'MOD' },
]

export const modPillLookup = [
  { label: 'Custom', value: 'CUSTOM' },
  { label: 'Level', value: 'LEVEL', suffix: '' },
  { label: 'Class Level', value: 'CLASS-LEVEL', suffix: '' },
  { label: 'Proficiency ', value: 'PROFICIENCY' },
  { label: 'Strength', value: 'STR', suffix: 'Modifier' },
  { label: 'Dexterity', value: 'DEX', suffix: 'Modifier' },
  { label: 'Constitution', value: 'CON', suffix: 'Modifier' },
  { label: 'Intelligence', value: 'INT', suffix: 'Modifier' },
  { label: 'Wisdom', value: 'WIS', suffix: 'Modifier' },
  { label: 'Charisma', value: 'CHA', suffix: 'Modifier' },
  { label: 'Spellcasting', value: 'MOD', suffix: 'Modifier' },
]
