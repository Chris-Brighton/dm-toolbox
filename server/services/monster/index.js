const { Service } = require('nuxt-serve')
const model = require('./model')
module.exports = (app) => {
  new Service('monster', model(app)).configure(app)
}
