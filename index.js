'use strict'

const chalk = require('chalk')
const fs = require('fs')
const {join} = require('path')
const pkg = require('./package.json')


const nameError =
`*******************************************************************
 You need to give your app a proper name.`

const appLink = join(__dirname, 'node_modules', 'APP')

const symlinkError = error =>
`*******************************************************************
${appLink} must point to '..'
This symlink lets you require('APP/some/path') rather than
../../../some/path
I tried to create it, but got this error:
${error.message}
You might try this:
  rm ${appLink}
Then run me again.
  ~ xoxo, bones
********************************************************************`

function makeAppSymlink() {
  console.log(`Linking '${appLink}' to '..' ...`)
  try {
    fs.unlinkSync(appLink)
    fs.linkSync(appLink, '..')
  } catch (error) {
    console.error(chalk.red(nameError))
    process.exit(1)
  }
  console.log(`Ok, created ${appLink}`)
}

function checkAppSymlink() {
  try {
    const currently = fs.readlinkSync(appLink)
    if (currently !== '..') {
      throw new Error(`${appLink} is pointing to '${currently}' rather than '..'`)
    }
  } catch (error) {
    makeAppSymlink()
  }
}


// this was giving us incorrect errors
// const reasonableName = /^[[a-z0-9]\-]+$/
// if (!reasonableName.test(pkg.name)) {
//   console.error(chalk.red(nameError))
// }

module.exports = {
  get name() { return pkg.name },
  get isTesting() { return !!global.it },
  get isProduction() {
    return process.env.NODE_ENV === 'production'
  },
  package: pkg,
}
