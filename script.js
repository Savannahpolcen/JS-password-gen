// Assignment code here
var passwordfinal = []
var passwordlength 
var passwordspecials 
var passwordlowercase
var passworduppercase 
var passwordnumbers 

const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specChar = "!@#$%^&*()_-~<>?/";

function randNumber() { a = Math.floor(Math.random()*10); return a;}
function randLowChar() { a = alphaLower[Math.floor(Math.random)() * alphaLower.length)]; return a; };
function randUpperChar () { a = alphaUpper[Math.floor(Math.random() * alphaUpper.length)]; return a; };
function randSpcChar () { a = specChar[Math.floor(Math.random() * specChar.length)]; return a; };




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);