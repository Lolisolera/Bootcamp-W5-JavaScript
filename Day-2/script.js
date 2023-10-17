//Lesson Objectives
//Explain how to attach event to html eleents
//how to manipulate html elements while an event is occurring?

//addeventlistener. Attachs event to html elements.


/*
//TASK 1
//Add a div in the html
//When you hover on the div, it should change its background colour to red
//and text to "Go away!"
//Change the height, width of the div as well when you hover over the div.

const div = document.getElementById("hover-div");

div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "red";
    div.innerText = "Go away!";
    div.style.width = "300px";
    div.style.height = "150px";
});

div.addEventListener("mouseout", function () {
    div.style.backgroundColor = "green";
    div.innerText = "Hover over me!";
    div.style.width = "200px";
    div.style.height = "100px";
});

/*

const div = document.getElementById("hover-div");
let isToggled = false;

div.addEventListener("mouseenter", function () {
    if (!isToggled) {
        div.style.backgroundColor = "red";
        div.innerText = "Go away!";
        div.style.width = "300px";
        div.style.height = "150px";
        isToggled = true;
    } else {
        div.style.backgroundColor = "green";
        div.innerText = "Hover over me!";
        div.style.width = "200px";
        div.style.height = "100px";
        isToggled = false;
    }
});

*/


//TASK 2

//Have a p,two text boxes, one for first name and last name.
//When you click on the buttons it should change the p text to your full name.


document.addEventListener("DOMContentLoaded", function () {
    const fullNameParagraph = document.getElementById("fullName");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const showFullNameButton = document.getElementById("showFullName");

    showFullNameButton.addEventListener("click", function () {
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;

        if (firstName && lastName) {
            fullNameParagraph.innerHTML = "Your full name is: " + firstName + " " + lastName;
        } else {
            fullNameParagraph.innerHTML = "Please enter both first name and last name.";
        }
    });
});


