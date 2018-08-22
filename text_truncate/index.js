// shorten the length of the string and add an ellipsis at the end

function textTruncate(str, length = 100, ending = "...") {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending
  } else {
    return str
  }
}
const output = textTruncate("The Hunger Games Mockingjay part 1", 25)
console.log(output)
