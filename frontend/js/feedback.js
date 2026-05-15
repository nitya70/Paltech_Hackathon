const API =
    "http://localhost:8080/api/feedback";

async function loadFeedback(){

    const response = await fetch(API);

    const data = await response.json();

    const table =
        document.getElementById("feedbackTable");

    table.innerHTML = `

        <tr>
            <th>Candidate</th>
            <th>Communication</th>
            <th>Technical</th>
            <th>Problem Solving</th>
            <th>Recommendation</th>
            <th>Comments</th>
        </tr>
    `;

    data.forEach(feedback => {

        table.innerHTML += `

            <tr>
                <td>${feedback.candidate}</td>
                <td>${feedback.communication}</td>
                <td>${feedback.technical}</td>
                <td>${feedback.problemSolving}</td>
                <td>${feedback.recommendation}</td>
                <td>${feedback.comments}</td>
            </tr>
        `;
    });
}

loadFeedback();