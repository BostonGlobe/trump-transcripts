const fs = require('fs')
const argv = require('yargs').argv
const parse = require('./parse.js')
const NGrams = require('natural').NGrams
const _ = require('lodash')
const clean = require('underscore.string').clean

// read file from param
const file = fs.readFileSync(argv.file, 'utf8')

const text = parse(file) // parse
	.filter(f => f.key === 'TRUMP') // limit to TRUMP
	.map(f => clean(f.value)) // choose spoken part, remove whitespace
	.join('||||||') // join
	// .replace(/'/g, 'X')
	// .toLowerCase()

console.log(text)

const getTopNGrams = (opts) => {

	const result = _(NGrams.ngrams(opts.text, opts.n))
		.map(d => d.join(' '))
		.countBy()
		.map((count, value) => ({
			'5-words': value,
			count,
		}))
		.orderBy(['count'], ['desc'])
		.value()
		// .filter(f => f.value.match('believe'))
		.slice(0, 10)

	return result

}



// console.log(JSON.stringify(getTopNGrams({ text: text, n: 1 }), null, 2))
