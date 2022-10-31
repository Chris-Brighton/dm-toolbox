const { Service } = require('nuxt-serve')
const model = require('./model')
module.exports = (app) => {
  new Service('spell', model(app)).configure(app)
}
