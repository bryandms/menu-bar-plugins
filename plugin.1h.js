#!/usr/bin/env /usr/local/bin/node

// <xbar.title>menu-bar-plugins</xbar.title>
// <xbar.version>v1.0</xbar.version>
// <xbar.author>Bryan Morales</xbar.author>
// <xbar.author.github>bryandms</xbar.author.github>
// <xbar.desc>MacOS menu bar plugins.</xbar.desc>
// <xbar.dependencies>node</xbar.dependencies>

const app = require('./menu-bar-plugins')

app.showPluginName()
app.showOpenIssues()
app.showUserPullRequests()
