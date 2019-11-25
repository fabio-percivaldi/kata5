'use strict'

function isPrimeNumber(number) {
  let isPrime = true
  if (number === 0 || number === 1) {
    return false
  }
  for (let i = 2; i <= number; i++) {
    if (number % i === 0 && number !== i) {
      isPrime = false
      break
    }
  }
  return isPrime
}
module.exports = isPrimeNumber
