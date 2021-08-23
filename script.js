// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var lowercaseConfirm;
var uppercaseConfirm;
var numberConfirm;
var specialConfirm;

function chooseLength(){
    passwordLength = prompt("How many characters do you want your password to be? Password must be between 8-128 characters.");

    if (passwordLength<8){
        alert("Password must have a minimum of 8 characters.");
        chooseLength();
      }else if (passwordLength>128){
        alert("Password can only have a maximum of 128 characters.");
        chooseLength();
      }else if (isNaN(passwordLength)){
        alert("Password length must be a number between 8-128 characters");
        chooseLength();
      }
      return passwordLength;
}

function chooseLowercase(){
    lowercaseConfirm = prompt("Do you want to include lowercase letters? \n(Yes or No)");
      lowercaseConfirm = lowercaseConfirm.toLowerCase();
  
      if (lowercaseConfirm === null || lowercaseConfirm === ""){
        alert("Please answer Yes or No");
        chooseLowercase();
  
      }else if (lowercaseConfirm === "yes" || lowercaseConfirm ==="y"){
        uppercaseConfirm = true;
        return uppercaseConfirm;
  
      }else if (lowercaseConfirm === "no" || lowercaseConfirm ==="n"){
        lowercaseConfirm = false;
        return lowercaseConfirm;
      
      }else {
        alert("Please answer Yes or No");
        chooseLowercase();
      }
      return lowercaseConfirm;
  }
  
  function chooseUppercase(){
    uppercaseConfirm = prompt("Do you want to include uppercase letters? \n(Yes or No)");
      uppercaseConfirm = uppercaseConfirm.toLowerCase();
  
      if (uppercaseConfirm === null || uppercaseConfirm === ""){
        alert("Please answer Yes or No");
        chooseUppercase();
  
      }else if (uppercaseConfirm === "yes" || uppercaseConfirm ==="y"){
        uppercaseConfirm = true;
        return uppercaseConfirm;
  
      }else if (uppercaseConfirm === "no" || uppercaseConfirm ==="n"){
        uppercaseConfirm = false;
        return uppercaseConfirm;
      
      }else {
        alert("Please answer Yes or No");
        chooseUppercase();
      }
      return uppercaseConfirm;
  }
  
  function chooseNumbers(){
    numberConfirm = prompt("Do you want to include numbers? \n(Yes or No)");
      numberConfirm = numberConfirm.toLowerCase();
  
      if (numberConfirm === null || numberConfirm === ""){
        alert("Please answer Yes or No");
        chooseNumbers();
  
      }else if (numberConfirm === "yes" || numberConfirm ==="y"){
        numberConfirm = true;
        return numberConfirm;
  
      }else if (numberConfirm === "no" || numberConfirm ==="n"){
        numberConfirm = false;
        return numberConfirm;
      
      }else {
        alert("Please answer Yes or No");
        chooseNumbers();
      }
      return numberConfirm;
  }
  
  function chooseSpecial(){
    specialConfirm = prompt("Do you want to include special characters? \n(Yes or No)");
      specialConfirm = specialConfirm.toLowerCase();
  
      if (specialConfirm === null || specialConfirm === ""){
        alert("Please answer Yes or No");
        chooseSpecial();
  
      }else if (specialConfirm === "yes" || specialConfirm ==="y"){
        specialConfirm = true;
        return specialConfirm;
  
      }else if (specialConfirm === "no" || specialConfirm ==="n"){
        specialConfirm = false;
        return specialConfirm;
      
      }else {
        alert("Please answer Yes or No");
        chooseSpecial();
      }
      return specialConfirm;
  }
  
  function generatePassword(){
    chooseLength();
    chooseUppercase();
    chooseNumbers();
    chooseSpecial();
  
  var characters = lowercase;
  var password = "";
  
  if (lowercaseConfirm && uppercaseConfirm && numberConfirm && specialConfirm){
    characters += lowercase + uppercase + number + special;
  
  }else if (lowercaseConfirm && uppercaseConfirm && numberConfirm){
    characters += lowercase + uppercase + number;
    
  }else if (lowercaseConfirm && uppercaseConfirm){
    characters += lowercase + uppercase;
  
  }else if (lowercaseConfirm && numberConfirm && specialConfirm){
    characters += lowercase + number + special;

  }else if (numberConfirm && specialConfirm){
      characters += number + special;
  
  }else if (lowercaseConfirm && uppercaseConfirm && specialConfirm){
    characters += lowercase + uppercase + special;

  }else if (uppercaseConfirm && specialConfirm){
      characters += uppercase + special;
  
  }else if(lowercaseConfirm){
    characters += lowercase;

  }else if (uppercaseConfirm){
    characters += uppercase;
  
  }else if(numberConfirm){
    characters += number;
  
  }else if (specialConfirm){
    characters += special;
  
  }
  
    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
  // Write password to the #password input
  function writePassword() {
    var passwordWrite = "";
    passwordWrite = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = passwordWrite;
  }
  
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);