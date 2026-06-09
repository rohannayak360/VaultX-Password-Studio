// LocalStorage handling

function saveHistory(password){

    let history =
        JSON.parse(
            localStorage.getItem(
                "vaultxHistory"
            )
        ) || [];

    history.unshift(password);

    history =
        history.slice(0,5);

    localStorage.setItem(
        "vaultxHistory",
        JSON.stringify(history)
    );

    renderHistory();
}

function renderHistory(){

    const container =
        document.getElementById(
            "historyList"
        );

    let history =
        JSON.parse(
            localStorage.getItem(
                "vaultxHistory"
            )
        ) || [];

    container.innerHTML = "";

    history.forEach(password=>{

        container.innerHTML +=
        `
        <div class="history-item">
            ${password}
        </div>
        `;
    });
}