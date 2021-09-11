document.addEventListener("keypress", evt => {
    if (evt.code === "KeyA") {
        logMessage(evt.key);
    } else if (evt.code === "KeyS") {
        logMessage(evt.key);
    } else if (evt.code === "KeyD") {
        logMessage(evt.key);
    } else if (evt.code === "KeyF") {
        logMessage(evt.key);
    } else if (evt.code === "KeyG") {
        logMessage(evt.key);
    } else if (evt.code === "KeyH") {
        logMessage(evt.key);
    } else if (evt.code === "KeyJ") {
        logMessage(evt.key);
    } else {
        console.warn("Warning");
    }
});

function logMessage(key) {
    const message = `The '${key}' key is pressed.`;
    console.log(message);
}
