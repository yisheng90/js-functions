function reverseString (num) {
  var reverse = ''
  var i = (num.length - 1)
  while (i >= 0) {
    reverse += num[i]
    i--
  }
  return reverse
}

console.log(reverseString('I10'))
