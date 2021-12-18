console.log("jo")
function clearScreen() {
    document.getElementById("result").value = "";
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