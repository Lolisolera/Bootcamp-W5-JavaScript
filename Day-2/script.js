//Lesson Objectives
//Explain how to attach event to html eleents
//how to manipulate html elements while an event is occurring?

//addeventlistener. Attachs event to html elements.



//TASK
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
