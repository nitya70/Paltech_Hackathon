const API = `http://localhost:8080/api/interviews/interviewer/${email}`;
const email = localStorage.getItem("userEmail");


async function loadAssignedInterviews(){

    const response = await fetch( `http://localhost:8080/api/interviews/interviewer/${email}`);

    const data = await response.json();

    const table = document.getElementById("assignedTable");

    table.innerHTML = `
        <tr>
            <th>Candidate</th>
            <th>Interviewer</th>
            <th>Round</th>
            <th>Date</th>
        </tr>
    `;

    data.forEach(interview => {

        table.innerHTML += `
            <tr>
                <td>${interview.candidate}</td>
                <td>${interview.interviewer}</td>
                <td>${interview.round}</td>
                <td>${interview.date}</td>
            </tr>
        `;
    });
}

loadAssignedInterviews();