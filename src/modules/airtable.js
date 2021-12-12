/* eslint-disable no-undef */
/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
const { getRecords } = require('../providers')
const { AIRTABLE_BASE_URL } = require('../config')

/* ––
 * –––– Public API
 * –––––––––––––––––––––––––––––––––– */
const showOpenIssues = () =>
  getRecords('Issues', 'Pendiente | Desarrollo', (issues) =>
    showOpenIssuesSection(issues)
  )

/* ––
 * –––– Helper methods
 * –––––––––––––––––––––––––––––––––– */
const showOpenIssuesSection = (issues) => {
  console.log(`Open Issues | color=${primaryColor} size=18`)
  console.log('---')
  issues.forEach((issue) => showOpenIssue(issue))
}

const showOpenIssue = (issue) => {
  const id = issue.get('ID')
  const name = `📋 ${issue.get('Nombre')}`
  const user = `👤 ${issue.get('Responsable')}`
  const status = `📈 ${issue.get('Status')}`

  console.log(`Issue ${id} | href=${AIRTABLE_BASE_URL} size=16`)
  console.log(name)
  console.log(user)
  console.log(status)
  console.log('---')
}

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  showOpenIssues
}
