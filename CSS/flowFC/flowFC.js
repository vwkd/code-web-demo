const toggle = document.getElementById("toggle");
const parent_siblings = document.getElementsByClassName("parent-sibling");
const parent = document.getElementsByClassName("parent")[0];
const children = document.getElementsByClassName("child");

function setDisplay() {
    const pODT = toggle.querySelector('input[name="pODT"]:checked').value;
    const pIDT = toggle.querySelector('input[name="pFC"]:checked').value;
    const cODT = toggle.querySelector('input[name="cODT"]:checked').value;

    for (parent_sibling of parent_siblings) {
        parent_sibling.setAttribute("style", `display: ${pODT} flow`);
    }

    parent.setAttribute("style", `display: ${pODT} ${pIDT}`);

    for (child of children) {
        child.setAttribute("style", `display: ${cODT} flow`);
    }
}

// execute once to set default values
setDisplay();

toggle.addEventListener("change", setDisplay);
