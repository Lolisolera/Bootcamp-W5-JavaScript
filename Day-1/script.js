/*
What is function in JS? Seyedeh
    block of code to perform a specific
What is object in JS? Guuleed
    data type - an entity which can have multiple properties
What is Array? Anh
    multiple value in single variable
What is difference betwee let, var and const while declaring a variable? Clara



*/
var a=10
{
    var a=20
    // a=20
    console.log(`values inside block is ${a}`)
}

console.log(`values ouside block is ${a}`);//10

// DOM - Document Object Model
// Objective
/*
    --Explore the key concept of DOM
    --How to access HTML Elements
    --How to manipulate HTML Elements
*/
console.clear();
// getElementById
const title=document.getElementById('title');
console.log(title);

//getElementByTagName
const paragraphs=document.getElementsByTagName('p')[0];
console.log(paragraphs);

//getElementByClassName
const h2=document.getElementsByClassName('headingTwo');
//how can we list all elements
for(let i=0; i<h2.length; i++)
{
    console.log(h2[i]);   
}

//querySelector()
//selector
const h3=document.querySelector('.heading3')
console.log(h3);
//querySelectorAll()
const multipleElement=document.querySelectorAll('.headingTwo, #title, p')
console.log(multipleElement);

title.innerText="JavaScript Document Object Model"

//!TASK
/*
in HTML page
a h1 with id, three paragraph, a h2, h3 with same classes
change the text of h1 to 'JavaScript DOM'
change the text of h2, h3 to 'Text Changed using JS' 
change the text of all three paragrpahs to whatever you want.
*/
const p=document.getElementsByTagName('p');
for(let i=0; i<p.length; i++)
{
    p[i].innerText='Changed using JS';
}
const headingTitle=document.getElementsByClassName('title');
console.log(headingTitle[0]);
// styling HTML Elements
// title.style.color="Orange";
title.style.cssText="color:Orange; background-color:green; font-size:20px;"
//how can i change text color of all list items
const listItems=document.getElementsByTagName('li');
for(let i=0; i<listItems.length; i++)
{
    listItems[i].style.color='Blue';
}
console.clear();
//create a new element and add it to the document
const ul=document.querySelector('ul');
console.log(ul);
//createElement();
const newListItem=document.createElement('li');

//Add the <li> to the store ul
ul.append(newListItem);

//Add text to the list item
newListItem.innerHTML="<h1>New List Item</h1>"
//textContent
//Add an ID to an element
newListItem.setAttribute('id','fourthItem');

//Remove an attribut from an element
//title.removeAttribute('id');

//Adding class to an element
newListItem.classList.add('newItem')

newListItem.classList.remove('newItem');

//Remove an element
newListItem.remove();
console.log(newListItem);
/*
!TASK
Add a div in the HTML
Add a h1 and text to the h1 using JS inside the div.
Change font size, text and background colour to whatever you want
*/

const div=document.getElementById('div1');
const h1=document.createElement('h1');
h1.innerText="Heading One";
div.appendChild(h1);

