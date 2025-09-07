const display = document.querySelector("input[name='display']");

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

function appendValue(val) {
    display.value += val;
}

function calculate() {
    try {
        display.value = math.evaluate(display.value);
    } catch (e) {
        alert("Invalid Expression!");
    }
}
