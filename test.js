
/* eslint-disable id-length */
'use strict'
/* eslint-disable no-shadow */
const tap = require('tap')
const isPrimeNumber = require('./index')


tap.test('Rule', async t => {
  const tests = [
    {
      input: 0,
      expected: false,
    },
    {
      input: 1,
      expected: false,
    },
    {
      input: 2,
      expected: true,
    },
    {
      input: 3,
      expected: true,
    },
    {
      input: 4,
      expected: false,
    },
    {
      input: 5,
      expected: true,
    },
    {
      input: 73,
      expected: true,
    },
    {
      input: 93,
      expected: false,
    },
    {
      input: 97,
      expected: true,
    },
  ]

  tests.forEach(test => {
    t.test(`${test.input}`, async assert => {
      assert.strictSame(isPrimeNumber(test.input), test.expected)
      assert.end()
    })
  })
  t.end()
})
