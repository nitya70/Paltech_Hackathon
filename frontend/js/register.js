const API =
    "http://localhost:8080/api/auth/register";

async function register(){

    const userData = {

        name:
            document.getElementById("name").value,

        email:
            document.getElementById("email").value,

        password:
            document.getElementById("password").value,

        role:
            document.getElementById("role").value
    };

    const response = await fetch(API, {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(userData)
    });

    if(response.ok){

        alert("Registration Successful");

        window.location.href = "login.html";

    } else {

        const msg = await response.text();

        alert(msg);
    }
}