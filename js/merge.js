function merge (arr1, arr2) {
  var merged = arr1.concat(arr2)
  return sortArray(merged)
}

function sortArray (arr) {
  return arr.sort(function (a, b) { return a - b })
}

var a = [1, 3, 5, 7, 9]
var b = [2, 4, 6, 8, 10]

console.log(merge(a, b))
