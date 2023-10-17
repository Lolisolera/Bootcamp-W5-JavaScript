const button=document.getElementById('btnClick');
const text=document.getElementById('txtName');

button.addEventListener('click', getValue);

function getValue(){
    document.getElementById('p1').innerText=text.value;
}

// 'Hello, How are you Zak?'
/*
have a p, two text box for first name and last name and a save button
when you click on the button it should change the p text to
your full name.
*/
/*
have a button, two text boxes and a table in html
when you click on the button it should add the text boxes data to the table.
*/

// 
const swap=document.getElementById('btnSwap');


swap.addEventListener('click', swapPictures)
function swapPictures(){
    const firstPic=document.getElementById('firstPic').src;
const secondPic=document.getElementById('secondPic').src;
    document.getElementById('firstPic').src=secondPic;
    document.getElementById('secondPic').src=firstPic;
}