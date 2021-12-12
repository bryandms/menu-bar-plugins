/* ––
 * –––– Constants declaration
 * –––––––––––––––––––––––––––––––––– */
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
const AIRTABLE_BASE_URL = `${process.env.AIRTABLE_BASE_URL}/${AIRTABLE_BASE_ID}`

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  AIRTABLE_API_KEY,
  AIRTABLE_BASE_ID,
  AIRTABLE_BASE_URL
}
