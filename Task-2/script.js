let display = document.getElementById("display");

function calculate() {
console.log(display.value);
display.value = eval(display.value);
}

function add(val) {
display.value += val;
}

function clean() {
display.value = "";
}

