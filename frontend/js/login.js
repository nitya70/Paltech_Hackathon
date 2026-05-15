const API =
    "http://localhost:8080/api/auth/login";

async function login(){

    const loginData = {

        email:
            document.getElementById("email").value,

        password:
            document.getElementById("password").value
    };

    const response = await fetch(API, {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(loginData)
    });

    if(response.ok){

    const data = await response.json();

    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("role", data.role);

    alert("Login Successful");

    if(data.role && data.role.toUpperCase() === "COORDINATOR"){

        window.location.href = "coordinator-dashboard.html";

    } else {

        window.location.href = "interviewer-dashboard.html";
    }

}
}