// Crack time logic

function estimateCrackTime(password){

    let length =
        password.length;

    if(length < 8)
        return "2 Minutes";

    if(length < 12)
        return "6 Months";

    if(length < 16)
        return "120 Years";

    return "12 Million Years";
}