// count the number of vowels in a string of text

function NumofVowels(str) {
  let count = 0
  const reg = /[aeiou]/gi

  // check if it's a string
  if (typeof str !== "string") {
    console.log("not a string")
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(reg)) {
        count++
      }
    }
    console.log(`${str} has ${count} vowel(s)`)
  }
}

NumofVowels("I am a string of text")
