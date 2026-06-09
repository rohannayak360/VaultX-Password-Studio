// Generate passwords

function generatePassword() {

    const uppercase =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const lowercase =
        "abcdefghijklmnopqrstuvwxyz";

    const numbers =
        "0123456789";

    const symbols =
        "!@#$%^&*()_+[]{}<>?";

    let characters = "";

    const length =
        document.getElementById("lengthSlider").value;

    const upper =
        document.getElementById("uppercase").checked;

    const lower =
        document.getElementById("lowercase").checked;

    const number =
        document.getElementById("numbers").checked;

    const symbol =
        document.getElementById("symbols").checked;

    const mode =
    document.getElementById(
        "passwordMode"
    ).value;

    if (upper) characters += uppercase;
    if (lower) characters += lowercase;
    if (number) characters += numbers;
    if (symbol) characters += symbols;

    if(mode === "banking"){

        characters +=
        "!@#$%^&*()";

    }

    if(mode === "gaming"){

        characters +=
        "GHOSTHUNTER";

    }

    let password = "";

    for(let i=0;i<length;i++){

        const randomIndex =
            Math.floor(
                Math.random() * characters.length
            );

        password +=
            characters[randomIndex];
    }

    document.getElementById(
        "passwordOutput"
    ).value = password;

    return password;
}