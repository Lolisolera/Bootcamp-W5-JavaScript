

/*
function greeting() {

    console.log("How are you?");
    count++;
    if (count == 0) {
        clearInterval(interval);
    }
}

let timeOut = setTimeout(greeting, 3000);
clearTimeout(timeOut);


let three = setTimeout(greeting, 3000);
let five = setTimeout(greeting, 5000);
clearTimeout(three);


//SetInterval()
//call a block of code repeatedly after some tie delay

setInterval(greeting, 3000, "All");

let Interval = setInterval(greeting, 3000, "All");


*/

//TASK 1:
//create a funtion will be called 10 times.
//after 10, time stop calling the method and display a message the 'calling of function is cancelled'.
/*
//SOLUTION:

let myNum = 0;

function myFunction() {
    if (myNum < 10) {
        myNum++;
        console.log(`${myNum}`);

        if (myNum === 10) {
            console.log("Calling of function is cancelled");
            clearInterval(timer);
        }
    }
}

timer = setInterval(myFunction, 1000);


//TASK 2:
//have another function and once the first function is called 10 times,
//stop calling the first function and call the second function 10 time.
/*
let functioncall = 0; // Initialize a counter to keep track of the function calls


function firstFunction() {
    if (fnum < 10) {
        fnum++;
        console.log(`Calling First Function - ${fnum}`);
        // Replace this with the actual code you want to execute for the first function

        if (fnum === 10) {
            console.log("Calling of the first function is cancelled");
            clearInterval(timer);
            fnum = 0; // Reset the counter
            timer = setInterval(secondFunction, 1000); // Switch to the second function
        }
    }
}


function secondFunction() {
    if (myNum < 10) {
        myNum++;
        console.log(`Calling Second Function - Call number ${myNum}`);

        if (myNum === 10) {
            console.log("Calling of the second function is cancelled");
            clearInterval(timer);
        }
    }
}

timer = setInterval(firstFunction, 1000);


*/
/*
//DATE in JS:
let date = new Date();
console.log(date);
let date = new Date(year, moth, day, hour, minues, seconds, millisecontheds);

//the first two we should pass

let date1 = new Date(2023, 10, 19);

console.log(date1);

//months start from zero, so 11 is December

let date2 = new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' });

console.log(date2);

//local date
let localDate = date.toLocalDateString('en-uk', { month: 'numeric' });
console.log(localDate);
console.log(date.getDate());

*/

//TASK 3:
//Find out your birthday

function showMyBirthday() {
    const birthdate = new Date('1971-01-21');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = birthdate.toLocaleDateString('en-uk', options);

    alert("My Birthday is on: " + formattedDate);
}

//TASK4
//Create live watch (the seconds, minutes, hours to be changing). 

function updateWatch() {
    const clock = document.getElementById('watch');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    clock.textContent = timeString;
}

// Call the updateClock function every second (1000 milliseconds)
setInterval(updateWatch, 1000);

// Update the clock immediately upon page load
updateWatch();

