// check to see if two strings have the same characters. white space and punctuations don't count

function anagrams(str1, str2) {
  return cleanStr(str1) === cleanStr(str2)
}

// remove whitespace, sort and lowercase string
function cleanStr(str) {
  // removes any whitespace and non-word characters(., !, ?...)
  const Regex = /[\s,\W]/g

  return str
    .replace(Regex, "")
    .split("")
    .sort()
    .join("")
    .toLowerCase()
}

const output = anagrams("RAIL! SAFETY!", "fairy tales")

console.log(output)
