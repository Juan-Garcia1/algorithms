// find the most commonly used character in a string

function maxChar(str) {
  const charMap = {}
  let maxChar = ""
  let max = 0

  for (let char of str) {
    // ex. { h:1, e:1, l:2, o:1 }
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }

  return maxChar
}

let output = maxChar("hello")
console.log(output)
