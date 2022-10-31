module.exports = (app) => {
  app.configure(require('./spell'))
  app.configure(require('./monster'))
}
