// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password function
function generate() {
  //set password length/complexity
  let complexity = document.getElementById("generate").value;

  let values = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  let password = "";

  //create for loop to choose password characters
  for (var i=0; i <= complexity, i++;) {
    password = password + values.charAt(Math.floor(Math.random()* Math.floor(value.length - 1)));
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let password = "";


