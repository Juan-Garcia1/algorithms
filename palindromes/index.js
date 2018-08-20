// check if characters reads the same backwards

function palindrome(str) {
  // with for loop

  // let reverseStr = ""

  // for (let i = str.length - 1; i >= 0; i--) {
  //   reverseStr += str[i]
  // }
  // console.log(reverseStr === str)

  // or

  // split turns the string into an array
  // reverse reverses each item in the aray
  // join turns the array back into a string
  let reverseStr = str
    .split("")
    .reverse()
    .join("")

  const isPalindrome = reverseStr === str
  console.log(isPalindrome)
}

palindrome("racecar")
