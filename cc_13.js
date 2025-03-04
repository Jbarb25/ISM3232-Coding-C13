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
    <h3 class= "employee-name">Employee Name: ${name} </h3>
    <p class= "employee-position"> Employee Position: ${position}</p>
    <button class = "remove-employee">Remove Employee</button>
    <button class = "edit-employee">Edit</button>
`; 
    //create remove button that removed the employee card when pressed
const removeEmployeeButton = employeeCard.querySelector('.remove-employee'); //pull the remove employee button by its ID remove-employee


removeEmployeeButton.addEventListener('click', (event) => {
      //Task 4: The following two lines involve task 4
    event.stopPropagation(); //clicking the removal button will not print the "employee section clicked" message
    emContainerByID.removeChild(employeeCard); //remove the selected employee card
});

emContainerByID.appendChild(employeeCard); //add element employee card to the dashboard and the employeeContainer



//Task 5: Additional Challenge - Inline Editing of Employee Details
const editButton = employeeCard.querySelector('.edit-employee'); //create edit button that will edit the employee info
editButton.addEventListener('click', (event) => {
    event.stopPropagation(); //stop it from bubbling to the employeeCard container
    editEmployeeCard(employeeCard);});

employeeCard.addEventListener('dblclick', (event) => { //when employee card is double clicked, you may edit the employee info
    event.stopPropagation();
    editEmployeeCard(employeeCard);});

function editEmployeeCard(employeeCard){  //for the edit employee command, do the following to the employee card info
    const nameElement = employeeCard.querySelector('.employee-name'); //establish name element from the card
    const positionElement = employeeCard.querySelector('.employee-position'); //establish position element from the card

    const nameInput = document.createElement('input'); //make it so that name can be recognized as an input
    nameInput.value = nameElement.innerText.replace('Employee Name: ', ''); //replace the inner text of the card 
    const positionInput = document.createElement('input'); //make it so that position can be recognized as an input
    positionInput.value = positionElement.innerText.replace('Employee Position: ', ''); //replace the inner text of the card

    const saveButton = document.createElement('button'); //establish a save button to exit out of edit mode
    saveButton.innerText = 'Save'; //save button is labeled as save

    nameElement.innerHTML= ''; //allow the name element to be printed to the browser using the input
    positionElement.innerHTML= ''; //allow the position element to be printed to the browser using the input
    nameElement.appendChild(nameInput); //link the edited input to the printed element
    positionElement.appendChild(positionInput); //link the edited input to the printed element

    employeeCard.appendChild(saveButton); //link the save button to the employee card

    saveButton.addEventListener('click', () => {  //when the save button is clicked, do the following
        nameElement.innerHTML = `Employee Name: ${nameInput.value}`; //print the edited name element such as
        positionElement.innerHTML = `Employee Position: ${positionInput.value}`; //print the edited position element such as

        saveButton.remove(); //once the button is clicked, the button will disappear from the browser

        const editButton = employeeCard.querySelector('.edit-employee'); //the edit button will reappear as an option again
        editButton.innerText = 'Edit';});}} //edit button labeled as edit


    //Testing the functions
createEmployeeCard("Emma Dole", "Sales Representative")
createEmployeeCard("John Spear", "Accountant")
createEmployeeCard("Jake Little", "Financial Manager")



//Task 3: Converting NodeLists to Arrays for Bulk Updates
const nodeList = document.querySelectorAll('.employee-card'); //create an element that stores all queries associated with -card
const arrayOfNodes = Array.from(nodeList); //for the items in the nodelist element, convert to an array
arrayOfNodes.forEach( item => {  //for every item in the array of nodes, do the following
        item.style.color = "#800000";  //change the text color to maroon in the printed html file
        item.style.fontFamily = 'Courier'}); //change the text font to courier in the printed html file




//Task 4: Implementing Remove of Employee Cards with Event Bubbling
   //Refer to task 2 for removing a parent employee card using removeChild  
   //Refer to task 2 for stoping propagation building off of the following
    const employeeSec = document.getElementById('employeeContainer'); //pull the parent container for the customer section by the id
    
    employeeSec.addEventListener('click', () => { 
        console.log(`Employee Section clicked`);});  //add an event listner so that when the employee section is clicked, it logs the message



//Task 5: Additional Challenge - Inline Editing of Employee Details
  //Refer to task 2 for the functions and variables created to make it so you can save and edit the text in the browser
        