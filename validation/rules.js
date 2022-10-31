const required = (message) => {
  const func = (v) => !!v || message
  return func
}

module.exports = {
  required,
}
