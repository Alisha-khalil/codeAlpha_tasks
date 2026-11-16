
let display = document.getElementById("display");

function appenfvalue(value) {

    if (display.value == "Error") {
        display.value = "";
    }

    if (value == ".") {
        let parts = display.value.split(/[\+\-\*\/]/);
        
        if (parts[parts.length - 1].includes(".")) {
            return;
        }
    }

    display.value += value;

    updateResult();
}

function clearDisplay() {
    display.value = "";
    document.getElementById("liveResult").innerText = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    updateResult();
}

function calculate() {
    try {

        if (display.value == "") {
            return;
        }

        let answer = eval(display.value);

        if (!isFinite(answer)) {
            display.value = "Error";
        }
        else {
            display.value = answer;
        }

    } catch {
        display.value = "Error";
    }

    document.getElementById("liveResult").innerText = "";
}

function updateResult() {

    let result = document.getElementById("liveResult");

    try {

        if (display.value === "" || display.value === "Error") {
            result.innerText = "";
            return;
        }

        let answer = eval(display.value);

        result.innerText = answer;

    } catch {
        result.innerText = "";
    }
}
document.addEventListener("keydown", function(event) {

    if (event.key >= "0" && event.key <= "9") {
        appenfvalue(event.key);
    }

    else if (["+", "-", "*", "/", "."].includes(event.key)) {
        appenfvalue(event.key);
    }

    else if (event.key == "Enter") {
        calculate();
    }

    else if (event.key == "Backspace") {
        deleteLast();
    }

    else if (event.key == "Escape") {
        clearDisplay();
    }

});