const toggle = document.getElementById("toggle");
const boxes = document.getElementsByClassName("stretch");
const filler = document.getElementsByClassName("basis");

function setDisplay() {
    const flexbasis = toggle.querySelector('input[name="flexbasis"]:checked').value;
    const flexgrow = toggle.querySelector('input[name="flexgrow"]:checked').value;
    const flexshrink = toggle.querySelector('input[name="flexshrink"]:checked').value;

    for (const box of boxes) {
        box.setAttribute("style", `flex-basis: ${flexbasis}; flex-grow: ${flexgrow}; flex-shrink: ${flexshrink};`);
    }

    for (const box of filler) {
        // initial size is bound below by 'min-content'
        const flexbasisLowerbound = flexbasis == 0 ? "min-content" : flexbasis;
        box.setAttribute("style", `max-width: ${flexbasisLowerbound};`);
    }
}

toggle.addEventListener("change", setDisplay);