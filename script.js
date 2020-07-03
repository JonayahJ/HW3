// Assignment Code
var generateBtn = document.querySelector(`#generate`);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(`#password`);

  passwordText.value = password;

}


// make a list of available character types ========================================
var lowerCase = `abcdefghijklmnopqrstuvwxyz`.split(``);
var upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~".split(``);

// parameters (what the user wants in a password) ===================================

// length
var pwLength = prompt(`How long would you like your password to be?\nPlease choose a NUMBER between 8 and 128`)

// convert pwLength into a number (was a string)
pwCount = parseInt(pwLength)

// show user what size their password is
while (pwCount >= 8 && pwCount <= 128) {
  alert(`Your password will be ${pwCount} characters long.`);
  break;
}

// use did not choose the correct password character count
if (pwCount < 8 || pwCount > 128 ) {
  // error code
  alert(`Your password is either too long or too short.  Try again.`); 
  
  // try again
  var pwLength = prompt(`How long would you like your password to be?\nPlease choose a NUMBER between 8 and 128`)
}

// give user instructions
alert(`You will now choose the criteria for your password. Please choose at least one parameter.`)

// character types
var confirmLC = confirm(`Do you want to include lowercase letters?`);
var confirmUC = confirm(`Do you want to include UPPERCASE letters?`);
var confirmN = confirm(`Do you want to include numbers?`);
var confirmS = confirm(`Do you want to include special characters?`);


// user did not choose any parameters
while (
  confirmLC === false &&
  confirmUC === false &&
  confirmN === false &&
  confirmS === false
) {
  // user error code
  alert(`Please choose at least one parameter.  Try again.`);

  // parameter questions again
  var confirmLC = confirm(`Do you want to include lowercase letters?`);
  var confirmUC = confirm(`Do you want to include UPPERCASE letters?`);
  var confirmN = confirm(`Do you want to include numbers?`);
  var confirmS = confirm(`Do you want to include special characters?`);
  break;
}

// creating the password =============================================================
var newPassword = [];

// if they want lowercase, add lowercase letters to the password
if (confirmLC === true) {
  newPassword = newPassword.concat(lowerCase);
} 

//if they want uppercase, add uppercase letters to the password
if (confirmUC === true) {
  newPassword = newPassword.concat(upperCase);
} 

//if they want numbers, add numbers to the password
if (confirmN === true) {
  newPassword = newPassword.concat(number);
} 

// if they want special characters, add special characters to the password
if (confirmS === true) {
  newPassword = newPassword.concat(special);
} 

var char = lowerCase.concat(upperCase, numbers, special);

// use randomized characters to make a password (string) ============================
var randomString = ``;


// Add event listener to generate button
generateBtn.addEventListener(`click`, writePassword);


function generatePassword(pwCount) {
  
}


