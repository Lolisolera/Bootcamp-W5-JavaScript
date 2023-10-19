//Learning Objectives
    // Exploring setInterval() and setTimeout() methods
    // Working with date 
    // Executing block of code repeatedly 


//What is local storage? Kriyes
    //
//Which metho is used to store an item in the localStorage? Saharah
    //setItem('key','data');
// Which method is used to get an item from the localStorage? Clara
    //getItem('key');
//remove an item at name key location from localStorage? Oluwaseun
    //removeItem('key');
//Which method will remove all the items from local storage? Jayman
    //clear();


//     //setTimeout() - execute a block of a code once after some time delay.
//     //clearTimeout();
//     let count=0;
// function greeting(name)
// {
//     console.log(`Hello, How are you ${name}?`);
//     count++;
//     if(count==3)
//     {
//         clearInterval(interval);
//     }
// }
// let three=setTimeout(greeting, 3000,'Bootcamp');
// let five=setTimeout(greeting, 5000,'All');


// //setInterval()
// //call a block of code repeatedly after some time delay
// //clearInterval()

// let interval=setInterval(greeting, 3000, 'All');


//create a funtion will be called 10 time
//after 10 time stop calling the method and display a message the 'calling of function is cancelled'.

//Date in JS
let date=new Date();
console.log(date);
// let date1=new Date(year, month, day, hour, minutes, seconds, millisecond);
// the first two we should pass
let date1= new Date(2023, 0, 19);
console.log(date1);
// month start from zero

let date2=new Date().toLocaleString('en-US',{timeZone:"Asia/Seoul"});
console.log(date2);

//toLocalDateString();

let localDate=date.toLocaleDateString('en-us',{month:'long', day:'2-digit', year:'numeric', weekday:'long'});
console.log(localDate);

console.log(date.getDate());//19 //day of the month
console.log(date.getDay());//4 //day of the week
console.log(date.getMonth()); //9
console.log(date.getFullYear())//2023
console.log(date.getHours());
console.log(date.getSeconds());
console.log(date.getTime());//return current time in milli second


// date.setMonth(11);
// date.setFullYear(2025);
// console.log(date);
//find out your birth day

//! Thursday, 19th of October 2023
let dayName=date.toLocaleDateString('en-us',{weekday:'long'});
let monthName=date.toLocaleDateString('en-us',{month:'long'});
console.log(`${dayName}, ${date.getDate()}th of ${monthName} ${date.getFullYear()}`);

//! Create live watch (the seconds, minutes, hours to be changing)
// simple timer with start and stop buttons, the start button should start the timer and when you click on the stop button, the timmer should stop and set to 00.




