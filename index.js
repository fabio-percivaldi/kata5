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
  return nthPrimes(number)[number - 1]
}

function nthPrimes(number) {
  const currentPrime = []
  let currentPrimeNum = 0

  let currentNumber = 2

  while (currentPrimeNum < number) {
    if (isPrimeNumber(currentNumber)) {
      currentPrime.push(currentNumber)
      currentPrimeNum += 1
    }
    currentNumber += 1
  }

  return currentPrime
}

function sumSquarePrime(number) {
  return nthPrimes(number)
    .reduce((prev, curr) => prev + (curr * curr), 0)
}

function sumSquareEvenPrime(number) {
  const firstNPrimes = []
  for (let i = 1; i <= number + (number - 1); i += 2) {
    firstNPrimes.push(nthPrime(i))
  }
  return firstNPrimes.reduce((prev, curr) => prev + (curr * curr), 0)
}

function differenceOfStuff(number) {
  const sumOfSquareOfFirstNPrimes = sumSquarePrime(number)
  const firstNPrimes = nthPrimes(number)

  const sumOfFirstNPrimes = firstNPrimes.reduce((prev, curr) => prev + curr, 0)
  const squareOfSumOfFirstNPrimes = sumOfFirstNPrimes * sumOfFirstNPrimes

  return sumOfSquareOfFirstNPrimes - squareOfSumOfFirstNPrimes
}

function roba(number) {
  return nthPrimes(number)
    .map(nthPrime)
    .reduce((prev, curr) => prev + curr, 0)
}

module.exports = {
  isPrimeNumber,
  nthPrime,
  sumSquareNumber,
  sumSquarePrime,
  sumSquareEvenPrime,
  differenceOfStuff,
  roba
}
