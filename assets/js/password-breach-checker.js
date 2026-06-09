// Breach detection

let breachedPasswords = [];

fetch("data/breached-passwords.json")
.then(response => response.json())
.then(data => {

    breachedPasswords = data;

});

function checkPasswordBreach(password){

    return breachedPasswords.includes(
        password.toLowerCase()
    );
}

function updateBreachStatus(password){

    const result =
        document.getElementById(
            "breachResult"
        );

    const breached =
        checkPasswordBreach(password);

    if(breached){

        result.innerHTML =
        "⚠ Password Found In Breach Database";

        result.className =
        "breach-danger";

    }else{

        result.innerHTML =
        "✓ No Known Breach Found";

        result.className =
        "breach-safe";
    }
}