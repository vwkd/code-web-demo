const wrapper = document.getElementById("toggle");
const child = document.getElementsByClassName("child")[0];

function setDisplay() {
    const position = document.querySelector('input[name="position"]:checked').value;

    child.setAttribute("style", `position: ${position}`);
}

// execute once to set default values
setDisplay();

wrapper.addEventListener("change", setDisplay);
