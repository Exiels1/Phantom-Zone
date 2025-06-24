function greetUser() {
    alert("⚡ Welcome, Exiels1.");
}

let mode = 0;

function changeBackground() {
    const body = document.body;
    body.classList.remove("shake");

    if (mode === 0) {
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#000000";
    } else if (mode === 1) {
        body.style.backgroundColor = "#121212";
        body.style.color = "#ffffff";
    } else if (mode === 2) {
        body.style.backgroundColor = "#ff0000";
        body.style.color = "#000000";
        alert("😈 RED RAGE MODE ACTIVATED");
    } else {
        body.style.backgroundColor = "#2f2f2f";
        body.style.color = "#00ccff";
        body.classList.add("shake");
        alert("🌩️ STORM MODE: Exiels1 has entered the battlefield!");
    }

    mode = (mode + 1) % 4;
}
