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

removeEmployeeButton.addEventListener('click', (event) => {
      //Task 4: The following two lines involve task 4
    event.stopPropagation(); //clicking the removal button will not print the "employee section clicked" message
    emContainerByID.removeChild(employeeCard); //remove the selected employee card
});

emContainerByID.appendChild(employeeCard);} //add element employee card to the dashboard and the employeeContainer 


    //Testing the function
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
   //Refer to task 4 for removing a parent employee card using removeChild  
   //Refer to task 4 for stoping propagation building off of the following
    const employeeSec = document.getElementById('employeeContainer'); //pull the parent container for the customer section by the id
    
    employeeSec.addEventListener('click', () => { 
        console.log(`Employee Section clicked`);});  //add an event listner so that when the employee section is clicked, it logs the message

        