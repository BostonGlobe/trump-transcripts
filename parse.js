const os = require('os')
const _ = require('lodash')
const clean = require('underscore.string').clean

const parse = (text) => {

	var currentKey = ''

	const result = _(text.split(os.EOL))
		.filter(d => d.length)
		.map(d => {

			const match = d.match(/(^\b[A-Z]{2,}\b):(.*)$/)
			var value

			if (match) {
				currentKey = match[1]
				value = match[2]
			} else {
				value = d
			}

			return {
				key: currentKey,
				value: clean(value.replace(/\[.*\]/g, ''))
			}

		})
		.value()

	return result

}

module.exports = parse
