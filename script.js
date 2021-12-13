// Assignment code here
var passwordFinal = []
var passwordLength 
var passwordSpecials 
var passwordLowercase
var passwordUppercase 
var passwordNumbers 
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specChar = "!@#$%^&*()_-~<>?/";

function randNumber() { a = Math.floor(Math.random() * 10); return a;}
function randLowChar() { a = alphaLower[Math.floor(Math.random() * alphaLower.Length)]; return a; };
function randUpperChar () { a = alphaUpper[Math.floor(Math.random() * alphaUpper.Length)]; return a; };
function randSpcChar () { a = specChar[Math.floor(Math.random() * specChar.Length)]; return a; };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// How will the user interact with the page? by clicking on "generate password btn"
generateBtn.addEventListener("click", function () {
    var passwordFinal = [];
    passwordLength = window.prompt("Please enter the number of random characters you would like to include. (between 8 and 128 are required).");
    
    if ( passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        window.alert("Please choose a number between 8 and 128");
        
    }
    passwordSpecials = window.confirm("Do you want to include special characters?")
    passwordLowercase = window.confirm("Do you want to include any lower case letter?")
    passwordUppercase = window.confirm(" Do you want to include any upper case letters?")
    passwordNumbers = window.confirm("Do you want to include any numbers?")

    var pwrdOptions = []

  if (!passwordSpecials) { } else pwrdOptions.push("pwrdSpecials");
  if (!passwordLowerCase) { } else pwrdOptions.push("pwrdLowerCase");
  if (!passwordUpperCase) { } else pwrdOptions.push("pwrdUpperCase");
  if (!passwordNumbers) { } else pwrdOptions.push("pwrdNumbers");

 function magicNum() {a = Math.floor(Math.random() * pwrdOptions.Length); return a;};

  if (pwrdOptions.Length === 0) {
    window.alert("Please choose at least one character type.");
    process.exit();
  } else {
    for (let step = 0; step < passwordLength; step++) {
      var randOption = magicNum();
      
      if (pwrdOptions[randOption] === 'passwordSpecials') {
        let char = randSpcChar();
        
        pwrdFinal.push(char);
        
      } else if (pwrdOptions[randOption] === 'passwordLowercase') {
        let char = randLowChar();
        
        pwrdFinal.push(char);
      
      } else if (pwrdOptions[randOption] === 'passwordUppercase') {
        let char = randUppChar();
       
        pwrdFinal.push(char);
      
      } else if (pwrdOptions[randOption] === 'passwordNumber') {
        let char = randNumber();
        
        pwrdFinal.push(char);
        
      }
    }
}
console.log(passwordfinal);
var passwordfinalString = passwordfinal.join("");
console.log(passwordfinalstring);

writePassword(passwordfinalString);

});
    
// Write password to the #password input
function writePassword() {
    const resultEl = document.getElementById("password");
    resultEl.textContent = password;
}

