// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// PASSWORD CRITERIA
// prompt1 is for length
var length = prompt("How long would you like your password to be?\nPlease choose a NUMBER between 8 and 128")

// "prompt2" is for character types
alert("Do you want to include lowercase letters?\nChoose Ok for yes. Choose Cancel for no.")
alert("Do you want to include UPPERCASE letters?\nChoose Ok for yes. Choose Cancel for no.")
alert("Do you want to include numbers?\nChoose Ok for yes. Choose Cancel for no.")
alert("Do you want to include special characters?\nChoose Ok for yes. Choose Cancel for no.")

// variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var randomString = "";

// FUNCTIONS and SUCH
if (length > 0) {
  for (var i=0; i < length; i++){
    // need to combine lowerCase, upperCase, numbers, and specials (if user chooses)
  }
}

function name(params) {
  
}

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page