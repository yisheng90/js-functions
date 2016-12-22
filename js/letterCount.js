function letterCount (word) {
  var count = {}

  var input = word.toLowerCase().replace(/[^A-Z0-9]/ig, '')
  for (var i = 0; i < input.length; i++) {
    if (count[input[i]] == null) {
      count[input[i]] = 1
    } else {
      count[input[i]] += 1
    }
  }

  for (var key in count) {
    console.log(key, '-', count[key])
  }
}

letterCount('Lee YiSheng')
