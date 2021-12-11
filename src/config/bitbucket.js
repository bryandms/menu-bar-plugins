/* ––
 * –––– Constants declaration
 * –––––––––––––––––––––––––––––––––– */
const BITBUCKET_API_URL = process.env.BITBUCKET_API_URL
const EMAIL = process.env.BITBUCKET_EMAIL
const PASSWORD = process.env.BITBUCKET_PASSWORD
const CREDENTIALS = `${EMAIL}:${PASSWORD}`
const BASE64_ENCODED_CREDENTIALS = Buffer.from(CREDENTIALS).toString('base64')
const HEADERS = { Authorization: `Basic ${BASE64_ENCODED_CREDENTIALS}` }
const BITBUCKET_REQUEST_OPTIONS = { headers: HEADERS }

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  BITBUCKET_API_URL,
  BITBUCKET_REQUEST_OPTIONS
}
