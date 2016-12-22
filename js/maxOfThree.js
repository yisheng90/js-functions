function maxOfThree (x, y, z) {
  if (y >= x) {
    x = y
  }
  if (z >= x) {
    x = z
  }

  console.log(x)
}

maxOfThree(10, 30, 9)
