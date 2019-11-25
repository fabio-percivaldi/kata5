'use strict'

function sumSquareNumber(number) {
  let sum = 0
  for (let i = 0; i < number; i++) {
    sum += i * i
  }
  return sum
}
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

function nthPrime(number) {
  let currentPrime = 2
  let currentPrimeNum = 1

  let currentNumber = 3

  while (currentPrimeNum < number) {
    if (isPrimeNumber(currentNumber)) {
      currentPrime = currentNumber
      currentPrimeNum += 1
    }
    currentNumber += 1
  }

  return currentPrime
}

module.exports = {
  isPrimeNumber,
  nthPrime,
  sumSquareNumber,
}
