let unlock = function (enteredPassword) {
    if (enteredPassword == "TrustNo1") {

        let elementsToChange = [].concat(Array.from(document.getElementsByName("checkbox")),
            Array.from(document.getElementsByName("range")),
        );

        for (let el of elementsToChange) {
            el.removeAttribute("disabled");
        }
        document.getElementById("password").setAttribute("disabled", "");
        document.getElementById("unlock").setAttribute("disabled", "");
    } else {
        alert("INCORRECT PASSWORD!");
        document.getElementById("password").value = "";
    }
}

let checkState = function() {

    let checkBoxesAreReady = 0;
    let leversAreReady = 0;
    for (let checkbox of checkboxes) {
        if (checkbox.checked == true) {
            checkBoxesAreReady++;
        } else {
            checkBoxesAreReady--;
        }
    }
    for (let lever of ranges) {
        if (lever.value == 100) {
            leversAreReady++;
        }
    }
    if (checkBoxesAreReady == 6 && leversAreReady == 5) {
        document.getElementById("launch").removeAttribute("disabled");
    }
};

let startTheRocket = function () {
    document.getElementById("launch").addEventListener("click", function () {
        document.getElementById("rocket").classList.add("flight");
    });
}

window.onload = function() {
    document.getElementById("unlock").addEventListener("click", function () {
        if (document.getElementById("password").value != "") {
            unlock(document.getElementById("password").value);
            document.querySelector(".control-panel__inner").onchange = checkState;
            startTheRocket();
        }
    });
}

const checkboxes = document.getElementsByName("checkbox");
const ranges = document.getElementsByName("range");