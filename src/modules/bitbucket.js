/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
const { get } = require('../providers')
const { BITBUCKET_API_URL, BITBUCKET_REQUEST_OPTIONS } = require('../config')
const { showErrorMessage } = require('../helpers')

/* ––
 * –––– Public API
 * –––––––––––––––––––––––––––––––––– */
const userPullRequest = () =>
  get(`${BITBUCKET_API_URL}/user`, BITBUCKET_REQUEST_OPTIONS, (user) => {
    const { type, username } = user

    if (type !== 'error') {
      get(
        `${BITBUCKET_API_URL}/pullrequests/${username}?state=OPEN`,
        BITBUCKET_REQUEST_OPTIONS,
        showUserPullRequests
      )
    } else {
      showErrorMessage()
    }
  })

/* ––
 * –––– Helper methods
 * –––––––––––––––––––––––––––––––––– */
const showUserPullRequests = (pullRequests) => {
  console.log(`Open Pull Requests | color=${primaryColor} size=18`)
  console.log('---')
  pullRequests.values.forEach((value) => showPullRequest(value))
}

const showPullRequest = (pullRequest) => {
  const { title, destination, links, comment_count, task_count } = pullRequest
  const branch = destination.branch.name
  const linkToPullRequest = links.html.href

  console.log(`${title} ↦ ${branch} | href=${linkToPullRequest} size=16`)
  console.log(`💬 Comments  : ${comment_count}`)
  console.log(`📝 Tasks           : ${task_count}`)
  console.log('---')
}

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  userPullRequest
}
