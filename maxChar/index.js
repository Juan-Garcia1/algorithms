// find the most commonly used character in a string

function maxChar(str) {
  const charMap = {}
  let maxChar = ""
  let max = 0

  for (let char of str) {
    //check if char is the same
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
