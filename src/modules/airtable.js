/* eslint-disable no-undef */
/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
const { getRecords } = require('../providers')
const { AIRTABLE_BASE_URL } = require('../config')

/* ––
 * –––– Public API
 * –––––––––––––––––––––––––––––––––– */
const openIssues = () =>
  getRecords('Issues', 'Pendiente | Desarrollo', (records) => {
    console.log(`Open Issues | color=${primaryColor} size=18`)
    console.log('---')

    records.forEach((record) => {
      const id = record.get('ID')
      const name = `📋 ${record.get('Nombre')}`
      const user = `👤 ${record.get('Responsable')}`
      const status = `📈 ${record.get('Status')}`

      console.log(`Issue ${id} | href=${AIRTABLE_BASE_URL} size=16`)
      console.log(name)
      console.log(user)
      console.log(status)
      console.log('---')
    })
  })

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  openIssues
}
