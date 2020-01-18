var lowerAlp = "abcdefghijk"
var upperAlp = "ABCDEFGHIJK"
var specialSym = "!@#$%^&*"
var numbers = "1234567890"
var finalPassword = "";

function clearPassword() {
    document.getElementById('mainDisplay').innerText = "Working";
    finalPassword = "";
}

function generatePassword(){
    var passwordLength = document.getElementById("passLength").value;
        for (i=0; i<passwordLength; i++){
            console.log(finalPassword.concat(lowerAlp.charAt(Math.floor(Math.random() * lowerAlp.length))))
            console.log(lowerAlp.length)
            finalPassword = finalPassword.concat(lowerAlp.charAt(Math.floor(Math.random() * lowerAlp.length)));
        }

    document.getElementById('mainDisplay').innerText = finalPassword;
}