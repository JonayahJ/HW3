// make a list of available character types ========================================
var lowerCase = `abcdefghijklmnopqrstuvwxyz`.split(``);
var upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``);
var numbers = `0123456789`.split(``);
var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~".split(``);

// Assignment Code
var generateBtn = document.querySelector(`#generate`);


// Add event listener to generate button
generateBtn.addEventListener(`click`, writePassword);


// function to create random password
function generatePassword() {
  
  // parameters (what the user wants in a password) ===================================
  // length
  var pwLength = prompt(`How long would you like your password to be?\nPlease choose a NUMBER between 8 and 128`)

  // convert pwLength into a number (was a string)
  pwCount = parseInt(pwLength)
  

  // user did not choose the correct password character count
  if (pwCount < 8 || pwCount > 128 ) {
  // error code
  alert(`Your password is either too long or too short.  Try again.`); 
  

  // try again
  return generatePassword();
  }
  
  // show user what size their password is
  alert(`Your password will be ${pwCount} characters long.`);
  
  // give user instructions
  alert(`You will now choose the criteria for your password. Please choose at least one parameter.`)


  // character types
  confirmLC = confirm(`Do you want to include lowercase letters?`);
  confirmUC = confirm(`Do you want to include UPPERCASE letters?`);
  confirmN = confirm(`Do you want to include numbers?`);
  confirmS = confirm(`Do you want to include special characters?`);

  // creating the password 
  var newPassword = [];

  // use randomized characters to make a password (string) 
  var randomString = [];

  // tally how many characters the user chooses
  var counter = 0
  

  // if they want lowercase, add lowercase letters to the password
  if (confirmLC === true) {
    randomString = randomString.concat(lowerCase);
    counter += 1;
    newPassword.push(lowerCase[randomPull(lowerCase)]);

  } 

  //if they want uppercase, add uppercase letters to the password
  if (confirmUC === true) {
    randomString = randomString.concat(upperCase);
    counter += 1;
    newPassword.push(upperCase[randomPull(upperCase)]);

  } 

  //if they want numbers, add numbers to the password
  if (confirmN === true) {
    randomString = randomString.concat(numbers);
    counter += 1;
    newPassword.push(numbers[randomPull(numbers)]);

  } 

  // if they want special characters, add special characters to the password
  if (confirmS === true) {
    randomString = randomString.concat(special);
    counter += 1;
    newPassword.push(special[randomPull(special)]);

  } 

  // check to see if the code works 0_o
  console.log(randomString);


  // user did not choose any parameters
  while (
    confirmLC === false &&
    confirmUC === false &&
    confirmN === false &&
    confirmS === false
  ) {

    // user error code
    alert(`Please choose at least one parameter.  Try again.`);
    break;
  }

  // use the tally to count how many characters of the minor strings we need to include
  for (var i = 0; i < pwCount - counter; i++) {
    // adding an element into the newPassword array the amount of the string
    // length of the random string multiplied by the random index
    newPassword.unshift(randomString[randomPull(randomString)]);
      
  }
  
  // testing it out
  console.log(newPassword);
 
  // fusing the new password together
  newPassword = newPassword.join(``);

  return newPassword;


}
// pulling the characters from out of the string and into the array
function randomPull(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(`#password`);

  passwordText.value = password;

}