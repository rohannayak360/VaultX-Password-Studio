function updateSecurityChecklist(password){

    const checks = {

        uppercase:
            /[A-Z]/.test(password),

        lowercase:
            /[a-z]/.test(password),

        numbers:
            /[0-9]/.test(password),

        symbols:
            /[!@#$%^&*]/.test(password),

        length:
            password.length >= 12

    };

    document.getElementById(
        "check-uppercase"
    ).innerHTML =
        checks.uppercase ?
        "✅ Uppercase" :
        "❌ Uppercase";

    document.getElementById(
        "check-lowercase"
    ).innerHTML =
        checks.lowercase ?
        "✅ Lowercase" :
        "❌ Lowercase";

    document.getElementById(
        "check-numbers"
    ).innerHTML =
        checks.numbers ?
        "✅ Numbers" :
        "❌ Numbers";

    document.getElementById(
        "check-symbols"
    ).innerHTML =
        checks.symbols ?
        "✅ Symbols" :
        "❌ Symbols";

    document.getElementById(
        "check-length"
    ).innerHTML =
        checks.length ?
        "✅ 12+ Characters" :
        "❌ 12+ Characters";
}