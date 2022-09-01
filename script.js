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
  var passwordLength = prompt("Please enter the number of characters you want your password to contain. Must be no less than 8 and no more than 128 characters");
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <=  128) {

    var lowerCase = confirm("Do you want yoour password to contain lowercase letters?")

    var upperCase = confirm("Do you want your password to contain uppercase letters?")

    var numbers = confirm("Do you want your password to contain numbers?")

    var specialChars = confirm("Do you want your password to contain special characters?")

    var password = "";

    var allChars = 'ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'

    if (!lowerCase && upperCase) {
      allChars = allChars.toUpperCase();
    };

    if (!upperCase && lowerCase) {}
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

