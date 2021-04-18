const { describe, it } = require('mocha')
const shortener = require('../shortener')
const assert = require('assert')

describe('shortener.js tests', () => {
    describe('shortener.hashUrl() Test', () => {
        var test = "https://github.com/olawolu"
        it('should return a string', () => {

            const result = shortener.hashUrl(test)
            assert.strictEqual(typeof (result), 'string')
        })
        it('should be 6 characters', () => {
            const result = shortener.hashUrl()
            assert.strictEqual(result.length, 6)
        })
    })
})