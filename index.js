/* eslint-disable no-unused-expressions */
/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '/.env')
})
const helpers = require('./src/helpers')
const modules = require('./src/modules')

/* ––
 * –––– Variables declaration
 * –––––––––––––––––––––––––––––––––– */
global.primaryColor = ''

/* ––
 * –––– Initializer declaration
 * –––––––––––––––––––––––––––––––––– */
helpers.loadOSTheme

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  ...helpers,
  ...modules
}
