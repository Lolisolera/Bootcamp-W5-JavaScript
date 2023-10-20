//Select
let password = document.getElementById("password");
let generateBtn = document.getElementById("generateBtn");
let copyBtn = document.getElementById("copyBtn");


//Functin to generate a random 12 character password.
function generatePassword() {
    //Declare a caharacters variable that is a string of characters we build our 
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    //Set a value for the length of our generated password
    let passwordLength = 12;

    //Declare an empty string that will store our password

    let passwordString = " ";

    //Loop through our characters string 12 times, selecting a random character each time.
    for (let i = 0; i < passwordLength; i++) {
        //Generate  a random number to represent the index of the letter we randomly select from
        let randomNumber = Math.floor(Math.random() * characters.length);
        //Add character at the index our random number chooses to our password string
        passwordString += characters.substring(randomNumber, randomNumber + 1);
        console.log(passwordString);
    }
    //Set the value of  our password box to the randomly generated password string
    password.value = passwordString;
}

function copyPassword() {
    //Copying the value of the passwordString to our clipboard
    navigator.clipboard.writeText(password.value);
    //Inform the user of the password been copied to the clipboard
    alert("password copied to clipboard!");
}
//Calling the generate password fucntion on click
generateBtn.addEventListener("click", generatePassword);
//Calling the copy password function on click
copyBtn.addEventListener("click", copyPassword);