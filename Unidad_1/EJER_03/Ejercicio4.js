'use strict'

const sumaFlexible = (x, y) => {
  const valorDe = (v) => Array.isArray(v) ? v.reduce((acc, num) => acc + num, 0) : v
  return valorDe(x) + valorDe(y)
}

console.log(sumaFlexible(3, 4))      // 7
console.log(sumaFlexible([1, 2], 4)) // 7