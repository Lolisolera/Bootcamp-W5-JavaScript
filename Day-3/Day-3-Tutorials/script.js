// Which method is used to attach an event to a html element?   Maria
//addEventListener();
//how can we access the value of a form input element? Paul
//- value --- document.getElementById('txt').value
// what is the difference between attached event in html and in js file? Saharah
//via js we can attached multiple events
//what is the syntax for addEventListener method? Idrees
//element.addEventListener('event', code we want to be executed while the event occur);
//write a code which will attach an event to an element having id='save'? Max
/* const saveButton = document.getElementById('save');

saveButton.addEventListener('click', clickSave);
*/

//Learning Objectives
//- Exploring Local storage in JavaScript
//- Saving/Accessing data into the browser local storage

//save the data in local storage
localStorage.setItem('name', 'Zak');

//to delete the data/key from local storage
localStorage.removeItem('name');

// to get data from local storage
console.log(localStorage.getItem('name'));

//session storage - can be expired.
//local storage - will expired

//clear the complete local storage
localStorage.clear();

/*
!TASK
  add a text box and a button in the HTML
  when you click on the button it should save the data of
  text box in the local storage
  list data from local storage 
  each time when you click on the save button it should 
  save the text box data in the local storage without replacing
  the previous data.
*/
const date = new Date();
console.log(date);

//String Methods
//we can write string in three different ways in JS
let string = "This is\\\" a string";
let string1 = 'Thisis it\'s a string';

let string2 = `This is ${string1} nex string`

console.log(string);
console.log(string1);

//slice(startIndex, endIndex) - endIndex is exlusive 

//substring()
//substr()
console.log(string1.slice(1, 5));
//if we give negative values it will start from end.

console.log(string1.slice(-5, -1));

//substring(startIndex, endIndex) - endIndex is exlusive 
//- similar to the slice but doesn't accept negative values
//negative values will be treated as 0
console.log(string1.substring(-1, 5));
//substr(startIndex, numberOfCharacter);
console.log(string1.substr(2, 2));//extracting 2 characters starting from 2nd index
console.log(string1.toUpperCase());//conver string to upper case
console.log(string1.toLowerCase());//convert string to lower case
console.log(string1.charAt(3));//return character at specific index
console.log(string1.replace('s', 'm'));//
//which property 
//trim() remove space before and after the string
let value = "         value   \n      value1        ";
console.log(value.trim());
console.log(string1)
let data = "This is string";
console.log(data.split(' '));

let array = ['value1', 'value2', 'value3'];

array.splice(1, 2, 'New Value');
console.log(array);
/*
create a method which will be taking two parameters (string, index, num)
    it will extract character that you pass as argument to the num parameter strating from the index you are passing;
*/

// Math
/*
two text boxes and a button
when you click on the button it should alert a random value  in the range between the values you typed in the text boxes
*/
