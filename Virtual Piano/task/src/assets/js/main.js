document.addEventListener("keypress", evt => {
    const boundKeyCodes = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ",
        "KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];


    boundKeyCodes.includes(evt.code);
    if (boundKeyCodes.includes(evt.code)) {
        const audio = new Audio(`assets/audio/${evt.key.toUpperCase()}.mp3`);
        audio.play()
    } else {
        console.warn("Warning");
    }
});