const toggle = document.getElementById("toggle");
const boxes = document.getElementsByClassName("stretch");

function setDisplay() {
    const flexgrow = toggle.querySelector('input[name="flexgrow"]:checked').value;
    const flexshrink = toggle.querySelector('input[name="flexshrink"]:checked').value;

    for (const box of boxes) {
        box.setAttribute("style", `flex-grow: ${flexgrow}; flex-shrink: ${flexshrink};`);
    }
}

toggle.addEventListener("change", setDisplay);
