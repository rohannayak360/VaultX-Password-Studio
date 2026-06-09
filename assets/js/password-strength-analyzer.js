// Strength calculations

function calculateStrength(password){

    let score = 0;

    if(password.length >= 8)
        score += 20;

    if(password.length >= 12)
        score += 20;

    if(/[A-Z]/.test(password))
        score += 20;

    if(/[0-9]/.test(password))
        score += 20;

    if(/[!@#$%^&*]/.test(password))
        score += 20;

    return score;
}

function updateStrength(password){

    const score =
        calculateStrength(password);

    const strengthFill =
        document.querySelector(
            ".strength-fill"
        );

    const strengthText =
        document.querySelector(
            ".strength-card h3"
        );

    strengthFill.style.width =
        score + "%";

    if(score < 40){

        strengthText.textContent =
            "Weak";

    }

    else if(score < 70){

        strengthText.textContent =
            "Medium";

    }

    else if(score < 90){

        strengthText.textContent =
            "Strong";

    }

    else{

        strengthText.textContent =
            "Military Grade";

    }

    const entropy =
        calculateEntropy(password);

    document.querySelector(
        ".metrics"
    ).innerHTML =
    `
    <div>
    Entropy: ${entropy}
    </div>

    <div>
    Score: ${score}%
    </div>
    `;
}

function calculateEntropy(password){

    const charset = 94;

    return Math.round(
        password.length *
        Math.log2(charset)
    );
}