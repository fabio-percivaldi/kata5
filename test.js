
/* eslint-disable id-length */
'use strict'
/* eslint-disable no-shadow */
const tap = require('tap')
const { isPrimeNumber, nthPrime, sumSquareNumber, sumSquarePrime, sumSquareEvenPrime } = require('./index')


tap.test('isPrime', async t => {
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

tap.test('nthPrime', async t => {
  const tests = [
    {
      input: 1,
      expected: 2,
    },
    {
      input: 2,
      expected: 3,
    },
    {
      input: 3,
      expected: 5,
    },
    {
      input: 4,
      expected: 7,
    },
    {
      input: 21,
      expected: 73,
    },
    {
      input: 25,
      expected: 97,
    },
  ]

  tests.forEach(test => {
    t.test(`${test.input}`, async assert => {
      assert.strictSame(nthPrime(test.input), test.expected)
      assert.end()
    })
  })
  t.end()
})

tap.test('sumSquareNumber', async t => {
  const tests = [
    {
      input: 0,
      expected: 0,
    },
    {
      input: 1,
      expected: 0,
    },
    {
      input: 2,
      expected: 1,
    },
    {
      input: 3,
      expected: 5,
    },
    {
      input: 4,
      expected: 14,
    },
    {
      input: 5,
      expected: 30,
    },
    {
      input: 15,
      expected: 1015,
    },
  ]

  tests.forEach(test => {
    t.test(`${test.input}`, async assert => {
      assert.strictSame(sumSquareNumber(test.input), test.expected)
      assert.end()
    })
  })
  t.end()
})

tap.test('sumSquarePrime', async t => {
  const tests = [
    {
      input: 0,
      expected: 0,
    },
    {
      input: 1,
      expected: 4,
    },
    {
      input: 2,
      expected: 13,
    },
    {
      input: 3,
      expected: 38,
    },
    {
      input: 4,
      expected: 87,
    },
    {
      input: 17,
      expected: 16756,
    },
  ]

  tests.forEach(test => {
    t.test(`${test.input}`, async assert => {
      assert.strictSame(sumSquarePrime(test.input), test.expected)
      assert.end()
    })
  })
  t.end()
})

tap.test('sumSquareEvenPrime', async t => {
  const tests = [
    {
      input: 0,
      expected: 0,
    },
    {
      input: 1,
      expected: 4,
    },
    {
      input: 2,
      expected: 29,
    },
    {
      input: 3,
      expected: 150,
    },
    {
      input: 4,
      expected: 439,
    },
  ]

  tests.forEach(test => {
    t.test(`${test.input}`, async assert => {
      assert.strictSame(sumSquareEvenPrime(test.input), test.expected)
      assert.end()
    })
  })
  t.end()
})
