function showVerticalMessage(word) {
  let firstLetter = word.at(0)
  if (firstLetter == "s" || firstLetter == "S") {
    console.log("//S")
  } else {
    console.log("//" + firstLetter)
  }
  let i = 1
  while (i < word.length && i < 6) {
    console.log("//" + word.at(i));
    i = i + 1
  }
}

showVerticalMessage("strada")
