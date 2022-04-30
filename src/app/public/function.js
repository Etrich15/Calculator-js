console.log("jo")
function clearScreen() {
    document.getElementById("result").value = "";
}
function cclearScreen() {
    document.getElementById("result").value = "";
}
function ccclearScreen() {
    document.getElementById("result").value = "";
}
function idk() {
    document.getElementById("result").value /= eval(document.getElementById("result").value *= document.getElementById("result").value);
}
function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function n() {
    document.getElementById("result").value *= -1;
}
function i() {
    document.getElementById("result").value *= 0.01;
}
function x2() {
    document.getElementById("result").value *= document.getElementById("result").value;
}
function sqrt() {
    document.getElementById("result").value = Math.sqrt(document.getElementById("result").value);
}
