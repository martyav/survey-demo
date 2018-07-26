function addTextInputForOther() {
    let menu = document.getElementById("dropdown");
    let survey = document.getElementById("survey-form");

    if (menu.value == "Other") {
        let newChild = document.createElement("input");
        newChild.setAttribute("id", "other-gender");
        newChild.setAttribute("type", "text");
        newChild.setAttribute("placeholder", "Type here");
        newChild.setAttribute("required", "");

        
        survey.appendChild(newChild);
    } else {
        let foundOther = document.getElementById("other-gender");
        
        if (foundOther) {
            menu.parentNode.removeChild(foundOther);
        }
    }
}

function requireText() {
    let textBox = document.getElementById("other-race-ethnicity");
    
    if (textBox.hasAttribute("required")) {
        textBox.removeAttribute("required");
    } else {
        textBox.setAttribute("required", "");
    }
}