//DOM - Document Object Model
//Objective

/* Explore the key concept
How to access HTML elements
How to manipulate HTML elements

*/

//1- Accessing the HTML elements by ID getElementById (camel casing)

//Get Elements by ID
/*
//Get elements by Tag Name
document.getElementsByTagName('p');
const paragraphs = document.getElementsByTagName('p')[1];
console.log(paragraphs);

//Get elements by class name
const h2 = document.getElementByClassName('headingTwo')

//How to list all elements


for (let i = o; i <= h2.length; i++); {

    console.log(h2[i]);
}

//TASK
/* Create a heading in HTML with id, Three paragraph, a h2, h3 wiht the same classes.
Change the text of h1 to 'JavaScript DOM'.
Also, change the text of h2, h3 to 'Text changed using JS'
Change the text of all three paragraphs to whatever you want.*/

/*
document.getElementById("firstHeading").innerHTML = "JavaScript DOM";

const h1 = document.getElementById("firstHeading").innerHTML = "JavaScript DOM";
console.log(h1);




document.getElementsByClassName('subHeading').innerHTML = "Text changed using JS";

const h2 = document.getElementsByClassName('subHeading').innerHTML = "Text changed using JS";
console.log(h2);



document.getElementsByTagName('p').innerHTML = "Good Bye";

const p = document.getElementsByTagName('p'[0]).innerHTML = "Good Bye";

console.log(p);



//Styling HTML Elements 

h1.style.color = "orange";
h2.style.cssText = "color:orange;background-color:green";


//Change colour of list items

const listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = 'Blue';
}

console.clear();
//Create a new elemenr and add it to the document
const ul = document.querySelector('ul');
console.log(ul);

*/

//TASK:
//add a div in the HTML
//Add a h1 an text to the h1 using JS
//Change font size and background colour to whatever yo want.

// Step 1: Create a new <div> element
const newDiv = document.createElement("div");

// Step 2: Create a new <h1> element
const newH1 = document.createElement("h1");



// Step 3: Add text to the <h1>
newH1.textContent = "This is an H1 heading";


// Step 4: Change font size and background color
newH1.style.fontSize = "80px"; // Set the font size to 24 pixels
newDiv.style.backgroundColor = "red"; // Set the background color to light blue

// Step 5: Append the <h1> to the <div>
newDiv.appendChild(newH1);

// Step 6: Append the <div> to the document (e.g., the body)
document.body.appendChild(newDiv);








