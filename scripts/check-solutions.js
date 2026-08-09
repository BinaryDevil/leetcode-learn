const fs = require('node:fs')
const path = require('node:path')
const { execFileSync } = require('node:child_process')

const problemsDirectory = path.join(__dirname, '..', 'problems')

function collectJavaScriptFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) return collectJavaScriptFiles(entryPath)
    return entry.isFile() && entry.name.endsWith('.js') ? [entryPath] : []
  })
}

const files = collectJavaScriptFiles(problemsDirectory)

for (const file of files) {
  execFileSync(process.execPath, ['--check', file], { stdio: 'inherit' })
}

console.log(`Checked ${files.length} solution files.`)
