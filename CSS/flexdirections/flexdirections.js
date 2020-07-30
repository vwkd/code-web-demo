const toggle = document.getElementById("toggle");
const container = document.getElementsByClassName("container")[0];

function setDisplay() {
    const flexdirection = toggle.querySelector('input[name="flexdirection"]:checked').value;
    const flexwrap = toggle.querySelector('input[name="flexwrap"]:checked').value;
    const writingmode = toggle.querySelector('input[name="writingmode"]:checked').value;
    const direction = toggle.querySelector('input[name="direction"]:checked').value;

    container.setAttribute("style", `flex-direction: ${flexdirection}; flex-wrap: ${flexwrap}; writing-mode: ${writingmode}; direction: ${direction}`);
}

toggle.addEventListener("change", setDisplay);
