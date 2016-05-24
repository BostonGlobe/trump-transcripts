const fs = require('fs')
const argv = require('yargs').argv
const os = require('os')
const _ = require('lodash')

// read file from param
const file = fs.readFileSync(argv.file, 'utf8')

const result = _(file.split(os.EOL))
	.filter(d => d.length)
	.value()

console.log(result)
