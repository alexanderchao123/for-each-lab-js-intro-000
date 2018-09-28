function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var fruits = ["watermelon", "apple", "peach", "pear"]
  fruits.forEach(callback(element, index, array) {
    
  })
  return fruits
}
