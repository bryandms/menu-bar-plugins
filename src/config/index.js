/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
const airtableConfig = require('./airtable')
const appConfig = require('./app')
const bitbucketConfig = require('./bitbucket')

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  ...airtableConfig,
  ...appConfig,
  ...bitbucketConfig
}
