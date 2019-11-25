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

function returnFirstNthPrimes(number) {
  const firstNPrimes = []
  for (let i = 1; i <= number; i++) {
    firstNPrimes.push(nthPrime(i))
  }
  return firstNPrimes
}
// function nthPrime(number) {
//   return nthPrimes(number)[number]
// }
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

function sumSquarePrime(number) {
  return returnFirstNthPrimes(number)
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
  const firstNPrimes = returnFirstNthPrimes(number)

  const sumOfFirstNPrimes = firstNPrimes.reduce((prev, curr) => prev + curr, 0)
  const squareOfSumOfFirstNPrimes = sumOfFirstNPrimes * sumOfFirstNPrimes

  return sumOfSquareOfFirstNPrimes - squareOfSumOfFirstNPrimes
}

module.exports = {
  isPrimeNumber,
  nthPrime,
  sumSquareNumber,
  sumSquarePrime,
  sumSquareEvenPrime,
  differenceOfStuff,
}
