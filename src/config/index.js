/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
const airtableConfig = require('./airtable')
const pluginConfig = require('./plugin')
const bitbucketConfig = require('./bitbucket')

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  ...airtableConfig,
  ...pluginConfig,
  ...bitbucketConfig
}
