async function loadDashboard(){

    const candidateRes =
        await fetch("http://localhost:8080/api/candidates");

    const candidates =
        await candidateRes.json();

    document.getElementById("candidateCount")
        .innerText = candidates.length;

    const interviewRes =
        await fetch("http://localhost:8080/api/interviews");

    const interviews =
        await interviewRes.json();

    document.getElementById("interviewCount")
        .innerText = interviews.length;

    const feedbackRes =
        await fetch("http://localhost:8080/api/feedback");

    const feedbacks =
        await feedbackRes.json();

    document.getElementById("feedbackCount")
        .innerText = feedbacks.length;
}

loadDashboard();