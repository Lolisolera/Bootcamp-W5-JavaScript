
//TASK 1:
//create a funtion will be called 10 times.
//after 10, time stop calling the method and display a message the 'calling of function is cancelled'.

//SOLUTION:
/*
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

*/

//TASK 2:
//have another function and once the first function is called 10 times,
//stop calling the first function and call the second function 10 time.

//SOLUTION:

let series1 = 0;
let series2 = 0;
let timer;

function function1() {
    if (1 < 10) {
        series1++;
        console.log(`Function 1 - number ${series1}`);

        if (series1 === 10) {
            console.log("Calling of function 1 is cancelled");
            clearInterval(timer);
            series1 = 0;
            timer = setInterval(function2, 1000);
        }
    }
}

function function2() {
    if (series2 < 10) {
        series2++;
        console.log(`Function 2 - number ${series2}`);

        if (series2 === 10) {
            console.log("Calling of function 2 is cancelled");
            clearInterval(timer);
        }
    }
}

timer = setInterval(function1, 1000);



//TASK 3:
//Find out your birthday

//SOLUTION:

function showMyBirthday() {
    const birthdate = new Date('1971-01-21');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const generatedDate = birthdate.toLocaleDateString('en-uk', options);

    alert("My Birthday is on: " + generatedDate);
}

//TASK4
//Create live watch (the seconds, minutes, hours to be changing). 

//SOLUTION:

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

