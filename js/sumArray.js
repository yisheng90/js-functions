function sumArray (array) {
  var sum = 0
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }
  console.log(sum)
}

function multiplyArray (array) {
  var result = 1
  for (var i = 0; i < array.length; i++) {
    result *= array[i]
  }
  console.log(result)
}

var a = [1, 2, 3, 4]

sumArray(a)
multiplyArray(a)
