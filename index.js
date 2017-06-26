const lib = require('./lib')
module.exports = lib.invoke()

// if this is being run directly, then attempt to load it as
// server instead of module
if (module.id === '.') {
  const fs = require('fs')
  const path = require('path')
  const appjs = path.join(__dirname, 'app.js')
  if (fs.existsSync(appjs)) {
    try {
      require(appjs)
    } catch (E) {
      console.error(E)
    }
  }
}