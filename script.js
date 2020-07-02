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

// make a list of available character types
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

// find out what the user wants
  // length
var pwLength = prompt("How long would you like your password to be?\nPlease choose a NUMBER between 8 and 128")

  // character types
var confirmLC = prompt("Do you want to include lowercase letters?\nType y for yes. Type n for no.");
var confirmUC = prompt("Do you want to include UPPERCASE letters?\nType y for yes. Type n for no.");
var confirmN = prompt("Do you want to include numbers?\nType y for yes. Type n for no.");
var confirmS = prompt("Do you want to include special characters?\nType y for yes. Type n for no.");

// make a list of accepted character types based on the chosen number
  // string concatination



// randomize the characters to make a password (string)
var randomString = "";

// display characters


// validate?


