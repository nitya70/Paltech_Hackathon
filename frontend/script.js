const API = "http://localhost:8080/api/auth";

async function register() {

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch("http://localhost:8080/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if(response.ok){
            alert("Registration Successful!");
            window.location.href = "login.html";
        } else {
            alert("Registration Failed");
        }

    } catch(error){
        console.log(error);
        alert("Server Error");
    }
}
async function login(){
    const data = {
        email: document.getElementById("loginEmail").value,
        password: document.getElementById("loginPassword").value
    };

    const res = await fetch(API + "/login", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(data)
    });

    const result = await res.text();
    alert(result);
}