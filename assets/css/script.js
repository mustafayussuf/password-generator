// Assignment Code
let symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
let number ="0123456789";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";


let generateBtn = document.querySelector("#generate");

function generatePassword() {
  let combineCharaters = ""
  let passWordLenght = window.prompt("Enter lenght of the a password from 8 to 128 charaters");

  if (passWordLenght < 8 || passWordLenght > 128) {
    window.alert("password has to be between 8 to 128 characters");
    return "";
  }
  let userLower = window.confirm("Do you want to use lowercase characters");
  let userUpper = window.confirm("Do you want to use uppercase characters");
  let userNumber = window.confirm("Do you want to use numbers");
  let userSymbols = window.confirm("Do you want to use symbols");
  
  if (userLower) combineCharaters = combineCharaters.concat(lowercase);
  if (userUpper) combineCharaters = combineCharaters.concat(uppercase);
  if (userNumber) combineCharaters = combineCharaters.concat(number);
  if (userSymbols) combineCharaters = combineCharaters.concat(symbols);
  let randomPassword = "";
  for (let i = 0; i < passWordLenght; i++)
    randomPassword += combineCharaters[Math.floor(Math.random() * combineCharaters.length)];

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

