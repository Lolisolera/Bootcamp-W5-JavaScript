
/*
//TASK1:
Add a text box and a button in the html
when you click on the button it should save the data of text box in the local storage
list data from local storage



//My SOLUTION:
const fullName = document.getElementById("name");
const saveButton = document.getElementById("save");

saveButton.addEventListener("click", clicksave);

function clicksave() {
    localStorage.setItem("Name", fullName.value);
    console.log(localStorage.getItem("Name"));
}
/*



//TASK 2:
/*Create a method which will be taking two parameters (string, index, num)
it will extract the characters that you pass as argument to the num parameter 
starting from the index you are passing.
*/

function extractSubstring(string, index, num) {
    if (index < 0 || index >= string.length) {
        return "Invalid index";
    }

    return string.substr(index, num);
}

// Example usage:
const string = "Hello, Lola!";
const index = 7;
const num = 3;

const extractedText = extractSubstring(string, index, num);
console.log(extractedText); // Output: "Lol"


/* SOLUTION FROM CHAT

const repText = (string.index, num) => {
    console.log(string, substr(index, num));
}
repText("Lola Marquez", 1, 3);
*/


//TASK 3:
/*
Create two boxes and a button.
when you clik on the button
it should alert a random value
between the values you typed in the text boxes.
*/

//SOLUTION TO TASK 3


const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const generateButton = document.getElementById('button');

generateButton.addEventListener('click', function () {
    const min = Number(minInput.value);
    const max = Number(maxInput.value);

    if (!(isNaN(min) || isNaN(max)) && typeof min === 'number' && typeof max === 'number') {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        alert("Random Number: " + randomNumber);
    } else {
        alert("Please enter valid min and max values.");
    }
});


//NOTE:
//isNaN()is a built-in JavaScript function that stands for "Is Not-a-Number."
//It is used to determine whether a value is a valid number or not. 
//If a value is not a valid number, isNaN() returns true; otherwise, it returns false.
//It will only evaluate to true if both min and max are valid numbers.
