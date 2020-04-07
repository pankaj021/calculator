let fName = "ajay"
let lName = "yadav"
let fullName = fName + lName
console.log("fName + lName::::::::::", fullName)
fullName = fName + " " + lName
console.log("fName  lName::::::::::", fullName)

fullName = `${fName} ${lName}`

fullName = `${fName} kumar ${lName}`
console.log("${fName} kumar ${lName}", fullName)

// to run ::::: node src/backTick.js