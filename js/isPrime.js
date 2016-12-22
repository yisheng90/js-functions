function isPrime (num) {
  if (num > 2 && num % 2 === 0) {
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

console.log(isPrime(27))
