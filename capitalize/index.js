// catitalize the first letter of each word

function capitalize(str) {
  // lowercase the string and split into an array
  const strArr = str.toLowerCase().split(" ")

  // loop through the array
  // Grab the first letter and set it as uppercase
  // add the remaining word
  const newStrArr = strArr
    .map(word => {
      return word.slice(0, 1).toUpperCase() + word.slice(1)
    })
    .join(" ")

  console.log(newStrArr)
}

capitalize("HERE IS MY HANDLE HERE IS MY SPOUT")
