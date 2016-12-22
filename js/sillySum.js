function sillySum (array) {
  var count = 0
  for (var i = 0; i < array.length; i++) {
    count += (i * array[i])
  }
  return count
}

console.log(sillySum([1, 2, 3, 4]))
