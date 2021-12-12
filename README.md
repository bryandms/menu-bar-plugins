<div align="center">

# menu-bar-plugins

[About The Project](#about-the-project) | [How To Install](#how-to-install) | [License](#license)

</div>

## About The Project

Repository with [BitBar](https://xbarapp.com/) plugins for the MacOS menu bar.

**Built with:**

- [BitBar](https://xbarapp.com/)
- [Node JS](https://nodejs.org/)

**Available plugins:**
| Airtable Open Issues | Bitbucket Open PRs |
|---|---|
| ![](https://raw.githubusercontent.com/bryandms/menu-bar-plugins/main/src/assets/images/open-issues-dark.png) ![](https://raw.githubusercontent.com/bryandms/menu-bar-plugins/main/src/assets/images/open-issues-light.png) | ![](https://raw.githubusercontent.com/bryandms/menu-bar-plugins/main/src/assets/images/open-prs-dark.png) ![](https://raw.githubusercontent.com/bryandms/menu-bar-plugins/main/src/assets/images/open-prs-light.png) |

## How To Install

**1. Installing BitBar**

There are two ways to install BitBar on your Mac:

- Use Homebrew: `brew install --cask bitbar`.
- Or download .app file directly: [Get the latest version of BitBar](https://github.com/matryer/xbar/releases). Then copy it to your Applications folder.

**2. Installing Node**

- Install Node by following the [instructions here](https://nodejs.org/en/download/).
- Make sure your node exec resides in `usr/local/bin/node`, else you will have to update the path in the script.

**3. Setup plugin**

- Open Bitbar **it will ask you to (create and) select a plugins folder**, do so.
- Clone the repository on your local machine in the same **plugins folder** which you created while installing BitBar: `git clone https://github.com/bryandms/menu-bar-plugins.git`
- Duplicate the **.env-example** file and rename it to **.env** and change the environment variables: `cp .env.example .env`
- Move the **plugin.1h.js** file to **plugins folder**: `mv menu-bar-plugins/plugin.1h.js .`
- Grant execute permissions to the **plugin.1h.js** file: `chmod +x plugin.1h.js`
- Refresh Bitbar.

## License

[See license](https://github.com/bryandms/menu-bar-plugins/blob/main/LICENSE)
