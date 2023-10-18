/*


localStorage.setItem('name', 'Lola');


console.log(localStorage.setItem('name'));


localStorage.removeItem('name');


localStorage.clear();

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


//STRING METHOD:
let string = "This is\\\" a string";
let string1 = 'This is it\'s a string';
let string2 = `This is ${string} next string`;

console.log(string);
console.log(string1);

//SLICE METHDOD;
//slice(startIndex, endIndex) - endINdex is exclusive



console.log(string1.slice(1, 5));
//If we give negative values it will start from end.
console.log(string1.slice(-5, -1));


//Substring is a string that's part of another string, for example
//"ace" is a substring of "racecar"



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

document.addEventListener('DOMContentLoaded', function () {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const generateButton = document.getElementById('button');

    generateButton.addEventListener('click', function () {
        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);

        if (!isNaN(min) && !isNaN(max)) {
            const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
            alert("Random Value: " + randomValue);
        } else {
            alert("Please enter valid min and max values.");
        }
    });
});

