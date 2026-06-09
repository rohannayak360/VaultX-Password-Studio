function addActivityLog(message){

    const container =
        document.getElementById(
            "activityLog"
        );

    const activity =
        document.createElement("div");

    activity.className =
        "activity-item";

    activity.innerHTML =
        `
        ${message}
        <span>
            ${new Date().toLocaleTimeString()}
        </span>
        `;

    container.prepend(activity);
}