// Main controller

document.addEventListener(
"DOMContentLoaded",
()=>{

    renderHistory();

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

});