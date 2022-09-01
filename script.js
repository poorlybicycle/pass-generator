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
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want your password to contain. Must be no less than 8 and no more than 128 characters")
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <=  128) {


    // Pop-up prompts
    var lowerCase = confirm("Do you want your password to contain lowercase letters?")

    var upperCase = confirm("Do you want your password to contain uppercase letters?")

    var numbers = confirm("Do you want your password to contain numbers?")

    var specialChars = confirm("Do you want your password to contain special characters?")

    var password = "";

    //Variable that defines acceptable characters

    var allChars = 'ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'

    if (!lowerCase && upperCase) {
      allChars = allChars.toUpperCase();
    };

    if (!upperCase && lowerCase) {
      allChars = allChars.toLowerCase();
    };

    if (!upperCase && !lowerCase) {
      allChars = allChars.replace(/[A-Za-z]/g, '');
    };

    if (!numbers) {
      allChars = allChars.replace(/[^/\D]/g, '');
    };

    if (!specialChars) {
      allChars = allChars.replace(/[^a-zA-z0-9 ]/g, '');
    };

    for (var i = 0; i < parseInt(passwordLength); i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));

    };

    return password;
  }
  else {
    return "Please enter a password length between 8-128 characters."
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);