var lowerAlp = "abcdefghijklmnopqrstuvwxyz"
var upperAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialSym = "!@#$%^&*"
var numbers = "1234567890"
var finalPassword = "";
var optionList = document.getElementById("passOptions")
var selectedItems = optionList.selectedOptions
var wantSymbol = false
var wantLower = false
var wantUpper = false
var wantNumber =false



function clearPassword() {
    document.getElementById('mainDisplay').innerText = "Working";
    finalPassword = "";
    getSelectedItems()
}

function getSelectedItems(){
    for (i=0; i<selectedItems.length; i++){
        if (selectedItems[i].label === "LowerCase"){
            wantLower = true
        }if (selectedItems[i].label === "UpperCase"){
            wantUpper = true
        }if (selectedItems[i].label === "SpecialSymbols"){
            wantSymbol = true
        }if (selectedItems[i].label === "Numbers"){
            wantNumber = true
        }
        console.log(selectedItems[i].label)
    }
}

function generatePassword(){
    var passwordLength = document.getElementById("passLength").value;
        for (i=0; i<passwordLength; i++){
            
            finalPassword = finalPassword.concat(lowerAlp.charAt(Math.floor(Math.random() * lowerAlp.length)));
        }



    document.getElementById('mainDisplay').innerText = finalPassword;
}