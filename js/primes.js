function isPrime (num) {
  if (num % 2 === 0) {
    return false
  } else {
    for (var i = 2; i < num; i += 2) {
      if (num % i === 0) {
        return false
      }
    }
  }
  return true
}

function prime (max) {
  var prime = []
  for (var i = 1; i < max; i++) {
    if (isPrime(i)) {
      prime.push(i)
    }
  }
  return prime
}

console.log(prime(1000))
