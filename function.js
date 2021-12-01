function count(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operator = document.getElementById("xd").value;

    let result = document.getElementById("result");

    if(operator == "+"){
        result.innerHTML = Number(num1) + Number(num2);
    }else if(operator == "-"){
        result.innerHTML = Number(num1) - Number(num2);
    }else if(operator == "÷"){
        result.innerHTML = Number(num1) / Number(num2);
    }
    else if(operator == "×"){
        result.innerHTML = Number(num1) * Number(num2);
    }
}