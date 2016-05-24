const expect = require('chai').expect
const fs = require('fs')
const path = require('path')

const parse = require('./../parse.js')

const input = fs.readFileSync(
	path.join(__dirname, './fixtures', 'input.txt'), 'utf8')

const output = JSON.parse(fs.readFileSync(
	path.join(__dirname, './fixtures', 'output.json'), 'utf8'))

describe('parse', () => {

	it('should work', () => {

		expect(parse(input)).to.deep.equal(output)

	})

})

