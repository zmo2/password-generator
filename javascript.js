var lowerAlp = "abcdefghijklmnopqrstuvwxyz"
var upperAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialSym = "!@#$%^&*"
var numbers = "1234567890"
var tempPass =""
var tempKeyPool = ""
var finalPassword = "";
var optionList = document.getElementById("passOptions")
var selectedItems = optionList.selectedOptions

// function that clears the variables 
function clearPassword() {
    finalPassword = ""
    tempKeyPool = ""
    tempPass = ""
}

//function that checks for what password options were selected and save at least one of the selected options into a temp string
function getSelectedItems(){
    for (i=0; i<selectedItems.length; i++){
        
        if (selectedItems[i].label === "LowerCase"){
            tempPass = tempPass.concat(lowerAlp.charAt(Math.floor(Math.random() * lowerAlp.length)));
            tempKeyPool = tempKeyPool.concat(lowerAlp)
            // console.log(tempPass)
        }if (selectedItems[i].label === "UpperCase"){
            tempPass = tempPass.concat(upperAlp.charAt(Math.floor(Math.random() * upperAlp.length)));
            tempKeyPool = tempKeyPool.concat(upperAlp)
            // console.log(tempPass)
        }if (selectedItems[i].label === "SpecialSymbols"){
            tempPass = tempPass.concat(specialSym.charAt(Math.floor(Math.random() * specialSym.length)));
            tempKeyPool = tempKeyPool.concat(specialSym)
            // console.log(tempPass)
        }if (selectedItems[i].label === "Numbers"){
            tempPass = tempPass.concat(numbers.charAt(Math.floor(Math.random() * numbers.length)));
            tempKeyPool = tempKeyPool.concat(numbers)
            // console.log(tempPass)
        }
    }
}

//generates the random password combining the temp string generated in getSelectedItems()
function generatePassword(){
    var passwordLength = document.getElementById("passLength").value;
    if (passwordLength<8 || passwordLength>128){
        document.getElementById('mainDisplay').innerText = "Please input password length between 8 and 128";
    } else {
        getSelectedItems()
        finalPassword=tempPass
            for (i=tempPass.length; i<passwordLength; i++){
                finalPassword = finalPassword.concat(tempKeyPool.charAt(Math.floor(Math.random() * tempKeyPool.length)));
            }
        document.getElementById('mainDisplay').innerText = finalPassword;
        clearPassword()
    }
}

//function to copy the password to the clipboard 
function copy(){
    var textForCopy = document.getElementById("mainDisplay")
    textForCopy.select()
    document.execCommand("copy") 
}

