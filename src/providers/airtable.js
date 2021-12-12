/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
const Airtable = require('airtable')
const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = require('../config')
const { showErrorMessage } = require('../helpers')

/* ––
 * –––– Variables declaration
 * –––––––––––––––––––––––––––––––––– */
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)

/* ––
 * –––– Public API
 * –––––––––––––––––––––––––––––––––– */
const getRecords = (baseName, viewName, callback = () => {}) => {
  base(baseName)
    .select({ view: viewName })
    .eachPage(
      (records, fetchNextPage) => {
        callback(records)
        fetchNextPage()
      },
      (err) => {
        if (err) {
          showErrorMessage()
        }
      }
    )
}

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  getRecords
}
