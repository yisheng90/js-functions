function findLongestWord (num) {
  var max = num[0]
  for (var i = 1; i < num.length; i++) {
    if (num[i].length >= max.length) {
      max = num[i]
    }
  }
  return max
}

console.log(findLongestWord(['I', 'you', 'we', 'they', 'us', 'he', 'she', 'it']))
