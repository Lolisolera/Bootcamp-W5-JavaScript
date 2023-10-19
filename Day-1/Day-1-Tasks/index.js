

//TASK 1
/* Create a heading in HTML with id, Three paragraph, a h2, h3 with the same classes.
Change the text of h1 to 'JavaScript DOM'.
Also, change the text of h2, h3 to 'Text changed using JS'
Change the text of all three paragraphs to whatever you want.


//SOLUTION:
document.getElementById("firstHeading").innerHTML = "JavaScript DOM";

const h1 = document.getElementById("firstHeading").innerHTML = "JavaScript DOM";
console.log(h1);


document.getElementsByClassName('subHeading').innerHTML = "Text changed using JS";

const h2 = document.getElementsByClassName('subHeading').innerHTML = "Text changed using JS";
console.log(h2);



document.getElementsByTagName('p').innerHTML = "Good Bye";

const p = document.getElementsByTagName('p'[0]).innerHTML = "Good Bye";

console.log(p);

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
newH1.innerHTML = "I'm creating this heading with JS";

// Step 4: Change font size and background color
newH1.style.fontSize = "80px"; // Set the font size to 80 pixels
newDiv.style.backgroundColor = "red"; // Set the background color to red

// Step 5: Append the <h1> to the <div>
newDiv.appendChild(newH1);

// Step 6: Append the <div> to the document (e.g., the body)
document.body.appendChild(newDiv);



//PRACTICE:

document.createElement("div");
const secondNewDiv = document.createElement("div");
document.createElement("p");
const newP = document.createElement("p");
newP.innerHTML = "This is my new paragraph creating with JS";
newP.style.fontsize = "100px";
newP.style.backgroundColor = "purple";

//// Append the new p element to the second new div element:
secondNewDiv.appendChild(newP);

//Append the new div element to the document's body (or any other element you want to append it to)
document.body.appendChild(secondNewDiv);




