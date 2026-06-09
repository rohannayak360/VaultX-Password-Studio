// Tips rotation

const securityTips = [

"Use a unique password for every account.",

"Enable two-factor authentication.",

"Never reuse banking passwords.",

"Avoid personal information in passwords.",

"Store passwords in a password manager.",

"Change compromised passwords immediately."

];

function loadRandomTip(){

    const tipElement =
        document.getElementById(
            "tipText"
        );

    const randomIndex =
        Math.floor(
            Math.random() *
            securityTips.length
        );

    tipElement.textContent =
        securityTips[randomIndex];
}