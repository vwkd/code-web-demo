const toggle = document.getElementById("toggle");
const container = document.getElementsByClassName("container")[0];

function setDisplay() {
    const repetitions = toggle.querySelector('input[name="repetitions"]:checked').value;
    const tracklistfragment = toggle.querySelector('input[name="tracklistfragment"]:checked').value;

    container.setAttribute("style", `grid-template-columns: repeat(${repetitions}, ${tracklistfragment});`);
}

toggle.addEventListener("change", setDisplay);