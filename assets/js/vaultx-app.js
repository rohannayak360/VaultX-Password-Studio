// Main controller

document.addEventListener(
"DOMContentLoaded",
()=>{

    renderHistory();

    loadRandomTip();

    const generateBtn =
        document.getElementById(
            "generateBtn"
        );

    const copyBtn =
        document.getElementById(
            "copyBtn"
        );

    const toast =
        document.querySelector(
            ".toast"
        );

    copyBtn?.addEventListener(
    "click",
    ()=>{

        navigator.clipboard.writeText(

            document.getElementById(
                "passwordOutput"
            ).value

        );

        toast.style.display = "block";

        addActivityLog(
            "Password Copied"
        );

        setTimeout(()=>{

            toast.style.display =
                "none";

        },2000);

    });

    const slider =
        document.getElementById(
            "lengthSlider"
        );

    const lengthValue =
        document.getElementById(
            "lengthValue"
        );

    slider.addEventListener(
    "input",
    ()=>{

        lengthValue.textContent =
            slider.value;

    });

    generateBtn.addEventListener(
    "click",
    ()=>{

        const password =
            generatePassword();

        updateStrength(password);

        document.getElementById(
            "crackTime"
        ).textContent =
            estimateCrackTime(password);

        saveHistory(password);

        addActivityLog(
            "Password Generated"
        );

        updateSecurityChecklist(
            password
        );

        updateBreachStatus(
            password
        );

    });

    const breachBtn =
    document.getElementById(
        "checkBreachBtn"
    );

    const breachInput =
    document.getElementById(
        "breachInput"
    );

    breachBtn?.addEventListener(
    "click",
    ()=>{

        updateBreachStatus(
            breachInput.value
        );

    });

});