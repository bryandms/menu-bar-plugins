/* eslint-disable no-undef */
/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
const { exec } = require('child_process')
const { PLUGIN_ICON, PLUGIN_NAME } = require('./config')

/* ––
 * –––– Variables declaration
 * –––––––––––––––––––––––––––––––––– */
const command = 'defaults read -g AppleInterfaceStyle'

/* ––
 * –––– Public API
 * –––––––––––––––––––––––––––––––––– */
const loadOSTheme = new Promise((resolve) => {
  exec(command, (error) => {
    if (error) {
      resolve('Light')
    }
    resolve('Dark')
  })
}).then((theme) => {
  primaryColor = theme === 'Light' ? '#343a40' : '#f8f9fa'
})

const showPluginName = () => {
  console.log(`${PLUGIN_NAME} | templateImage=${PLUGIN_ICON}`)
  console.log('---')
}

const showErrorMessage = () => {
  console.log(':warning: ERROR')
  console.log('---')
  console.log('An error occurred while loading the plugin.')
}

/* ––
 * –––– Exports
 * –––––––––––––––––––––––––––––––––– */
module.exports = {
  loadOSTheme,
  showPluginName,
  showErrorMessage
}
