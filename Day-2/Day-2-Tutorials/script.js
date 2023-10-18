// What is DOM? Anh
    // Document Object Model - 
// How to select an element using it's Id? Cameron
    // getElementById();
// How can we select an element using it's class name? Saharah
    // getElementsByClassName();
// how can we select an element using tag? Idrees
    //document.getElementsByTagName("tagName")[index]
// how can we change text of a HTML element? Walid
    // element.innerText='';
// what is difference between querySelector() and querySelectorAll() methods? Katariina
    //querySelector is used for getting a single element. The querySelectorAll is used for selecting multiple elements e.g ('div, h1, p')
// how can we create a new element? Seyedeh
    //createElement();
// how can we remove an element? Andrei
    // document.getElementById('p1').remove();
// how can we add class to a html element? Paul
    //document.getElementById('p1').classList.add('paragraph');
// how can we remove a class from a html element? Rebecca
    //document.getElementById('p1').classList.remove('paragraph');
// how can we add an attribute to a html element? Maria
    //document.getElementById('p1').setAttribute('id','firstParagraph')
// how can we remove an attribute of a html element? Max
    //document.getElementById('p1').removeAttribute('id')
// document.getElementById('p1').textContent="This is            paragraph ";
// document.getElementById('p1').innerText="This is            paragraph";

///////////////////////////////////////////////////////////

// Lesson Objectives
// Explain how to attach event to a html element
// How to manipulate HTML element while an event is occuring

//addEventListener('event',the code to be executed while an event is occuring); attached event to html elements

const hideButton=document.getElementById('hideButton');
const paragraph=document.getElementById('p1');
hideButton.addEventListener('click', function hideText(){

    if(paragraph.style.display=='none')
    {
        paragraph.style.display='block';
    }
    else{
        paragraph.style.display='none';
    }

})

let greeting=()=>{
    alert("Hello, How are you?");
}

const clickButton=document.getElementById('btn');
// Be sure to remember to leave off the brackets at the end of the function when inside an event listener
clickButton.addEventListener('click', greeting);
// !Task
/*
have a div in the html page
when you hover on the div, it should change it background colour to red and text to 'Go away!'
change the height and width of the div as well when you hover over the div
*/


const hide=document.getElementById('hide');
hide.addEventListener('click', hideText);


function hideText(){
    document.getElementById('p2').innerHTML="<h1>New Paragraph </h1>"
}

//to get the text from form input element we use the value property