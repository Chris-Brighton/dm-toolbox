import colors from 'vuetify/es5/util/colors'

const color = (name, type = 'base') => {
  return colors[name][type]
}

const darkBlue = {
  name: 'Blue [dark]',
  key: 'darkBlue',
  dark: true,
  colors: {},
}

const darkPurple = {
  name: 'Purple [dark]',
  key: 'darkPurple',
  dark: true,
  colors: {
    primary: color('purple'),
    secondary: color('teal'),
  },
}

const darkOrange = {
  name: 'Orange [dark]',
  key: 'darkOrange',
  dark: true,
  colors: {
    primary: color('deepOrange'),
  },
}

const darkRed = {
  name: 'Red [dark]',
  key: 'darkRed',
  dark: true,
  colors: {
    primary: color('red'),
  },
}

const darkSteel = {
  name: 'Steel [dark]',
  key: 'darkSteel',
  dark: true,
  colors: {
    primary: color('blueGrey'),
    secondary: color('blueGrey', 'lighten3'),
  },
}

export const darkGrey = {
  name: 'Grey [dark]',
  key: 'darkGrey',
  dark: true,
  colors: {
    primary: color('grey'),
    secondary: color('grey', 'lighten3'),
    info: color('blueGrey', 'lighten3'),
    success: '#9EA89E',
    warning: '#B2A89E',
    error: '#A89E9E',
  },
}

const lightBlue = {
  name: 'Blue [light]',
  key: 'lightBlue',
  dark: false,
  colors: {},
}

const lightPurple = {
  name: 'Purple [light]',
  key: 'lightPurple',
  dark: false,
  colors: {
    primary: color('purple'),
    secondary: color('teal'),
  },
}

const lightOrange = {
  name: 'Orange [light]',
  key: 'lightOrange',
  dark: false,
  colors: {
    primary: color('deepOrange'),
  },
}

const lightRed = {
  name: 'Red [light]',
  key: 'lightRed',
  dark: false,
  colors: {
    primary: color('red'),
  },
}

const lightSteel = {
  name: 'Steel [light]',
  key: 'lightSteel',
  dark: false,
  colors: {
    primary: color('blueGrey'),
    secondary: color('blueGrey', 'lighten3'),
  },
}

const lightGrey = {
  name: 'Grey [light]',
  key: 'lightGrey',
  dark: false,
  colors: {
    primary: color('grey'),
    secondary: color('grey', 'lighten3'),
    info: color('blueGrey', 'lighten3'),
    success: '#9EA89E',
    warning: '#B2A89E',
    error: '#A89E9E',
  },
}

export const themes = [
  darkBlue,
  darkOrange,
  darkPurple,
  darkRed,
  darkSteel,
  darkGrey,
  lightBlue,
  lightOrange,
  lightPurple,
  lightRed,
  lightSteel,
  lightGrey,
]
