// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('form')
let table = document.querySelector('table')
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
let id = document.getElementById('id').value
console.log(id)
let name = document.getElementById('name').value
console.log(name)
let ext = document.getElementById('extension').value
let email = document.getElementById('email').value
let department = document.getElementById('department').value
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
let row = table.insertRow(1)
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
let cell1 = row.insertCell(0)
let cell2 = row.insertCell(1)
let cell3 = row.insertCell(2)
let cell4 = row.insertCell(3)
let cell5 = row.insertCell(4)
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
let textId = document.createTextNode(id)
cell1.appendChild(textId)
let textName = document.createTextNode(name)
cell2.appendChild(textName)
let textExt = document.createTextNode(ext)
cell3.appendChild(textExt)
let textEmail = document.createTextNode(email)
cell4.appendChild(textEmail)
let textDept = document.createTextNode(department)
cell5.appendChild(textDept)
    // CREATE THE DELETE BUTTON

    // RESET THE FORM
// form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

})

// DELETE EMPLOYEE