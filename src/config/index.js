/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
const appConfig = require('./app')
const bitbucketConfig = require('./bitbucket')

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  ...appConfig,
  ...bitbucketConfig
}
