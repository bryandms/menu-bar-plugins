/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
const https = require('https')
const { showErrorMessage } = require('../helpers')

/* ––
 * –––– Public API
 * –––––––––––––––––––––––––––––––––– */
const get = (url, options = {}, callback = () => {}) => {
  const request = https.get(url, options, (response) => {
    let body = ''

    response.setEncoding('utf8')

    response.on('data', (chunk) => (body += chunk))

    response.on('end', () => callback(JSON.parse(body)))
  })

  request.on('error', () => showErrorMessage())
  request.end()
}

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  get
}
