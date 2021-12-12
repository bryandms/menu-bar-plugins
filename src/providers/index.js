/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
const airtableProvider = require('./airtable')
const apiProvider = require('./api')

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  ...airtableProvider,
  ...apiProvider
}
