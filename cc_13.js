//Task 2: Adding Employee Cards Dynamically
const emContainerByID = document.getElementById("employeeContainer"); //pull the document by its ID
const emContainerByQuery = document.querySelector('#employeeContainer');  //pull the document by the query's first instance

    //Function that creates an employee card
function createEmployeeCard(name, position){
const employeeCard = document.createElement('div'); //create a new element to represent the employee card that would be stored in the div container
employeeCard.setAttribute('class', 'employee-card'); //set the class of the new element as employee card
employeeCard.setAttribute('id', 'employeeCard'); //set the id of the new element as employee card

    //updates the text for the card with the name and position plugged in when function called
employeeCard.innerHTML = `
    <h3>Employee Name: ${name} </h3>
    <p>Employee Position: ${position}</p>
    <button class = "remove-employee">Remove Employee</button>
`; 
    //create remove button that removed the employee card when pressed
const removeEmployeeButton = employeeCard.querySelector('.remove-employee'); //pull the remove employee button by its ID remove-employee

removeEmployeeButton.addEventListener('click', () => {
    emContainerByID.removeChild(employeeCard);
});

emContainerByID.appendChild(employeeCard);} //add element employee card to the dashboard and the employeeContainer 


    //Testing the function
createEmployeeCard("Emma Dole", "Sales Representative")
createEmployeeCard("John Spear", "Accountant")
createEmployeeCard("Jake Little", "Financial Manager")


