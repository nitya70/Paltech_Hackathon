const API = "http://localhost:8080/api/interviews";

async function scheduleInterview(){

    const interviewData = {

        candidate:
            document.getElementById("candidate").value,

        interviewerEmail:
            document.getElementById("interviewer").value,

        round:
            document.getElementById("round").value,

        date:
            document.getElementById("date").value,

        status:"SCHEDULED"
    };

    const response = await fetch(API, {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(interviewData)
    });

    if(response.ok){

        alert("Interview Scheduled");

        loadInterviews();

    } else {

        alert("Failed");
    }
}

async function loadInterviews(){

    const response = await fetch(API);

    const data = await response.json();

    const table =
        document.getElementById("interviewTable");

    table.innerHTML = `

        <tr>
            <th>Candidate</th>
            <th>Interviewer</th>
            <th>Round</th>
            <th>Date</th>
            <th>Status</th>
        </tr>
    `;

    data.forEach(interview => {

        table.innerHTML += `

            <tr>
                <td>${interview.candidate}</td>
                <td>${interview.interviewerEmail}</td>
                <td>${interview.round}</td>
                <td>${interview.date}</td>
                <td>${interview.status}</td>
            </tr>
        `;
    });
}

loadInterviews();