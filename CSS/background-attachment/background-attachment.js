const toggle = document.getElementById("toggle");
const box = document.getElementsByClassName("box")[0];

function setDisplay() {
    const bgattachment = toggle.querySelector('input[name="bgattachment"]:checked').value;

    box.setAttribute("style", `background-attachment: ${bgattachment}`);
}

toggle.addEventListener("change", setDisplay);