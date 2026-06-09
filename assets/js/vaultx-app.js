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