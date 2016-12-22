function isCharacterAVowel (param) {
  switch (param.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true
    default:
      return false
  }
}

console.log(isCharacterAVowel('A'))
