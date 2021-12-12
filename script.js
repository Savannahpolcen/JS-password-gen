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

function randNumber() { a = Math.floor(Math.random() * 10); return a;}
function randLowChar() { a = alphaLower[Math.floor(Math.random)() * alphaLower.length)]; return a; };
function randUpperChar () { a = alphaUpper[Math.floor(Math.random() * alphaUpper.length)]; return a; };
function randSpcChar () { a = specChar[Math.floor(Math.random() * specChar.length)]; return a; };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// How will the user interact with the page? by clicking on "generate password btn"
generateBtn.addEventListener("click", function () {
    var passwordfinal = [];
    passwordlength = window.prompt("Please enter the number of random characters you would like to include. (between 8 and 128 are required).");
    
    if ( passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
        window.alert("Please choose a number between 8 and 128");
        process.exit();
    }
    passwordspecials = window.confirm("Do you want to include special characters?")
    passwordlowercase = window.confirm("Do you want to include any lower case letter?")
    passworduppercase = window.confirm(" Do you want to include any upper case letters?")
    passwordnumbers = window.confirm("Do you want to include any numbers?")

    var pwrdOptions = []

  if (!pwrdSpecials) { } else pwrdOptions.push("pwrdSpecials");
  if (!pwrdLowerCase) { } else pwrdOptions.push("pwrdLowerCase");
  if (!pwrdUpperCase) { } else pwrdOptions.push("pwrdUpperCase");
  if (!pwrdNumbers) { } else pwrdOptions.push("pwrdNumbers");

 function magicNum() {a = Math.floor(Math.random() * pwrdOptions.length); return a;};

  if (pwrdOptions.length === 0) {
    window.alert("Please choose at least one character type.");
    process.exit();
  } else {
    for (let step = 0; step < pwrdLength; step++) {
      var randOption = magicNum();
      
      if (pwrdOptions[randOption] === 'passwordspecials') {
        let char = randSpcChar();
        
        pwrdFinal.push(char);
        
      } else if (pwrdOptions[randOption] === 'passwordlowercase') {
        let char = randLowChar();
        
        pwrdFinal.push(char);
      
      } else if (pwrdOptions[randOption] === 'passworduppercase') {
        let char = randUppChar();
       
        pwrdFinal.push(char);
      
      } else if (pwrdOptions[randOption] === 'passwordnumber') {
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

