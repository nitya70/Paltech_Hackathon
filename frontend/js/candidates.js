const API = "http://localhost:8080/api/candidates";

async function addCandidate(){

    const candidateData = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        role: document.getElementById("role").value,

        status: document.getElementById("status").value
    };

    const response = await fetch(API, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(candidateData)
    });

    if(response.ok){

        alert("Candidate Added Successfully");

        loadCandidates();

    } else {

        alert("Failed To Add Candidate");
    }
}

async function loadCandidates(){

    const response = await fetch(API);

    const data = await response.json();

    const table = document.getElementById("candidateTable");

    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <td>
   <button onclick="moveStage('${candidate.id}')">
      Next Stage
   </button>
</td>
        </tr>
    `;

    data.forEach(candidate => {

        table.innerHTML += `
            <tr>
                <td>${candidate.name}</td>
                <td>${candidate.email}</td>
                <td>${candidate.role}</td>
                <td>${candidate.status}</td>
            </tr>
        `;
    });
}

loadCandidates();