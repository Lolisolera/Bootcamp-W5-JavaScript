
/*
have a button, two text boxes and a table in html
when you click on the button it should add the text boxes data to the table.
*/

const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const addButton = document.getElementById('addButton');
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

addButton.addEventListener('click', function () {
    const name = nameInput.value;
    const age = ageInput.value;

    if (name && age) {
        const newRow = dataTable.insertRow(dataTable.rows.length);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);

        cell1.innerHTML = name;
        cell2.innerHTML = age;

        // Clear the input fields after adding to the table
        nameInput.value = '';
        ageInput.value = '';
    }
});





