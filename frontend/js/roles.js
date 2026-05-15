const API = "http://localhost:8080/api/roles";

async function addRole() {

    const roleData = {

        title: document.getElementById("title").value,

        description: document.getElementById("description").value,

        status: document.getElementById("status").value
    };

    const response = await fetch(API, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(roleData)
    });

    if(response.ok){

        alert("Role Added Successfully");

        loadRoles();

    } else {

        alert("Failed To Add Role");
    }
}

async function loadRoles(){

    const response = await fetch(API);

    const data = await response.json();

    const table = document.getElementById("rolesTable");

    table.innerHTML = `
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
        </tr>
    `;

    data.forEach(role => {

        table.innerHTML += `
            <tr>
                <td>${role.title}</td>
                <td>${role.description}</td>
                <td>${role.status}</td>
            </tr>
        `;
    });
}

loadRoles();