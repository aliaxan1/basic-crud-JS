
let users = [];
let update = false;

const form = document.getElementById("myForm");
const createBtn =document.getElementById("create-btn");
const tableBody = document.getElementById("userTableBody");

function createUser(name, email) {
    const user = { name, email };
    users.push(user);
}

// Function to display users in the table
function renderUsers() {
    // Clear the existing table rows
    tableBody.innerHTML = "";

    // Iterate through users and create table rows
    users.forEach((user, index) => {
        const row = tableBody.insertRow();

        const nameCell = row.insertCell();
        nameCell.textContent = user.name;

        const emailCell = row.insertCell();
        emailCell.textContent = user.email;

        const actionCell = row.insertCell();
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editUser(index));
        actionCell.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.addEventListener("click", () => deleteUser(index));
        actionCell.appendChild(deleteButton);
    });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    // Empty Field Check
    if(name.length == 0 || email.length == 0){
        alert("Enter Data in Both Fields");
    } else {
        // Create a new user
         createUser(name, email);
    }
    if (update == true) {
        createBtn.innerText='Create';
        update = false;
    }

    // Render users in the table
    renderUsers();

    // Reset the form
    form.reset();
}

// Function to edit a user
function editUser(index) {
    // Get the user by index
    const user = users[index];

    // Set form values
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;

    // Remove the user from the array
    users.splice(index, 1);

    //for changing of update button
    createBtn.innerText='Update';
    update = true;


    // Render users in the table
    renderUsers();
}

// Function to delete a user
function deleteUser(index) {
    // Remove the user from the array
    users.splice(index, 1);

    // Render users in the table
    renderUsers();
}

// Attach event listener to form submit
form.addEventListener("submit", handleSubmit);

